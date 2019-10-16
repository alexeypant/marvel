import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { CharactersTableConnected } from './containers';
import { RegisterFormContainer } from './containers/registerForm/RegisterFormContainer';
import { LoginFormContainer } from './containers/loginForm/LoginFormContainer';
import { NavBarContainer } from './containers/navBar/NavBarContainer';
import { About } from './components/about/About';
import { PrivateRoute } from './containers/privateRoute/PrivateRoute';
import { ERoute } from './enums/Route';
import { LoginStatusContainer } from './containers/loginStatus/LoginStatusContainer';

const App: React.FC = () => (
  <Router>
    <div className="app-container">
      <div className="nav-bar-container">
        <NavBarContainer/>
      </div>
      <div className="login-container">
        <LoginStatusContainer/>
      </div>
      <div className="content-container">
        <Route exact={true} path={ERoute.root} component={About} />
        <div >
          <Switch>
            <Route exact={true} path={ERoute.register} component={RegisterFormContainer} />
            <Route exact={true} path={ERoute.login} component={LoginFormContainer} />
            <PrivateRoute exact={true} path={ERoute.characters}>
              <CharactersTableConnected/>
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default App;