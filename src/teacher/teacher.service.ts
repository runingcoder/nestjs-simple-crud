import { Injectable } from '@nestjs/common';
import{ FindTeacherResponseDto} from "./dto/teacher.dto"
import {StudentResponseDto} from "../student/dto/student.dto"
import {teachers, students} from "../db";

@Injectable()
export class TeacherService {
   private teachers = teachers
   private students = students
    getTeachers(): FindTeacherResponseDto[]{
        return this.teachers
    }
    getTeacherByID(teacherId): FindTeacherResponseDto{
        return this.teachers.find(teacher => teacher.id === teacherId)
    }
    getstudentbyTeacherID(teacherId): FindTeacherResponseDto[]{
        return this.students.filter(student => student.teacher === teacherId)
    }
    updateStudentByTeacherID(teacherId:string, studentID:string): StudentResponseDto{
        let updatedStudent :StudentResponseDto
        let updatedStudentList = this.students.map(student => {
            if(student.id === studentID){
                updatedStudent = {
                    ...student,
                    teacher: teacherId
                    
                };
                return updatedStudent
            } else return student 
});
this.students = updatedStudentList
return updatedStudent
    }
}
