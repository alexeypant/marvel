import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

const mongoose = require('mongoose');
const User = mongoose.model('users');
const strategyOptions: StrategyOptions = {
  secretOrKey: 'secret',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export const usePassport = passport => {
  passport.use(new Strategy(strategyOptions, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
    .then(user => {
      if(user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch(err => console.error(err));
  }));
};
