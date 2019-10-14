import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types/State';
import { TokenService } from '../../services/token/TokenService';
import { setCurrentUser } from '../../store/actions/auth/actionCreators';
import { NavBar } from '../../components/navBar/NavBar';
import { useHistory } from 'react-router-dom';
import { ERoute } from '../../enums/Route';

export const NavBarContainer = () => {
  const { isAuthenticated, user } = useSelector(state => (state as State).auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    },
    [],
  );

  const handleLogout = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      TokenService.remove();
      dispatch(setCurrentUser({}));
      history.push(ERoute.login);
    },
    [],
  );

  return (
    <NavBar
      onLogout={handleLogout}
      isAuthenticated={isAuthenticated}
      user={user}
      onClick={handleClick}
    />
  );
};
