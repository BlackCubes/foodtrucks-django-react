import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingQuaternaryStyled = styled.h4`
  font-size: 2rem;
  font-weight: 400;

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 1.7rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    font-size: 1.65rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 1.6rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    font-size: 1.5rem;
  }
`;

const HeadingQuaternary = ({ children }) => (
  <HeadingQuaternaryStyled>{children}</HeadingQuaternaryStyled>
);

HeadingQuaternary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeadingQuaternary;
