import React from 'react';
import { useLocation } from 'react-router-dom';

const NavbarContainer = () => {
  const location = useLocation();

  return location.pathname === '/login' ? (
    <div>Hello Account Navbar</div>
  ) : location.pathname === '/login' ? (
    <div>Hello Account Navbar</div>
  ) : (
    <div>Hello Normal Navbar</div>
  );
};

export default NavbarContainer;
