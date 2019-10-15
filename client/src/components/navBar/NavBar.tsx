import React from 'react';
import { Menu } from './Menu';
import { Item } from './Item';
import { ERoute } from '../../enums/Route';

type NavBarProps = {
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

export const NavBar = ({ onClick }: NavBarProps) => (
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
  </div>
);
