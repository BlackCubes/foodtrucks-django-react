import React from 'react';
import { useLocation } from 'react-router-dom';

const FooterContainer = () => {
  const location = useLocation();

  return location.pathname === '/login' ? (
    <div>Hello Account Footer</div>
  ) : location.pathname === '/myProfile' ? (
    <div>Hello Account Footer</div>
  ) : (
    <div>Hello Regular Footer</div>
  );
};

export default FooterContainer;
