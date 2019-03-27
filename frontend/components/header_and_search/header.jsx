import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="header-login-signup">
      <Link to="/login">Login</Link>&nbsp;or&nbsp;<Link to="/signup">Sign up!</Link>
    </nav>
  );

  const personalHeader = () => (
    <div className="personal-header">
      <h2 className="header-show-name">Hi, {currentUser.username}!</h2>
      <button className="header-logout" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalHeader() : sessionLinks();
};


export default Header;
