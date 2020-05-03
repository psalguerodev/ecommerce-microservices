import { IsEmail, IsAlpha, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @IsAlpha()
  @IsNotEmpty()
  lastname: string;

  @IsAlpha()
  @IsNotEmpty()
  password: string;
}
