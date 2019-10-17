import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export type MenuItemProps = {
  label: string;
  to: string;
};

export const Item = ({ label, to }: MenuItemProps) => {

  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <li className={`item ${match ? 'active' : ''}`}>
      <Link to={to}>{label}</Link>
    </li>
  );

};
