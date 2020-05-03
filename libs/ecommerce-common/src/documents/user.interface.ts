import { Document } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  name: string;
  lastname: string;
  password: string;
}
