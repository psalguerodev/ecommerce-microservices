import { UserDocument } from '@ecommerce/ecommerce-common/documents/user.interface';
import { SignInByEmailAndPassword } from '@ecommerce/ecommerce-common/dtos/sign-in-by-email-and-password.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthFacade {
  constructor(private readonly authService: AuthService) {}

  async signInByPassoword(
    signInByPasswordDto: SignInByEmailAndPassword,
  ): Promise<{ accessToken: string; user: UserDocument }> {
    const validateUser = await this.authService.validateUserByEmaiAndPassword(signInByPasswordDto);

    if (!validateUser.exist || !validateUser.isValid)
      throw new UnauthorizedException('Email or password incorrect');

    const user = validateUser.user;
    const payload = {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
    };

    const accessToken = await this.authService.signPayload(payload);

    return { accessToken, user: validateUser.user };
  }
}
