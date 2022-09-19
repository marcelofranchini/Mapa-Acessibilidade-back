import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { hashCompare } from '../utils/bcrypt';
import { jwtCreate } from '../utils/jwt';
import { loginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(private readonly usersService: UsersService) {}
  async login(data: loginDto) {
    try {
      const usernameExist = await this.usersService.findOneEmail(data.email);

      if (!usernameExist) {
        throw new HttpException('usuário ou senha incorretos', 404);
      }

      const passwordCompare = await hashCompare(
        data.password,
        usernameExist.password,
      );

      if (!passwordCompare) {
        throw new HttpException('usuário ou senha incorretos', 404);
      }

      const jwt = jwtCreate({
        idUser: usernameExist._id,
        name: usernameExist.name,
      });
      usernameExist.token = jwt;
      this.usersService.update(usernameExist._id, usernameExist);

      return usernameExist;
    } catch (err) {
      throw new HttpException(err, 404);
    }
  }
}
