import React from 'react';
import PropTypes from 'prop-types';

import {
  InputStyled,
  LabelStyled,
  MessageStyled,
  PlaceholderStyled,
} from '../common/Inputs';

const Inputs = ({ inputprop, error }) => (
  <LabelStyled htmlFor={inputprop.id}>
    <InputStyled
      type={inputprop.type}
      name={inputprop.name}
      id={inputprop.id}
      value={inputprop.value}
      error={error || null}
      onChange={inputprop.onChange}
      required={inputprop.required}
    />

    <PlaceholderStyled data-text={inputprop.name}>
      {inputprop.placeholder}
    </PlaceholderStyled>

    <MessageStyled error={error || null}>{error || ''}</MessageStyled>
  </LabelStyled>
);

Inputs.propTypes = {
  inputprop: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
  }).isRequired,
  error: PropTypes.string,
};

Inputs.defaultProps = { error: null };

export default Inputs;
