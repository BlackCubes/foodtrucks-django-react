export const fieldInputProperties = (prop) => ({
  type: prop.type || 'text',
  name: prop.name,
  className: prop.errors[prop.name] ? 'error' : '',
  groupClassName: prop.groupClassName || '',
  id: prop.id,
  value: prop.values[prop.name] || '',
  placeholder: prop.placeholder,
  onChange: prop.onChange,
  noValidate: prop.noValidate || true,
  message: prop.message,
  addlstyle: prop.addlstyle,
});

export const fieldInputErrors = (name, errors) =>
  errors[name] ? errors[name] : null;
