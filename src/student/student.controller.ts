import {Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseUUIDPipe} from "@nestjs/common"
import { CreateStudentDto, FindStudentResponseDto, UpdateStudentDto,StudentResponseDto} from "./dto/student.dto"
import { StudentService} from "./student.service"
@Controller('students')
export class StudentController{
    constructor(private readonly studentService: StudentService){}
    @Get()
    getStudents() {
       return this.studentService.getStudents()
    }
// using [] for more than one value,and not using [] for one value.
    @Get('/:studentId')
    getStudentByID(
        @Param('studentId', new ParseUUIDPipe()) studentId : string
    ): FindStudentResponseDto{
        
       return this.studentService.getStudentByID(studentId)
    }

    @Post()
    createStudent(
        @Body() body : CreateStudentDto
    ): StudentResponseDto{
        return this.studentService.createStudent(body)  
     }


    @Put('/:studentId')
    updateStudent(
        @Param('studentId', new ParseUUIDPipe()) studentId : string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto{
        return this.studentService.updateStudent(studentId,body)
    }
    


}