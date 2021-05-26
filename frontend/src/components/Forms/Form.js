import React from 'react';
import PropTypes from 'prop-types';

import { FormStyled } from '../../common/Forms';

const Form = ({ children, onSubmit, noValidate }) => (
  <FormStyled onSubmit={onSubmit} noValidate={noValidate}>
    {children}
  </FormStyled>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  noValidate: PropTypes.bool,
};

Form.defaultProps = {
  noValidate: false,
};

export default Form;
