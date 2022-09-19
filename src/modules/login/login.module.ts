import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UsersService } from '../users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from '../users/users.controller';
import { User, UserSchema } from '../users/entities/user.entity';

@Module({
  controllers: [LoginController, UsersController],
  providers: [LoginService, UsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class LoginModule {}
