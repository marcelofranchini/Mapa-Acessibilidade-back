"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("../../utils/bcrypt");
const jwt_1 = require("../../utils/jwt");
const users_service_1 = require("../users/users.service");
let LoginService = class LoginService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async login(data) {
        try {
            const usernameExist = await this.usersService.findOneEmail(data.email);
            if (!usernameExist) {
                throw new common_1.HttpException('usuário ou senha incorretos', 404);
            }
            const passwordCompare = await (0, bcrypt_1.hashCompare)(data.password, usernameExist.password);
            if (!passwordCompare) {
                throw new common_1.HttpException('usuário ou senha incorretos', 404);
            }
            const jwt = (0, jwt_1.jwtCreate)({
                idUser: usernameExist._id,
                name: usernameExist.name,
            });
            usernameExist.token = jwt;
            this.usersService.update(usernameExist._id, usernameExist);
            return usernameExist;
        }
        catch (err) {
            throw new common_1.HttpException(err, 404);
        }
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map