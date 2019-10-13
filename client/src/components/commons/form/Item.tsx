import React, { ChangeEvent } from 'react';
import './Item.css';

export type FormItemProps = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Item = ({ label, type, placeholder, name, onChange, value }: FormItemProps) => (
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
    />
  </div>
);
