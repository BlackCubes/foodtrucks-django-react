import React from 'react';
import PropTypes from 'prop-types';

import { FormGroupStyled } from '../../common/Forms';

const FormGroup = ({ children }) => (
  <FormGroupStyled>{children}</FormGroupStyled>
);

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormGroup;
