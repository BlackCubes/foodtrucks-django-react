import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthContext } from '../context';

const loginFormFields = [
  {
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
    required: true,
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    required: true,
  },
];

const LoginPage = ({ FormContainerComponent }) => {
  const { checkAuth, login, apiAuthErr } = useAuthContext();
  const history = useHistory();

  if (checkAuth()) history.push('/');

  const onSubmission = (data) => login(data);

  useEffect(() => {
    document.title = 'Foodtrucks | Login';
  }, []);

  return (
    <>
      <FormContainerComponent
        onSubmit={onSubmission}
        formFields={loginFormFields}
        formTitle="Sign in to your account"
        btnTitle="Login"
      />

      {!apiAuthErr ? null : apiAuthErr}
    </>
  );
};

LoginPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default LoginPage;
