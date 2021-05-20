import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthContext } from '../context';

import { validateForm } from '../utils';

const loginFormFields = [
  {
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'Email',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    message: "Let's go!",
    addlstyle: {
      width: '100%',
      float: 'left',
      padding: '0 0.75rem',
    },
  },
];

const LoginPage = ({ FormContainerComponent }) => {
  const { checkAuth, login, apiAuthErr } = useAuthContext();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const history = useHistory();

  if (checkAuth()) history.push('/');

  const onSubmission = (data) => login(data);

  const handleTestChange = (e) => {
    const { name, value } = e.target;

    validateForm(name, value, setErrors);

    setValues((val) => ({ ...val, [name]: value }));
  };

  const onTestSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };

  useEffect(() => {
    document.title = 'Foodtrucks | Login';
  }, []);

  return (
    <>
      <FormContainerComponent
        onSubmit={onSubmission}
        formFields={loginFormFields}
      />

      <form onSubmit={onTestSubmit} noValidate>
        <div>
          <label htmlFor="email" className="flex flex-col">
            <input
              type="email"
              name="email"
              id="email"
              className="border border-transparent py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              values={values.email || ''}
              onChange={handleTestChange}
              required
            />

            <span data-text="email">Email</span>

            <span>{errors.email || 'Noice!'}</span>
          </label>
        </div>

        <div>
          <label htmlFor="password" className="flex flex-col">
            <input
              type="password"
              name="password"
              id="password"
              className="border border-transparent py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              values={values.password || ''}
              onChange={handleTestChange}
              required
            />

            <span data-text="password">Password</span>

            <span>{errors.password || 'Noice!'}</span>
          </label>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      {!apiAuthErr ? null : apiAuthErr}
    </>
  );
};

LoginPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default LoginPage;
