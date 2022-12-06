require('dotenv/config');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   allowedHeaders: [
  //     'x-access-token',
  //     'Content-Type',
  //     'Access-Control-Allow-Origin',
  //     '*',
  //   ],
  //   origin: [
  //     'https://mapaacessibilidadetcc.vercel.app',
  //     '*',
  //     'http://localhost:3000',
  //   ],
  //   credentials: true,
  // });
  // app.enableCors();

  //   { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //   { key: 'Access-Control-Allow-Origin', value: '*' },
  //   { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
  //   { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
  // ],
  // },
  // ];
  // },
  // async redirects() {
  // return [];
  // }
  // };

  app.enableCors({
    credentials: true,
    origin: '*',
    methods: 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
    allowedHeaders:
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
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
