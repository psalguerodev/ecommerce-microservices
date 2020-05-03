import { IsNotEmpty, IsEmail } from 'class-validator';
export class SignInByEmailAndPassword {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
