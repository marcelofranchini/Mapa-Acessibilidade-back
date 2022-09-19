import { loginDto } from './dto/login.dto';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    create(data: loginDto): Promise<import("../users/entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
