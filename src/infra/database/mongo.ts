import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_MONGO } from 'src/config/env/server.constants';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_MONGO, {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('is connected');
        });
        connection.on('disconnected', () => {
          console.log('DB disconnected');
        });
        connection.on('error', (error) => {
          console.log('DB connection failed! for error: ', error);
        });
        return connection;
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class MongoDBModule {}
