import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { jwtVerify } from '../utils/jwt';
import { UsersService } from '../modules/users/users.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const userToken = (req.headers['x-access-token'] || '') as string;
      const verify: any = await jwtVerify(userToken);
      const { idUser } = verify;

      if (!verify) {
        throw new HttpException('token inválido', 404);
      }

      const userExist = await this.usersService.findOne(idUser);

      if (!userExist) {
        throw new HttpException('usuário não cadastrado', 404);
      }
      // (<any>req).userName = verify?.payload.name;
      next();
    } catch (err) {
      throw new HttpException(err, 404);
    }
  }
}
