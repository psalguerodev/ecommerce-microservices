import { UserDocument } from '@ecommerce/ecommerce-common/documents/user.interface';
import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private readonly expiresIn = '12h';

  constructor(private readonly userService: UserService) {}

  async signPayload(payload: any): Promise<string> {
    return await sign(payload, process.env.JWT_SECRET, { expiresIn: this.expiresIn });
  }

  async validateUser(payload: any) {
    return await this.userService.findByEmail(payload);
  }

  async validateUserByEmaiAndPassword(
    signInByPasswordDto: any,
  ): Promise<{ exist: boolean; isValid: boolean; user: UserDocument }> {
    const validate = { exist: false, isValid: false, user: null };
    const user = await this.userService.findByEmail(signInByPasswordDto.email);

    if (!user) return validate;

    validate.user = user;
    validate.exist = true;

    if (compareSync(signInByPasswordDto.password, user.password)) validate.isValid = true;

    user.password = undefined;

    return validate;
  }
}
