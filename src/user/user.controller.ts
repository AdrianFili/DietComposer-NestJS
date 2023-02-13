/* eslint-disable prettier/prettier */
import { Controller, Get, HttpException, HttpStatus, Headers  } from "@nestjs/common";
import { Body, Delete, HttpCode, Param, Post } from "@nestjs/common/decorators";
import { signupUserDto } from "./dtos/signupUser.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController{
    /*
    private userService;
    constructor(userService: UserService){
        this.userService = userService;
    }*/
    
    constructor( private userService: UserService){}
    
    
    @Post('/refreshToken')
    @HttpCode(200)
    getRefreshToken(@Headers('tokens') token: string){
        const res = this.userService.getRefreshToken(token);
        if(res) return res;
        else throw new HttpException('Something went wrong with the server', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Delete('/logout')
    @HttpCode(200)
    logOutUser(@Headers('token') token: string){
        const loggedOut = this.userService.logOutUser(token);
        if(loggedOut) return loggedOut;
        else throw new HttpException('Something went wrong with the server', HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @Post('/uploadImage')
    @HttpCode(201)
    userImage(@Headers('token') token: string){
        const uploadImage = this.userService.uploadImage(token);
        if(uploadImage) return uploadImage;
        else throw new HttpException('Something went wrong with the server', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Get('/downloadUserImage')
    @HttpCode(200)
    getUserImage(@Headers('token') token: string){
        const userImage = this.userService.getUserImage(token);
        if(userImage) return userImage;
        else throw new HttpException('Something went wrong with the server', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Get('/BodyMassIndex')
    @HttpCode(201)
    BMI(@Headers('token') token: string){
        const BMI = this.userService.BMI(token);
        if(BMI) return BMI;
        else throw new HttpException('Something went wrong with the server', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Post('/all')
    @HttpCode(200)
    getUserData(@Headers('token') token: string){
        const data = this.userService.getUserData(token);
        if(data) return data;
        else throw new HttpException('Something went wrong with the server', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Delete()
    @HttpCode(204)
    deleteUser(@Headers('token') token: string){
        const temp = this.userService.deleteUser(token);
        if(temp) return temp;
        else throw new HttpException('Something went wrong with the server', HttpStatus.INTERNAL_SERVER_ERROR);
    }

//--------------------------------------------------------------------------------------------------------------------------------------------

    @Get('/all')
    getProducts(){
        return this.userService.getProducts();
    }
    
    @Get('/signup')
    @HttpCode(200)
    login(){
        console.log("zalogowano")
    }
    @Get('/userid/:id')
    getId(@Param('id') id: string){
        return this.userService.getId(id);
    }

    @Post()
    signinUser(@Body() body: signupUserDto){
        console.log("welcome!" + body.userName); 
    }
}