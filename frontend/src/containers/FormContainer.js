import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, FormStyled, FormGroupStyled } from '../common';

import Inputs from '../components';

import { fieldInputErrors, fieldInputProperties, validateForm } from '../utils';

const FormContainer = ({ onSubmit, formFields }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkErrors(errors)) {
      onSubmit(values);
      setValues({});
    }
  };

  const inputProperties = formFields.map((prop) =>
    fieldInputProperties({
      type: prop.type,
      name: prop.name,
      groupClassName: prop.groupClassName,
      id: prop.id,
      errors: errors,
      values: values,
      placeholder: prop.placeholder,
      onChange: handleChange,
      noValidate: prop.noValidate,
      message: prop.message,
      addlstyle: prop.addlstyle,
    })
  );

  const inputErrors = formFields.map((prop) =>
    fieldInputErrors(prop.name, errors)
  );

  return (
    <FormStyled onSubmit={handleSubmit} noValidate>
      {inputProperties.map((prop, key) => {
        const ind = key;
        return (
          <FormGroupStyled
            key={ind}
            className={prop.groupClassName}
            addlstyle={prop.addlstyle}
          >
            <Inputs inputprop={prop} error={inputErrors[key]} />
          </FormGroupStyled>
        );
      })}

      <FormGroupStyled
        addlstyle={{ padding: '0 0.75rem', '> button': { width: '100%' } }}
      >
        <Button
          rest={{
            type: 'submit',
          }}
        >
          Save
        </Button>
      </FormGroupStyled>
    </FormStyled>
  );
};

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormContainer;
