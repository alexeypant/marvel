import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types/State';
import { TokenService } from '../../services/token/TokenService';
import { setCurrentUser } from '../../store/actions/auth/actionCreators';
import { useHistory } from 'react-router-dom';
import { ERoute } from '../../enums/Route';
import { LoginStatus } from '../../components/loginStatus/LoginStatus';

export const LoginStatusContainer = () => {
  const { isAuthenticated, user } = useSelector(state => (state as State).auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      history.push(ERoute.login);
    },
    [],
  );

  const handleLogout = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      TokenService.remove();
      dispatch(setCurrentUser({}));
      history.push(ERoute.login);
    },
    [],
  );

  return (
    <LoginStatus
      onLogout={handleLogout}
      onLogin={handleLogin}
      isAuthenticated={isAuthenticated}
      user={user}
    />
  );
};
