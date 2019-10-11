import React  from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  children: string;
};

export const Button = ({ type, disabled, children }: Props) => (
  <div className="container">
    <button
      className="button"
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  </div>
);
