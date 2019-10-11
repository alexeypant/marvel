import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { CharactersTableConnected } from './containers';
import { RegisterFormContainer } from './containers/registerForm/RegisterFormContainer';
import { LoginFormContainer } from './containers/loginForm/LoginFormContainer';

const App: React.FC = () => (
  <Router>
    <div>
      <NavBar/>
        <Route exact={true} path="/" component={CharactersTableConnected} />
        <div className="container">
          <Route exact={true} path="/register" component={RegisterFormContainer} />
          <Route exact={true} path="/login" component={LoginFormContainer} />
        </div>
    </div>
  </Router>
);

export default App;
