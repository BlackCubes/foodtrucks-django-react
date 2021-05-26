import React from 'react';
import PropTypes from 'prop-types';

import { FormWrapperStyled } from '../../common/Forms';

const FormWrapper = ({ children }) => (
  <FormWrapperStyled>{children}</FormWrapperStyled>
);

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormWrapper;
