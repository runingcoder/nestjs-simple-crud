import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateStudentDto {
    @IsString()
    name: string;
    @IsNotEmpty()
    teacher: string;
}
export class UpdateStudentDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    teacher: string;
}
export class FindStudentResponseDto {
    id: string;
    name: string;
    teacher: string;
}
export class StudentResponseDto {
    id: string;
    name: string;
    teacher: string;
}

