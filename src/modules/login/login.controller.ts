import { Body, Controller, Post, Res } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { LoginService } from './login.service';
import { Response } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  create(@Body() data: loginDto, @Res() res: Response) {
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

    return this.loginService.login(data);
  }
}
