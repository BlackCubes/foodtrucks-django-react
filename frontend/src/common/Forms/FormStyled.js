import styled from 'styled-components';

export default styled.form.attrs((props) => ({
  onSubmit: props.onSubmit,
  noValidate: props.noValidate,
}))``;
