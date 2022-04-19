import { Injectable } from '@nestjs/common';
import {students} from "../db";
import {v4 as uuid } from 'uuid';
import { FindStudentResponseDto, CreateStudentDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { StudentController } from './student.controller';
@Injectable()
export class StudentService {
    private students =students
    getStudents(): FindStudentResponseDto[] {
        return this.students
    }
    getStudentByID(studentId: string):FindStudentResponseDto {
        return this.students.find(student => student.id === studentId)
    }
        createStudent(body: CreateStudentDto): StudentResponseDto{
            let newStudent = {
                id: uuid(),
                ...body

        }
        this.students.push(newStudent)
        return newStudent

    }
    updateStudent(studentId: string, body: UpdateStudentDto): StudentResponseDto{
        let updatedStudent: StudentResponseDto

        let updatedStudentList = this.students.map(student => {
            if(student.id === studentId){
                updatedStudent = {
                    id: studentId,
                    ...body
                };
                student = updatedStudent
                return updatedStudent
            } else return student
        });

        this.students = updatedStudentList

        return updatedStudent
    }
}