/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from "class-validator";


export class signupUserDto{
    @IsString({ message: "User name must contain only letters, numbers or spaces"})
    userName: string;

    @IsEmail()
    email: string;
    
    password: string;
}

