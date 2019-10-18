import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import { EServerRoute } from '../enums/EServerRoute';
import { handleRegister } from './handlers/handleRegister';
import { handleLogin } from './handlers/handleLogin';
import { handleMe } from './handlers/handleMe';

const usersRouter = express.Router();

usersRouter.post(EServerRoute.register, handleRegister);
usersRouter.post(EServerRoute.login, handleLogin);
usersRouter.get(EServerRoute.me, passport.authenticate('jwt', { session: false }), handleMe);

export default usersRouter;
