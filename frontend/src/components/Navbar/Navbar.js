import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Image, Link } from '../../common';

import {
  NavbarStyled,
  NavbarContainerStyled,
  NavbarLogoStyled,
  NavbarMenuHolderStyled,
  NavbarMenuStyled,
  NavbarMenuListStyled,
  NavbarMenuListItemStyled,
} from '../../common/Navbar';

import { useAuthContext } from '../../context';

const Navbar = () => {
  const { logout } = useAuthContext();

  const token = localStorage.getItem('access_token') || null;

  return (
    <NavbarStyled>
      <NavbarContainerStyled>
        <NavbarLogoStyled>
          <RouterLink to="/">
            <Image rest={{ src: '/img/icon.png', alt: 'Company Logo' }} />
          </RouterLink>
        </NavbarLogoStyled>

        <NavbarMenuHolderStyled>
          <NavbarMenuStyled>
            <NavbarMenuListStyled>
              {!token ? null : (
                <NavbarMenuListItemStyled>
                  <Link
                    href="/#"
                    rest={{
                      colortype: 'white',
                      hovercolortype: 'vivid_pink',
                      onClick: () => logout(),
                    }}
                  >
                    Logout
                  </Link>
                </NavbarMenuListItemStyled>
              )}

              <NavbarMenuListItemStyled>
                <Link
                  href="/"
                  rest={{
                    colortype: 'white',
                    hovercolortype: 'vivid_pink',
                  }}
                >
                  Trucks
                </Link>
              </NavbarMenuListItemStyled>
            </NavbarMenuListStyled>
          </NavbarMenuStyled>
        </NavbarMenuHolderStyled>
      </NavbarContainerStyled>
    </NavbarStyled>
  );
};

export default Navbar;
