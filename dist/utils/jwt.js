"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerify = exports.jwtCreate = void 0;
const jwt = require("jsonwebtoken");
function jwtCreate(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
}
exports.jwtCreate = jwtCreate;
function jwtVerify(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}
exports.jwtVerify = jwtVerify;
//# sourceMappingURL=jwt.js.map