import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { jwtVerify } from '../modules/utils/jwt';
import { UsersService } from '../modules/users/users.service';
import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const userToken = (req.headers['x-access-token'] || '') as string;

      const verify: any = await jwtVerify(userToken);

      if (!verify) {
        throw new HttpException('token inválido', 404);
      }

      const { id } = verify;
      const abc = this.usersService.findOneCpf('fdfdf'); //find('6328aed60650946cb6e927bf'); /// verificar user

      console.log(abc);

      //   (<any>req).userName = verify?.payload.name;
      next();
    } catch (err) {
      throw new HttpException(err, 404);
    }
  }
}
