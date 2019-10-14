import React from 'react';
import { Link } from 'react-router-dom';

export type MenuItemProps = {
  label: string;
  to: string;
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

export const Item = ({ label, to, onClick }: MenuItemProps) => (
  <li className="item" onClick={onClick}>
    <Link to={to}>{label}</Link>
  </li>
);
