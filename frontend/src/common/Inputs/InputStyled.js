import styled from 'styled-components';

export default styled.input.attrs(() => ({
  className:
    'border text-xl py-2 px-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent',
}))`
  &.not-empty ~ span[data-text] {
    font-size: 1.1rem;
    top: -30px;
  }

  &:focus {
    & ~ span[data-text] {
      font-size: 1.1rem;
      top: -30px;
    }
  }
`;
