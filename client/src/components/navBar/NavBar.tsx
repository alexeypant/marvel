import React from 'react';
import { Menu } from './Menu';
import { Item } from './Item';
import { User } from '../../types/users/User';
import { ERoute } from '../../enums/Route';

type NavBarProps = {
  onLogout: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // todo: e type
  isAuthenticated: boolean;
  user?: User;
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

export const NavBar = ({ onLogout, isAuthenticated, onClick }: NavBarProps) => {
  const authMenu = (
    <div>
      <Menu>
        <Item
          key="Home"
          label="Home"
          to={ERoute.root}
          onClick={onClick}
        />
        <Item
          key="Characters"
          label="Characters"
          to={ERoute.characters}
          onClick={onClick}
        />
      </Menu>
      <button onClick={onLogout}>Logout</button>
    </div>
  );

  const guestMenu = (
    <Menu>
      <Item
        key="Register"
        label="Register"
        to={ERoute.register}
        onClick={onClick}
      />
      <Item
        key="Login"
        label="Login"
        to={ERoute.login}
        onClick={onClick}
      />
    </Menu>
  );

  return isAuthenticated ? authMenu : guestMenu;
};
