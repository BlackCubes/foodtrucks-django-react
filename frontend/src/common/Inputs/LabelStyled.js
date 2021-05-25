import styled from 'styled-components';

export default styled.label.attrs((props) => ({
  className: 'flex flex-col relative mb-2',
  htmlFor: props.htmlFor,
}))``;
