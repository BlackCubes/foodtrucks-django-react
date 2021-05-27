import styled from 'styled-components';

export default styled.input.attrs((props) => ({
  className: `border text-lg py-2 px-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:border-transparent ${
    props.error
      ? 'ring-2 ring-red-500 border-transparent focus:ring-red-500'
      : 'focus:ring-blue-300'
  }`,
}))`
  &.not-empty ~ span[data-text] {
    font-size: 0.95rem;
    top: -30px;
    left: 10px;
  }

  &:focus {
    & ~ span[data-text] {
      font-size: 0.95rem;
      top: -30px;
      left: 10px;
    }
  }
`;
