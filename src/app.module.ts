import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDBModule } from './infra/database/mongo';
import { UsersModule } from './modules/users/users.module';
import { PointsModule } from './modules/points/points.module';
import { UserMiddleware } from './middleware/user.middleware';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [MongoDBModule, UsersModule, PointsModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes({ path: '/users', method: RequestMethod.GET });
  }
}
