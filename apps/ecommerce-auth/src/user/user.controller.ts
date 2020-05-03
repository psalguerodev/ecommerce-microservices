import { CreateUserDto } from '@ecommerce/ecommerce-common/dtos/create-user.dto';
import { FindByEmailUserDto } from '@ecommerce/ecommerce-common/dtos/find-by-email-user.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserFacade } from './user.facade';

@Controller('user')
export class UserController {
  constructor(private readonly userFacade: UserFacade) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userFacade.createUser(createUserDto);
  }

  @Get()
  async getallUsers() {
    return await this.userFacade.findAllUsers();
  }

  @Get('/email/:email')
  async findByEmail(@Param() email: FindByEmailUserDto) {
    return await this.userFacade.findUserByEmail(email);
  }
}
