import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { RegisterForm } from '../../components/form/RegisterForm';
import { FormInputName } from '../../enums/FormInputName';
import { User } from '../../types/users/User';
import { registerRequest } from '../../store/actions/register/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types/State';

export const RegisterFormContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [formError, setFormError] = useState('');
  const { isError, error } = useSelector(state => (state as State).register);
  const dispatch = useDispatch();
  const errorDescription = formError.length > 0
    ? formError
    : isError
      ? error
      : '';

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const trimmedValue = event.target.value.trim();
      if (trimmedValue.length > 0) {
        switch (event.target.name) {
          case FormInputName.Name: {
            setName(trimmedValue);
            break;
          }
          case FormInputName.Email: {
            setEmail(trimmedValue);
            break;
          }
          case FormInputName.Password: {
            setPassword(trimmedValue);
            break;
          }
          case FormInputName.PasswordConfirm: {
            setPasswordConfirm(trimmedValue);
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
      if (password !== passwordConfirm) {
        setFormError('passwords should match');
      } else {
        const user: User = {
          name,
          email,
          password,
        };
        dispatch(registerRequest(user));
      }
    },
    [name, email, password, passwordConfirm],
  );

  return (
    <RegisterForm
      title="New User Registration"
      nameValue={name}
      emailValue={email}
      passwordValue={password}
      passwordConfirmValue={passwordConfirm}
      error={errorDescription}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
