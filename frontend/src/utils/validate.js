import regex from './regex';

const validateForm = (inputName, inputValue, setErrors) => {
  switch (inputName) {
    case 'email':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (!regex.email.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please provide a valid email.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'password':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length < 8)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 8 characters.',
        }));
      else if (inputValue.length > 60)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 60 characters.',
        }));
      else if (!regex.password.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]:
            'Please use at least one number, one special character, and one capital letter between 8 to 60 characters.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    case 'name':
      if (!inputValue.length)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Required.',
        }));
      else if (inputValue.length < 2)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be a minimum of 2 characters',
        }));
      else if (inputValue.length > 70)
        setErrors((err) => ({
          ...err,
          [inputName]: 'Must be less than or equal to 70 characters.',
        }));
      else if (!regex.name.test(inputValue))
        setErrors((err) => ({
          ...err,
          [inputName]: 'Please use a valid name.',
        }));
      else setErrors((err) => ({ ...err, [inputName]: '' }));
      break;

    default:
      break;
  }
};

export default validateForm;
