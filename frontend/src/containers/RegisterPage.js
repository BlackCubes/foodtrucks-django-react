import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthContext } from '../context';

const registerFormFields = [
  {
    type: 'text',
    name: 'name',
    id: 'name',
    placeholder: 'Name',
    required: true,
  },
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
  {
    type: 'password',
    name: 'password2',
    id: 'password2',
    placeholder: 'Confirm Password',
    required: true,
  },
];

const RegisterPage = ({ FormContainerComponent }) => {
  const { checkAuth, register, apiAuthErr, apiAuthSuccess } = useAuthContext();
  const history = useHistory();

  if (checkAuth()) history.push('/');

  const onSubmission = (data) => register(data);

  useEffect(() => {
    document.title = 'Foodtrucks | Register';
  }, []);

  return (
    <>
      <FormContainerComponent
        onSubmit={onSubmission}
        formFields={registerFormFields}
        formTitle="Create your account"
        btnTitle="Create Account"
      />

      {!apiAuthErr ? null : apiAuthErr}
      {!apiAuthSuccess ? null : apiAuthSuccess}
    </>
  );
};

RegisterPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default RegisterPage;
