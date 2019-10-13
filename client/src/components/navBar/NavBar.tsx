import React from 'react';
import { Menu } from './Menu';
import { Item } from './Item';

export const NavBar = () => (
  <Menu>
    <Item
      key="Home"
      label="Home"
      to="/"
    />
    <Item
      key="Register"
      label="Register"
      to="/register"
    />
    <Item
      key="Login"
      label="Login"
      to="/login"
    />
  </Menu>
);
