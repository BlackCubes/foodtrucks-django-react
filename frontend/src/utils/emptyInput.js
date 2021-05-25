const emptyInput = (value, classList) => {
  if (value.length > 0) classList.add('not-empty');
  else classList.remove('not-empty');
};

export default emptyInput;
