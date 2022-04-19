import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import{ FindTeacherResponseDto} from "./dto/teacher.dto"
import { TeacherService } from "./teacher.service";

    @Controller('teachers')
    export class TeacherController{
        constructor(private readonly teacherService: TeacherService){}
    @Get()
    getallTeachers(): FindTeacherResponseDto[]{
        return this.teacherService.getTeachers()
    }
    @Get('/:teacherid')
    getTeacherByID(
        @Param('teacherid', new ParseUUIDPipe()) teacherid: string):FindTeacherResponseDto{
        return this.teacherService.getTeacherByID(teacherid)
    }
    
    }