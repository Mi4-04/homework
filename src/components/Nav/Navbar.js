import React, {  useContext } from 'react';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './style';
import { Button } from 'styled-button-component';
import { AuthContext } from '../../context/auth';

function LoginButton(props) {
  return (
    <NavLink to="/signin">
      <Button m1 ligth outline onClick={props.onClick}>
        Авторизация
      </Button>
    </NavLink>
  );
}

function LogoutButton(props) {
  return (
    <NavLink to="/">
      <Button m1 ligth outline onClick={props.onClick}>
        Выход
      </Button>
    </NavLink>
  );
}

export const NavbarLight = () => {
  const {user, logout} = useContext(AuthContext)

  const navbarLayout =   (
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

      <Nav end="true" expandSm>
        {user ? <LogoutButton onClick = {logout} /> : <LoginButton />}
      </Nav>
    </Navbar>
  </StyledNav>
  ) 
  console.log(user)
  return navbarLayout;

};
