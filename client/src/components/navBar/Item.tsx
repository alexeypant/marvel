import React from 'react';
import { Link } from 'react-router-dom';

export type MenuItemProps = {
  label: string;
  to: string;
  onClick: () => void;
};

export const Item = ({ label, to, onClick }: MenuItemProps) => (
  <li className="item">
    <Link onClick={onClick} to={to}>{label}</Link>
  </li>
);
