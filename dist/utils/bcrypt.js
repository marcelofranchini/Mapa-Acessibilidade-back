"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashCompare = exports.hashCreate = void 0;
const bcrypt = require("bcrypt");
async function hashCreate(password) {
    const saltRounds = 10;
    const hash = await bcrypt.hashSync(password, saltRounds);
    return hash;
}
exports.hashCreate = hashCreate;
async function hashCompare(password, hash) {
    const compare = await bcrypt.compare(password, hash);
    return compare;
}
exports.hashCompare = hashCompare;
//# sourceMappingURL=bcrypt.js.map