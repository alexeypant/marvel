import React, { ChangeEvent, FormEvent } from 'react';
import { Item } from '../commons/form/Item';
import { FormInputName } from '../../enums/FormInputName';
import { Button } from '../commons/form/Button';
import './Form.css';
import { Link } from 'react-router-dom';
import { ERoute } from '../../enums/Route';

type RegisterFormProps = {
  nameValue: string;
  emailValue: string;
  passwordValue: string;
  passwordConfirmValue: string;
  error: string;
  isDisabled: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const RegisterForm = (
  {
    nameValue,
    emailValue,
    passwordValue,
    passwordConfirmValue,
    error,
    isDisabled,
    onChange,
    onSubmit,
  }: RegisterFormProps) => {

  return (

      <form className="form" onSubmit={onSubmit}>
          <h2 className="header"><Link to={ERoute.login}>Sign-in</Link> / Sign-up</h2>
          {error && <div className="error">{error}</div>}
          <Item
            label="Name"
            type="text"
            placeholder=""
            name={FormInputName.Name}
            value={nameValue}
            isDisabled={isDisabled}
            onChange={onChange}
          />
          <Item
            label="Email"
            type="email"
            placeholder=""
            name={FormInputName.Email}
            value={emailValue}
            isDisabled={isDisabled}
            onChange={onChange}
          />
          <Item
            label="Password"
            type="password"
            placeholder=""
            name={FormInputName.Password}
            value={passwordValue}
            isDisabled={isDisabled}
            onChange={onChange}
          />
          <Item
            label="Confirm Password"
            type="password"
            placeholder=""
            name={FormInputName.PasswordConfirm}
            value={passwordConfirmValue}
            isDisabled={isDisabled}
            onChange={onChange}
          />
          <Button
            disabled={isDisabled}
            type="submit"
          >
            Register
          </Button>
      </form>
  );
};
