import React from 'react';
import { Menu } from './Menu';
import { Item } from './Item';

export const NavBar = () => {
  const handleClick = () => {

  };
  return (
    <Menu>
      <Item
        key="Home"
        label="Home"
        to="/"
        onClick={handleClick}
      />
      <Item
        key="Register"
        label="Register"
        to="/register"
        onClick={handleClick}
      />
      <Item
        key="Login"
        label="Login"
        to="/login"
        onClick={handleClick}
      />
    </Menu>
  );
};
