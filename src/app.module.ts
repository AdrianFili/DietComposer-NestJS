/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModel } from './user/entities/user.entity';
import { User } from './user/user.module';


@Module({
  imports: [User,
  TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'dietComposer2',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    entities: [UserModel],
    synchronize: true,
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
