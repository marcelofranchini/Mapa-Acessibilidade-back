import { Body, Controller, Post, Res } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  create(@Body() data: loginDto, @Res() res: Response) {
    return this.loginService.login(data);
  }
}
