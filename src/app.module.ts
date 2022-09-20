import { PointsController } from './modules/points/points.controller';
import { UsersController } from './modules/users/users.controller';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDBModule } from './infra/database/mongo';
import { UsersModule } from './modules/users/users.module';
import { PointsModule } from './modules/points/points.module';
import { UserMiddleware } from './middleware/user.middleware';
import { LoginModule } from './modules/login/login.module';
import { UsersService } from './modules/users/users.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './modules/users/entities/user.entity';

@Module({
  imports: [
    MongoDBModule,
    UsersModule,
    PointsModule,
    HttpModule,
    LoginModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .exclude({ path: 'points', method: RequestMethod.GET })
      .forRoutes(UsersController, PointsController);
  }
}
