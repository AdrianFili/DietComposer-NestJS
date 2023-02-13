/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm/dist/typeorm.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserModel } from "./entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [UserService]
})
export class User{}