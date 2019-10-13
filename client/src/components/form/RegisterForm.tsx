import React, { ChangeEvent, FormEvent } from 'react';
import { Item } from '../commons/form/Item';
import { FormInputName } from '../../enums/FormInputName';
import { Button } from '../commons/form/Button';
import './Form.css';
import { Link } from 'react-router-dom';

type RegisterFormProps = {
  title: string;
  nameValue: string;
  emailValue: string;
  passwordValue: string;
  passwordConfirmValue: string;
  error: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const RegisterForm = (
  {
    title,
    nameValue,
    emailValue,
    passwordValue,
    passwordConfirmValue,
    error,
    onChange,
    onSubmit,
  }: RegisterFormProps) => {

  return (

      <form className="form" onSubmit={onSubmit}>
          <h2 className="header"><Link to={"/login"}>Sign-in</Link> / Sign-up</h2>
          {error && <div className="error">{error}</div>}
          <Item
            label="Name"
            type="text"
            placeholder=""
            name={FormInputName.Name}
            value={nameValue}
            onChange={onChange}
          />
          <Item
            label="Email"
            type="email"
            placeholder=""
            name={FormInputName.Email}
            value={emailValue}
            onChange={onChange}
          />
          <Item
            label="Password"
            type="password"
            placeholder=""
            name={FormInputName.Password}
            value={passwordValue}
            onChange={onChange}
          />
          <Item
            label="Confirm Password"
            type="password"
            placeholder=""
            name={FormInputName.PasswordConfirm}
            value={passwordConfirmValue}
            onChange={onChange}
          />
          <Button
            type="submit"
          >
            Register
          </Button>
      </form>
  );
};
