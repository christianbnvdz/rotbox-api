import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  hash: String,
});

const User = model('User', userSchema);

export default User;
