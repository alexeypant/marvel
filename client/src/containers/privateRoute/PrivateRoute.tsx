import React  from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../store/types/State';
import { ERoute } from '../../enums/Route';

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { isAuthenticated } = useSelector(state => (state as State).auth);

  const handleRender = ({ location }: RouteComponentProps<any>): React.ReactNode => {

    const toDetails = {
      pathname: ERoute.login,
      state: { from: location },
    };

    return isAuthenticated ? (
      children
    ) : (
      <Redirect
        to={toDetails}
      />
    );
  };

  return (
    <Route
      {...rest}
      render={handleRender}
    />
  );
};
