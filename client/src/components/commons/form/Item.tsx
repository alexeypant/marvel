import React, { ChangeEvent } from 'react';

export type FormItemProps = {
  type: string;
  placeholder: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Item = ({ type, placeholder, name, onChange, value }: FormItemProps) => (
  <div className="container">
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      required={true}
    />
  </div>
);
