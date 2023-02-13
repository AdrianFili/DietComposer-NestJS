/* eslint-disable prettier/prettier */
import { Injectable, Param } from "@nestjs/common";


@Injectable()
export class UserService{
    getRefreshToken(token: string){
        let token2: string;
        console.log(token);
        if(token) token2 = 'dasd12ea';
        else return false;
        
        console.log('generowanie tokenu')
        return {token, token2}

    }

    logOutUser(token: string){
        return token;
    }

    uploadImage(token: string){
        return token;
    }

    getUserImage(token: string){
        return token;
    }

    BMI(token: string){
        return token;
    }
    getUserData(token: string){
        return token;
    }

    deleteUser( token: string){
        return token;
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    getProducts(){
        return { ala: "ma kota"};
     }

    login(){
        return "zalogowanoo";
    }

    getId(id: string){
        return "porano id: " + id;
    }
    
}