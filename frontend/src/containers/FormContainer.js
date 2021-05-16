import React from 'react';
import PropTypes from 'prop-types';

// import { fieldInputErrors, fieldInputProperties, validateForm } from '../utils';

const FormContainer = ({ onSubmit, formFields }) => {
  // const [values, setValues] = useState({});
  // const [errors, setErrors] = useState({});
  console.log(onSubmit);
  console.log(formFields);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   validateForm(name, value, setErrors);

  //   setValues((val) => ({ ...val, [name]: value }));
  // };

  // const checkErrors = (errorList) => {
  //   let valid = true;
  //   Object.values(errorList).forEach((err) => {
  //     if (err.length) valid = false;
  //   });
  //   return valid;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (checkErrors(errors)) {
  //     onSubmit(values);
  //     setValues({});
  //   }
  // };

  // const inputProperties = formFields.map((prop) =>
  //   fieldInputProperties({
  //     type: prop.type,
  //     name: prop.name,
  //     groupClassName: prop.groupClassName,
  //     id: prop.id,
  //     errors: errors,
  //     values: values,
  //     placeholder: prop.placeholder,
  //     onChange: handleChange,
  //     noValidate: prop.noValidate,
  //     message: prop.message,
  //     addlstyle: prop.addlstyle,
  //   })
  // );

  // const inputErrors = formFields.map((prop) =>
  //   fieldInputErrors(prop.name, errors)
  // );

  return <div>Hello Form Container</div>;
};

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FormContainer;
