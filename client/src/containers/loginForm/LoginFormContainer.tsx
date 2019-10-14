import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { LoginForm } from '../../components/form/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types/State';
import { loginClearState, loginRequest } from '../../store/actions/login/actionCreators';
import { LoginData } from '../../types/users/LoginData';
import { initialLoginData } from './constants';
import { useHistory } from 'react-router';
import { ERoute } from '../../enums/Route';

export const LoginFormContainer = () => {
  const [loginData, setLoginData] = useState<LoginData>(initialLoginData);
  const { isLoginPending, isLoggedIn, error } = useSelector(state => (state as State).login);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const trimmedValue = event.target.value.trim();
      setLoginData({
        ...loginData,
        [event.target.name]: trimmedValue,
      });
    },
    [loginData],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(loginRequest(loginData));
    },
    [loginData],
  );

  const handleRedirect = useCallback(
    () => {
      if (isLoggedIn) {
        setLoginData(initialLoginData);
        history.push(ERoute.root);
        dispatch(loginClearState());
      }
    },
    [isLoggedIn],
  );

  useEffect(() => {
    handleRedirect();
  }, [isLoggedIn]);

  return (
    <LoginForm
      emailValue={loginData.email}
      passwordValue={loginData.password}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isDisabled={isLoginPending}
    />
  );
};
