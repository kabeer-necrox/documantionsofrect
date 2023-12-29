import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to='/signin'>
        Signin
      </NavLink>
      <NavLink to='/signup'>
        Signup
      </NavLink>
    </div>
  )
};

export default Navbar;
