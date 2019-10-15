import React, { useCallback } from 'react';
import { NavBar } from '../../components/navBar/NavBar';

export const NavBarContainer = () => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    },
    [],
  );
  return (
    <NavBar
      onClick={handleClick}
    />
  );
};
