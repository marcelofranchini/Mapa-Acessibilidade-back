import * as jwt from 'jsonwebtoken';

export function jwtCreate(payload: any) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

  return token;
}

export function jwtVerify(token: string) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return decoded;
}
