import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context';

import {
  getUserAPI,
  headers,
  loginAPI,
  logoutAPI,
  parseJwt,
  updateImageAPI,
  updatePasswordAPI,
  updateProfileAPI,
} from '../utils';

const AuthProvider = ({ children }) => {
  const [apiAuthErr, setApiAuthErr] = useState(null);
  const [apiAuthSuccess, setApiAuthSuccess] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [apiChangedProfile, setApiChangedProfile] = useState(null);
  const [apiChangedUserImage, setApiChangedUserImage] = useState(null);
  const history = useHistory();

  const login = async (data) => {
    try {
      const currentAccessToken = localStorage.getItem('access_token') || null;
      const apiData = await loginAPI(data, headers(currentAccessToken));

      if (apiData.status === 'success') {
        const userUuid = parseJwt(apiData.token.access).user_uuid;

        localStorage.setItem('uuid', userUuid);
        localStorage.setItem('access_token', apiData.token.access);
        localStorage.setItem('refresh_token', apiData.token.refresh);

        history.push('/');
      }

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = async () => {
    try {
      const currentAccessToken = localStorage.getItem('access_token') || null;
      const currentRefreshToken = localStorage.getItem('refresh_token') || null;

      const data = { refresh_token: currentRefreshToken };

      const apiData = await logoutAPI(data, headers(currentAccessToken));

      if (apiData.status === 'success') {
        localStorage.removeItem('uuid');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        history.push('/');
      }

      if (apiData.status === 'fail' || apiData.status === 'error')
        throw new Error(apiData.message);
    } catch (err) {
      setApiAuthErr(err.message);
    }
  };

  const getCurrentUser = async () => {
    try {
      const uuid = localStorage.getItem('uuid') || null;
      const currentAccessToken = localStorage.getItem('access_token') || null;

      if (!uuid) {
        throw new Error('Cannot perform this action.');
      } else {
        const apiData = await getUserAPI(headers(currentAccessToken), uuid);

        if (apiData.status === 'success') {
          setCurrentUser(apiData.data);
        }

        if (apiData.status === 'fail' || apiData.status === 'error')
          throw new Error(apiData.message);
      }
    } catch (err) {
      setApiAuthErr(err.message);
    }
  };

  const updatePassword = async (data) => {
    try {
      const uuid = localStorage.getItem('uuid') || null;
      const currentAccessToken = localStorage.getItem('access_token') || null;

      if (!uuid) {
        throw new Error('Cannot perform this action.');
      } else {
        const apiData = await updatePasswordAPI(
          data,
          headers(currentAccessToken),
          uuid
        );

        if (apiData.status === 'success') {
          setApiAuthSuccess('Password updated!');
        }

        if (apiData.status === 'fail' || apiData.status === 'error')
          throw new Error(apiData.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateProfile = async (data) => {
    try {
      const uuid = localStorage.getItem('uuid') || null;
      const currentAccessToken = localStorage.getItem('access_token') || null;

      if (!uuid) {
        throw new Error('Cannot perform this action.');
      } else {
        const apiData = await updateProfileAPI(
          data,
          headers(currentAccessToken),
          uuid
        );

        if (apiData.status === 'success') {
          setApiChangedProfile(apiData.data);
          setApiAuthSuccess('Profile updated!');
        }

        if (apiData.status === 'fail' || apiData.status === 'error')
          throw new Error(apiData.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateImage = async (data) => {
    try {
      const currentAccessToken = localStorage.getItem('access_token') || null;
      const apiData = await updateImageAPI(data, headers(currentAccessToken));

      if (apiData.status === 'success') {
        setApiChangedUserImage(apiData.data);
        setApiAuthSuccess('Image updated!');
      }

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setApiAuthSuccess(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [apiAuthSuccess]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        getCurrentUser,
        updatePassword,
        updateProfile,
        updateImage,
        checkAuth,
        apiAuthErr,
        apiAuthSuccess,
        currentUser,
        apiChangedProfile,
        apiChangedUserImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
