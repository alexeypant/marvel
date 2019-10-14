import React, { ChangeEvent } from 'react';
import './Item.css';

export type FormItemProps = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isDisabled?: boolean;
};

export const Item = ({ label, type, placeholder, name, onChange, value, isDisabled }: FormItemProps) => (
  <div className="container">
    <label className="label">
      {label}
    </label>
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      required={true}
      disabled={isDisabled}
    />
  </div>
);
