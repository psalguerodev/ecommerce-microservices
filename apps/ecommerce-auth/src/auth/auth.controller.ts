import { SignInByEmailAndPassword } from '@ecommerce/ecommerce-common/dtos/sign-in-by-email-and-password.dto';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthFacade } from './auth.facade';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authFacade: AuthFacade
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  sayHello() {
    return 'From AuthController'
  }

  @Post('/token')
  async authByUserAndPassword(@Body() signInByEmailAndPassword: SignInByEmailAndPassword) {
    return await this.authFacade.signInByPassoword(signInByEmailAndPassword);
  }

  @Post('/checktoken')
  async checkToken() {
    return { ok: true };
  }

}
