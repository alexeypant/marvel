import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FormInputName } from '../../enums/FormInputName';
import { LoginForm } from '../../components/loginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types/State';
import { loginRequest } from '../../store/actions/login/actionCreators';

export const LoginFormContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useSelector(state => (state as State).login);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const trimmedValue = event.target.value.trim();
      if (trimmedValue.length > 0) {
        switch (event.target.name) {
          case FormInputName.Email: {
            setEmail(trimmedValue);
            break;
          }
          case FormInputName.Password: {
            setPassword(trimmedValue);
            break;
          }
        }
      }
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const user = {
        email,
        password,
      };
      dispatch(loginRequest(user));
    },
    [email, password],
  );

  return (
    <LoginForm
      title="New User Registration"
      emailValue={email}
      passwordValue={password}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
