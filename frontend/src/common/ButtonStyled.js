import styled from 'styled-components';

export default styled.button.attrs((props) => ({
  type: props.type,
  className:
    'border border-solid border-blue-900 text-xl w-full py-2 px-4 rounded-lg shadow-lg text-center hover:border-0 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent',
}))``;
