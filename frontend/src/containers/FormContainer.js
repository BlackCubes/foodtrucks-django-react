import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Inputs } from '../components';
import { Form, FormGroup, FormTitle, FormWrapper } from '../components/Forms';

import {
  emptyInput,
  fieldInputErrors,
  fieldInputProperties,
  validateForm,
} from '../utils';

const FormContainer = ({ onSubmit, formFields, formTitle, btnTitle }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, classList } = e.target;

    emptyInput(value, classList);

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
      id: prop.id,
      values: values,
      errors: errors,
      placeholder: prop.placeholder,
      onChange: handleChange,
      required: prop.required,
    })
  );

  const inputErrors = formFields.map((prop) =>
    fieldInputErrors(prop.name, errors)
  );

  return (
    <FormWrapper>
      <FormTitle>
        <h3 className="text-2xl text-center">{formTitle}</h3>
      </FormTitle>

      <Form onSubmit={handleSubmit} noValidate>
        {inputProperties.map((prop, key) => {
          const ind = key;
          return (
            <FormGroup key={ind}>
              <Inputs inputprop={prop} error={inputErrors[ind]} />
            </FormGroup>
          );
        })}

        <FormGroup>
          <Button type="submit">{btnTitle}</Button>
        </FormGroup>
      </Form>
    </FormWrapper>
  );
};

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  formTitle: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
};

export default FormContainer;
