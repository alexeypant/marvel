import React, { useCallback } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../store/types/State';
import { ERoute } from '../../enums/Route';

// the PrivateRoute takes component to render as "component" prop, not as "children" prop
interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export const PrivateRoute = ({ component, ...rest }: PrivateRouteProps) => {
  const { isAuthenticated } = useSelector(state => (state as State).auth);
  const handleRender = useCallback(
    ({ location }: RouteComponentProps<any>): React.ReactNode => {

      const toLogin = {
        pathname: ERoute.login,
        state: { from: location },
      };

      if (component) {
        return isAuthenticated ? (
          React.createElement(component)
        ) : (
          <Redirect
            to={toLogin}
          />
        );
      }
      throw new Error('Please provide a component to render as props for PrivateRoute');
    }, [isAuthenticated, component],
  );

  return (
    <Route
      {...rest}
      render={handleRender}
    />
  );
};
