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
exports.PointSchema = exports.Point = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Point = class Point {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Point.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Point.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Point.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, required: true }),
    __metadata("design:type", Object)
], Point.prototype, "coord", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Point.prototype, "idUser", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: (0, mongoose_2.now)() }),
    __metadata("design:type", Date)
], Point.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: (0, mongoose_2.now)() }),
    __metadata("design:type", Date)
], Point.prototype, "updatedAt", void 0);
Point = __decorate([
    (0, mongoose_1.Schema)()
], Point);
exports.Point = Point;
exports.PointSchema = mongoose_1.SchemaFactory.createForClass(Point);
//# sourceMappingURL=point.entity.js.map