import styled from 'styled-components';

export default styled.input.attrs((props) => ({
  className: `border text-xl py-2 px-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:border-transparent ${
    props.error
      ? 'ring-2 ring-red-500 border-transparent focus:ring-red-500'
      : 'ring-2 ring-blue-300 border-transparent focus:ring-blue-300'
  }`,
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
