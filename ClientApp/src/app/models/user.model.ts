import {IsNotEmpty, IsEmail} from "class-validator";

export class User {
  id?: any;
  @IsNotEmpty()
  username?: string;
  @IsEmail()
  email?: string;
  @IsNotEmpty()
  password?: string;
}
