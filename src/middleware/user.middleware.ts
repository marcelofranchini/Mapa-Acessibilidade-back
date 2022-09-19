import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { jwtVerify } from '../modules/utils/jwt';
import { UsersService } from '../modules/users/users.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  // constructor(private readonly usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const userToken = (req.headers['x-access-token'] || '') as string;

      const verify = await jwtVerify(userToken);

      console.log(verify);

      if (!verify) {
        throw new HttpException('token inválido', 404);
      }

      // this.usersService.findOne(verify._id) /// verificar user

      //   (<any>req).userName = verify?.payload.name;
      next();
    } catch (err) {
      throw new HttpException(err, 404);
    }
  }
}
