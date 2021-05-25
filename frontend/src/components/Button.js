import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from '../common';

const Button = ({ children, as, type, onClick, disabled }) => (
  <ButtonStyled as={as} type={type} onClick={onClick} disabled={disabled}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  as: null,
  type: null,
  onClick: null,
  disabled: false,
};

export default Button;
