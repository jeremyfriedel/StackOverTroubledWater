import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="header-login-signup">
      <Link to="/" className="header-link">
        <div className="emoji-placeholder">
          <svg aria-hidden="true" className="logo-image-top" width="32" height="37" viewBox="0 0 32 37"><g><path fill="#BCBBBB" d="M26 33v-9h4v13H0V24h4v9z"></path><path d="M23.1 25.99l.68-2.95-16.1-3.35L7 23l16.1 2.99zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 18.4l2.1-2.5L15.4 5.3l-2.1 2.5zM21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM7 30h16v-3H7v3z" fill="#F48024"></path></g></svg>

          {/* <img className="logo-image-top" src={window.logoURL} alt="" /> */}
        </div>
</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/login">Login</Link>&nbsp;or&nbsp;<Link to="/signup">Sign up!</Link>
    </nav>
  );

  const personalHeader = () => (
    <div className="personal-header">
      <div className="emoji-placeholder-personal">       
       {/* <img className="logo-image-top" src={window.logoURL} alt="" /> */}
    </div>
      <Link to="/" className="header-link-personal">
        <div className="emoji-placeholder-personal">
          <svg aria-hidden="true" className="logo-image-top-personal" width="32" height="37" viewBox="0 0 32 37"><g><path fill="#BCBBBB" d="M26 33v-9h4v13H0V24h4v9z"></path><path d="M23.1 25.99l.68-2.95-16.1-3.35L7 23l16.1 2.99zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 18.4l2.1-2.5L15.4 5.3l-2.1 2.5zM21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM7 30h16v-3H7v3z" fill="#F48024"></path></g></svg>

          {/* <img className="logo-image-top" src={window.logoURL} alt="" /> */}
        </div>
      </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      
      <h2 className="header-show-name">Hi, {currentUser.username}!</h2>
      <button className="header-logout" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalHeader() : sessionLinks();
};


export default Header;


