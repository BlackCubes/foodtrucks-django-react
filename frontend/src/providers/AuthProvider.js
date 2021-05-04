import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context';

import { headers, loginAPI } from '../utils';

const AuthProvider = ({ children }) => {
  const [apiAuthErr, setApiAuthErr] = useState(null);
  // const history = useHistory();

  const login = async (data) => {
    try {
      const currentAccessToken = localStorage.getItem('access_token') || null;
      const apiData = await loginAPI(data, headers(currentAccessToken));

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  const checkAuth = () => !!localStorage.getItem('access_token');

  useEffect(() => {
    const timer = setTimeout(() => {
      setApiAuthErr(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiAuthErr]);

  return (
    <AuthContext.Provider value={{ login, checkAuth, apiAuthErr }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
