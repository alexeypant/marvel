import React from 'react';
import { Link } from 'react-router-dom';

export type MenuItemProps = {
  label: string;
  to: string;
};

export const Item = ({ label, to }: MenuItemProps) => (
  <li className="item">
    <Link to={to}>{label}</Link>
  </li>
);
