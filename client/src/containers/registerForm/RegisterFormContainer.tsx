import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { RegisterForm } from '../../components/form/RegisterForm';
import { registerClearState, registerRequest } from '../../store/actions/register/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types/State';
import { RegisterData } from '../../types/users/RegisterData';
import { initialRegisterData } from './constants';
import { useHistory } from 'react-router-dom';
import { ERoute } from '../../enums/Route';

export const RegisterFormContainer = () => {
  const [registerData, setRegisterData] = useState<RegisterData>(initialRegisterData);
  const [formError, setFormError] = useState('');
  const { isRegisterPending, isRegistered, isError, error } = useSelector(state => (state as State).register);
  const history = useHistory();
  const dispatch = useDispatch();
  const errorDescription = formError.length > 0
    ? formError
    : isError
      ? error
      : '';

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const trimmedValue = event.target.value.trim();
      setRegisterData({
        ...registerData,
        [event.target.name]: trimmedValue,
      });
    },
    [registerData, setRegisterData],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (registerData.password !== registerData.passwordConfirm) {
        setFormError('passwords should match');
      } else {
        dispatch(registerRequest(registerData));
      }
    },
    [registerData, setFormError, dispatch],
  );

  const handleRedirect = useCallback(
    () => {
      if (isRegistered) {
        setRegisterData(initialRegisterData);
        history.push(ERoute.login);
        dispatch(registerClearState());
      }
    },
    [isRegistered, setRegisterData, history, dispatch],
  );

  useEffect(() => {
    handleRedirect();
  }, [isRegistered, handleRedirect]);

  return (
    <RegisterForm
      nameValue={registerData.name}
      emailValue={registerData.email}
      passwordValue={registerData.password}
      passwordConfirmValue={registerData.passwordConfirm}
      error={errorDescription}
      isDisabled={isRegisterPending}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
