export const fieldInputProperties = (prop) => ({
  type: prop.type || 'text',
  name: prop.name,
  id: prop.id,
  value: prop.values[prop.name] || '',
  error: prop.errors[prop.name] || null,
  placeholder: prop.placeholder,
  onChange: prop.onChange,
  required: prop.required,
});

export const fieldInputErrors = (name, errors) =>
  errors[name] ? errors[name] : null;
