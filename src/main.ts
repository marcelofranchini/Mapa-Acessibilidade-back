require('dotenv/config');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from 'compression';
import helmet from 'helmet';
import { PORT } from './config/env/server.constants';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(compression());
  app.use(helmet());

  await app.listen(process.env.PORT, () => {
    console.log(mongoose.STATES[mongoose.connection.readyState]);
    console.log(`server linten on Port: ${process.env.PORT}`);
  });
}
bootstrap();
