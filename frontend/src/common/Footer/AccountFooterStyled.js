import styled from 'styled-components';

export const AccountFooterStyled = styled.footer`
  font-family: inherit;
  width: 100%;
  margin-top: auto;
  background-color: ${(props) => props.theme.colors.black_gray};
  bottom: 0;
`;

export const AccountFooterCreatedStyled = styled.div`
  height: initial;
`;

export const AccountFooterCreatedContainerStyled = styled.div`
  padding: 2rem;
  text-align: center;
  list-style: none;
`;

export const AccountFooterCreatedTitleStyled = styled.div`
  color: #546c84;
  padding-bottom: 1rem;

  & p {
    @media ${(props) => props.theme.responsive.below_899} {
      font-size: 1.2rem;
    }

    @media ${(props) => props.theme.responsive.below_479} {
      font-size: 1.1rem;
    }

    @media ${(props) => props.theme.responsive.below_379} {
      font-size: 0.9rem;
    }
  }

  & span {
    font-size: 1.5rem;
    color: #0067aa;
    text-transform: uppercase;

    @media ${(props) => props.theme.responsive.below_899} {
      font-size: 1.4rem;
    }

    @media ${(props) => props.theme.responsive.below_479} {
      font-size: 1.3rem;
    }

    @media ${(props) => props.theme.responsive.below_379} {
      font-size: 1.1rem;
    }
  }
`;

export const AccountFooterCreatedNavigationStyled = styled.div`
  padding: 1.3rem;
`;

export const AccountFooterCreatedListStyled = styled.ul`
  margin: 0;
  padding: 0;
`;

export const AccountFooterCreatedItemStyled = styled.li`
  display: inline-block;
  font-size: 1.2rem;

  & a {
    color: #546c84;
  }

  &:nth-child(2)::before {
    content: ' | ';
    margin: 0 0.8rem;
  }

  @media ${(props) => props.theme.responsive.below_899} {
    font-size: 1.1rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    font-size: 0.85rem;
  }
`;
