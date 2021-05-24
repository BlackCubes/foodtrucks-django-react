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

      <div className="border mx-4 py-8 px-6 rounded shadow-md">
        <div className="mb-10">
          <h3 className="text-3xl">Sign in to your account</h3>
        </div>

        <form onSubmit={onTestSubmit} noValidate>
          <div className="mt-6">
            <label htmlFor="email" className="flex flex-col relative mb-2">
              <input
                type="email"
                name="email"
                id="email"
                className="border text-xl py-2 px-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                values={values.email || ''}
                onChange={handleTestChange}
                required
              />

              <span className="absolute text-xl" data-text="email">
                Email
              </span>

              <span className="text-base mt-2 px-4">
                {errors.email || 'Noice!'}
              </span>
            </label>
          </div>

          <div className="mt-6">
            <label htmlFor="password" className="flex flex-col relative mb-2">
              <input
                type="password"
                name="password"
                id="password"
                className="border text-xl py-2 px-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                values={values.password || ''}
                onChange={handleTestChange}
                required
              />

              <span className="absolute text-xl" data-text="password">
                Password
              </span>

              <span className="text-base mt-2 px-4">
                {errors.password || 'Noice!'}
              </span>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="border border-solid border-blue-900 text-xl w-full py-2 px-4 rounded-lg shadow-lg text-center hover:border-0 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {!apiAuthErr ? null : apiAuthErr}
    </>
  );
};

LoginPage.propTypes = {
  FormContainerComponent: PropTypes.elementType.isRequired,
};

export default LoginPage;
