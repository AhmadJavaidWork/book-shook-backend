import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET } from '../../config/environment';
import knex from '../../knex';

export const tokenStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([
      ExtractJwt.fromUrlQueryParameter('access_token'),
      ExtractJwt.fromBodyField('access_token'),
      ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    ]),
  },
  ({ user }, done) => {
    knex('users')
      .where({ id: user.id })
      .then((user) => {
        done(null, user[0]);
        return null;
      })
      .catch(done);
  }
);
