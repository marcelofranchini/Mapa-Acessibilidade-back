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

  app.use(function (req, res: Response, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type,x-access-token,Authorization,access-x-btc,elegibility,vonageAuth,device-data,x-client-name',
    );
    res.setHeader('Access-Control-Allow-Credentials', true as any);
    return next();
  });
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
