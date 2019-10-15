import React from 'react';
import { User } from '../../types/users/User';
import './LoginStatus.css';
import { LoginIcon } from './LoginIcon';
import { LogoutIcon } from './LogoutIcon';

type LoginStatusProps = {
  onLogout: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onLogin: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isAuthenticated: boolean;
  user?: User;
};

export const LoginStatus = ({ onLogin, onLogout, isAuthenticated }: LoginStatusProps) => (
  <div
    className="login-container"
    onClick={isAuthenticated ? onLogout : onLogin}
  >
    {isAuthenticated ? <LogoutIcon/> : <LoginIcon/>}
  </div>
);
