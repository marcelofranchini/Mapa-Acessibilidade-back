"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("../modules/utils/jwt");
let UserMiddleware = class UserMiddleware {
    async use(req, res, next) {
        try {
            const userToken = (req.headers['x-access-token'] || '');
            const verify = await (0, jwt_1.jwtVerify)(userToken);
            console.log(verify);
            if (!verify) {
                throw new common_1.HttpException('token inválido', 404);
            }
            next();
        }
        catch (err) {
            throw new common_1.HttpException(err, 404);
        }
    }
};
UserMiddleware = __decorate([
    (0, common_1.Injectable)()
], UserMiddleware);
exports.UserMiddleware = UserMiddleware;
//# sourceMappingURL=user.middleware.js.map