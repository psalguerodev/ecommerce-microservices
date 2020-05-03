import { UserDocument } from '@ecommerce/ecommerce-common/documents/user.interface';
import { CreateUserDto } from '@ecommerce/ecommerce-common/dtos/create-user.dto';
import { FindByEmailUserDto } from '@ecommerce/ecommerce-common/dtos/find-by-email-user.dto';
import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class UserFacade {
  constructor(private readonly userService: UserService) {}

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const user = await this.userService.findByEmail(createUserDto.email);

    if (user) throw new ConflictException(`User with email ${createUserDto.email} already exist`);

    await this.userService.create(createUserDto);
  }

  async findUserByEmail(emailDto: FindByEmailUserDto): Promise<UserDocument> {
    const user = await this.userService.findByEmail(emailDto.email);

    if (!user) throw new NotFoundException('User not exist');

    return user;
  }

  async findAllUsers(): Promise<UserDocument[]> {
    const users = await this.userService.findAllUsers();

    if (users && users.length === 0)
      throw new HttpException('There are no users', HttpStatus.NO_CONTENT);

    return users;
  }
}
