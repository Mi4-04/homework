import React from 'react';
import styled from 'styled-components';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.div`
  border: 1px solid rgba(2, 3, 3, 0.5);
  box-shadow: 0 0 14px 0 rgba(3, 5, 7, 0.35);
`;

export const NavbarLight = () => {
  return (
    <StyledNav>
      <Navbar expandSm dark>
        <Nav start="true">
          <NavLink exact to="/">
            <NavbarLink dark brand>
              BRAND
            </NavbarLink>
          </NavLink>
        </Nav>
        <Nav center expandSm>
          <NavLink to="/" exact>
            <NavbarLink dark>Главная</NavbarLink>
          </NavLink>
          <NavLink to="/orders">
            <NavbarLink dark>Заказы</NavbarLink>
          </NavLink>
          <NavLink to="/executors">
            <NavbarLink dark>Исполнители</NavbarLink>
          </NavLink>
          <NavLink to="/auction">
            <NavbarLink dark>Аукцион</NavbarLink>
          </NavLink>
          <NavLink to="/about">
            <NavbarLink dark>О проекте</NavbarLink>
          </NavLink>
        </Nav>
      </Navbar>
    </StyledNav>
  );
};
