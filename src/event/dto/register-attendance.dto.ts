import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterAttendanceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
