import React from 'react';
import PropTypes from 'prop-types';

import { FormTitleStyled } from '../../common/Forms';

const FormTitle = ({ children }) => (
  <FormTitleStyled>{children}</FormTitleStyled>
);

FormTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormTitle;
