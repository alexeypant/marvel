import { User } from '../../database/models/User';
import * as bcrypt from 'bcryptjs';
import { validateLoginInput } from '../../validation/login';
import * as jwt from 'jsonwebtoken';

export const handleLogin = (req, res) => {
  const { error, isValid } = validateLoginInput(req.body);
  if(!isValid) {
    return res.json({
      isError: true,
      error: error,
    });
  }

  const { email, password } = req.body;
  User.findOne({email})
  .then(user => {
    if(!user) {
      return res.json({
        isError: true,
        error: 'User not found',
      });
    }
    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if(isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        };
        jwt.sign(payload, 'secret', {
          expiresIn: 3600
        }, (err, token) => {
          if(err) console.error('There is some error in token', err);
          else {
            res.json({
              isError: false,
              error: '',
              token: `Bearer ${token}`
            });
          }
        });
      }
      else {
        return res.json({
          isError: true,
          error: 'Incorrect Password',
        });
      }
    });
  });
};