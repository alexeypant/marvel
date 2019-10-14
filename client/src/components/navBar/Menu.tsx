import React, { ReactElement } from 'react';
import { MenuItemProps } from './Item';
import './navBar.css';

type MenuProps = {
  children: ReactElement<MenuItemProps>[];
};

export const Menu = ({ children }: MenuProps) => (
  <nav className="nav">
    <ul className="list">
      {children}
    </ul>
  </nav>
);
