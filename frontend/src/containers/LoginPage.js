import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { useAuthContext } from '../context';

import { validateForm } from '../utils';

const LoginPage = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const { checkAuth, login, apiAuthErr } = useAuthContext();
  const history = useHistory();

  if (checkAuth()) history.push('/');

  const handleChange = (e) => {
    const { name, value } = e.target;

    validateForm(name, value, setErrors);

    setValues((val) => ({ ...val, [name]: value }));
  };

  const checkErrors = (errorList) => {
    let valid = true;
    Object.values(errorList).forEach((err) => {
      if (err.length) valid = false;
    });
    return valid;
  };

  const onSubmission = (data) => login(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkErrors(errors)) {
      onSubmission(values);
      setValues({});
    }
  };

  useEffect(() => {
    document.title = 'Foodtrucks | Login';
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form__group">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={values.email || ''}
              placeholder="Email"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form__group">
          <label htmlFor="email">
            <input
              type="password"
              name="password"
              id="password"
              value={values.password || ''}
              placeholder="Password"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form__group">
          <button type="submit">Submit</button>
        </div>
      </form>

      {!apiAuthErr ? null : console.log(apiAuthErr)}
    </>
  );
};

export default LoginPage;
