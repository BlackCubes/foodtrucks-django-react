import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainStyled = styled.main`
  margin-top: auto;
`;

const Main = ({ children }) => <MainStyled>{children}</MainStyled>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
