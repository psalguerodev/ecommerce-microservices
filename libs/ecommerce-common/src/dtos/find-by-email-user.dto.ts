import { IsEmail, IsNotEmpty } from 'class-validator';

export class FindByEmailUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
