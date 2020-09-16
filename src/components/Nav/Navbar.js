import React from 'react';
//import styled from 'styled-components';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './style';

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
