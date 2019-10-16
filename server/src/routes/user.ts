import * as express from 'express';
import * as gravatar from 'gravatar';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import { validateRegisterInput } from '../validation/register';
import { validateLoginInput } from '../validation/login';
import { User } from '../database/models/User';

const usersRouter = express.Router();

usersRouter.post('/register', function(req, res) {
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
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
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
});

usersRouter.post('/login', (req, res) => {
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
          avatar: user.avatar
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
});

usersRouter.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

export default usersRouter;
