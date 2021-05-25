import styled from 'styled-components';

export default styled.span.attrs((props) => ({
  className: `text-xs mt-2 px-4 ${props.error ? 'text-red-500' : null}`,
}))``;
