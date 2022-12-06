require('dotenv/config');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(compression());
  app.use(helmet());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(process.env.PORT || 3000, () => {
    console.log(mongoose.STATES[mongoose.connection.readyState]);
    console.log(`server linten on Port: ${process.env.PORT}`);
  });
}
bootstrap();
