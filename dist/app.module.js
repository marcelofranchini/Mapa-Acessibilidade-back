"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const points_controller_1 = require("./modules/points/points.controller");
const users_controller_1 = require("./modules/users/users.controller");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongo_1 = require("./infra/database/mongo");
const users_module_1 = require("./modules/users/users.module");
const points_module_1 = require("./modules/points/points.module");
const user_middleware_1 = require("./middleware/user.middleware");
const login_module_1 = require("./modules/login/login.module");
const users_service_1 = require("./modules/users/users.service");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./modules/users/entities/user.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(user_middleware_1.UserMiddleware)
            .exclude({ path: 'points', method: common_1.RequestMethod.GET })
            .forRoutes(users_controller_1.UsersController, points_controller_1.PointsController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongo_1.MongoDBModule,
            users_module_1.UsersModule,
            points_module_1.PointsModule,
            axios_1.HttpModule,
            login_module_1.LoginModule,
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.User.name, schema: user_entity_1.UserSchema }]),
        ],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController],
        providers: [app_service_1.AppService, users_service_1.UsersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map