import { Body, Controller, Post } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  create(@Body() data: loginDto) {
    return this.loginService.login(data);
  }
}
