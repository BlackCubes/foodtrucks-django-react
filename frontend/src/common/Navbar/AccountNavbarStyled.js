import styled from 'styled-components';

export const AccountNavbarStyled = styled.header`
  position: relative;
  width: 100%;
  height: 11rem;
  background: ${(props) => props.theme.colors.black_gray};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1rem;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
    z-index: 1;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    height: 9.5rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    height: 8.5rem;
  }
`;

export const AccountNavbarLogoStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const AccountNavbarLogoImgStyled = styled.div`
  width: 20rem;

  @media ${(props) => props.theme.responsive.below_899} {
    width: 18rem;
  }

  @media ${(props) => props.theme.responsive.below_479} {
    width: 15rem;
  }

  @media ${(props) => props.theme.responsive.below_379} {
    width: 13rem;
  }
`;
