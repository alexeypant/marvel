import React from 'react';
import { Menu } from './Menu';
import { Item } from './Item';
import { ERoute } from '../../enums/Route';

export const NavBar = () => (
  <div>
    <Menu>
      <Item
        key="Home"
        label="Home"
        to={ERoute.root}
      />
      <Item
        key="Characters"
        label="Characters"
        to={ERoute.characters}
      />
    </Menu>
  </div>
);
