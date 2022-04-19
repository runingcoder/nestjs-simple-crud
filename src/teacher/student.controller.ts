import { Controller, Get, Post, Put, Delete, Param , Body, ParseUUIDPipe} from "@nestjs/common";
import { StudentResponseDto } from "src/student/dto/student.dto";
import{ FindTeacherResponseDto} from "./dto/teacher.dto"
import { TeacherService } from "./teacher.service";

    @Controller('teachers/:teacherid/students')
    export class StudentTeacherController{
        constructor(private readonly studentTeacherService:TeacherService){}
 
    @Get()
    getstudentbyTeacherID(
        @Param('teacherid', new ParseUUIDPipe()) teacherid: string   ){
    
        return this.studentTeacherService.getstudentbyTeacherID(teacherid)
    }
    @Put('/:studentID')
    updateStudentByTeacherID(
        @Param('teacherid', new ParseUUIDPipe()) teacherid: string   ,
        @Param('studentID', new ParseUUIDPipe()) studentID: string   
    ):StudentResponseDto{
        return this.studentTeacherService.updateStudentByTeacherID(teacherid,studentID)


    }
    }