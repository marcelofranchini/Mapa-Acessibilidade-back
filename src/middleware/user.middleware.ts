import { UsersService } from './../modules/users/users.service';
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { jwtVerify } from '../modules/utils/jwt';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const userToken = (req.headers['x-access-token'] || '') as string;

      const verify = await jwtVerify(userToken);

      console.log(verify);

      if (!verify) {
        throw new HttpException('Pacient não encontrado', 404);
      }

      //   (<any>req).userName = verify?.payload.name;
      next();
    } catch (err) {
      throw new HttpException(err, 404);
    }
  }
}
