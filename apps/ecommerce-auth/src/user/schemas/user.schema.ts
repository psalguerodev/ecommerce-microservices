import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String },
  password: { type: String, required: true },
  email: { type: String, required: true },
});
