import jwt from 'jsonwebtoken';
import Promise from 'bluebird';
import { JWT_SECRET } from '../../config/environment';

const jwtSign = Promise.promisify(jwt.sign);
const jwtVerify = Promise.promisify(jwt.verify);

export const sign = (user, options, method = jwtSign) =>
  method({ user }, JWT_SECRET, options);

export const signSync = (user, options) => sign(user, options, jwt.sign);

export const verify = (token) => jwtVerify(token, JWT_SECRET);
