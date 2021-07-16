import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { MASTER_KEY } from '../../config/environment';

export const masterStrategy = new BearerStrategy((token, done) => {
  if (token === MASTER_KEY) {
    done(null, {});
  } else {
    done(null, false);
  }
});
