import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
        <div className="logo">
          
              <span>facefwd.ai</span>
          
          <span className="dot"></span>
        </div>
      </div>
        <div className="links">
          <span> facefwd business </span>
          <span> explore </span>
          <span> sign in </span>
          <span> become a seller </span>
          <button>Join</button>
        </div>
        <hr />
        <div className="menu">
        <span>test</span>
        <span>test2</span>
        </div>
        

    </div>
  );
};
export default Navbar;
