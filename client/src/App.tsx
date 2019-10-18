import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { CharactersTableConnected } from './containers';
import { RegisterFormContainer } from './containers/registerForm/RegisterFormContainer';
import { LoginFormContainer } from './containers/loginForm/LoginFormContainer';
import { About } from './components/about/About';
import { PrivateRoute } from './containers/privateRoute/PrivateRoute';
import { ERoute } from './enums/Route';
import { LoginStatusContainer } from './containers/loginStatus/LoginStatusContainer';
import { NavBar } from './components/navBar/NavBar';
import { NoMatch } from './components/nomatch/NoMatch';

const App: React.FC = () => (
  <Router>
    <div className="app-container">
      <div className="nav-bar-container">
        <NavBar/>
      </div>
      <div className="login-container">
        <LoginStatusContainer/>
      </div>
      <div className="content-container">
        <Switch>
          <Route exact={true} path={ERoute.root} component={About}/>
          <Route exact={true} path={ERoute.register} component={RegisterFormContainer}/>
          <Route exact={true} path={ERoute.login} component={LoginFormContainer}/>
          <PrivateRoute exact={true} path={ERoute.characters} component={CharactersTableConnected}/>
          <Route path={ERoute.noMatch} component={NoMatch}/>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
