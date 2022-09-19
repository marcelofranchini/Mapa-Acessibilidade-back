import * as jwt from 'jsonwebtoken';
export declare function jwtCreate(payload: any): string;
export declare function jwtVerify(token: string): string | jwt.JwtPayload;
