import { UsersService } from '../users/users.service';
import { loginDto } from './dto/login.dto';
export declare class LoginService {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(data: loginDto): Promise<import("../users/entities/user.entity").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
