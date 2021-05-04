import React from 'react';
import { useLocation } from 'react-router-dom';

import { AccountNavbar, Navbar } from '../components/Navbar';

const NavbarContainer = () => {
  const location = useLocation();

  return location.pathname === '/login' ? (
    <AccountNavbar />
  ) : location.pathname === '/login' ? (
    <AccountNavbar />
  ) : (
    <Navbar />
  );
};

export default NavbarContainer;
