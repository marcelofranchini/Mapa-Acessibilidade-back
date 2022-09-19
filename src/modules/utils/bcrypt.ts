import * as bcrypt from 'bcrypt';

export async function hashCreate(password: string) {
  const saltRounds = 10;
  const hash = await bcrypt.hashSync(password, saltRounds);
  return hash;
}

export async function hashCompare(password: string, hash: string) {
  const compare = await bcrypt.compare(password, hash);
  return compare;
}
