import { validateRegisterInput } from '../../validation/register';
import { User } from '../../database/models/User';
import * as bcrypt from 'bcryptjs';

export const handleRegister = (req, res) => {
  const { error, isValid } = validateRegisterInput(req.body);

  if(!isValid) {
    return res.status(200).json({
      isError: true,
      error,
    });
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    if(user) {
      return res.status(200).json({
        isError: true,
        error: 'Email already exists'
      });
    }
    else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        if(err) console.error('There was an error', err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) console.error('There was an error', err);
            else {
              newUser.password = hash;
              newUser
              .save()
              .then(user => {
                res.json(user)
              });
            }
          });
        }
      });
    }
  });
};