import { CreateUserDto } from '@ecommerce/ecommerce-common/dtos/create-user.dto';
import { UserDocument } from '@ecommerce/ecommerce-common/documents/user.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { genSaltSync, hashSync } from 'bcryptjs';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    createUserDto.password = this.hashPassword(createUserDto.password);
    const userCreated = new this.userModel(createUserDto);
    await userCreated.save();
  }

  private hashPassword(password: string): string {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }

  async findByEmail(email: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email }).select(this.excludeUserSelect());
    return user;
  }

  async findAllUsers(): Promise<UserDocument[]> {
    const users = await this.userModel.find({}).select(`${this.excludeUserSelect()} -password`);
    return users;
  }

  private excludeUserSelect(): string {
    return `-__v`;
  }
}
