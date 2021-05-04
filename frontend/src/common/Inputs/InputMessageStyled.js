import styled from 'styled-components';

export default styled.span`
  display: block;
  color: ${(props) => props.theme.colors.moderate_blue_2};
  margin-top: 0.5rem;
  text-align: left;
  transition: all 0.3s;

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 0.9rem;
  }

  @media ${(props) => props.theme.responsive.below_599} {
    font-size: 0.85rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 0.8rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    font-size: 0.7rem;
  }
`;
