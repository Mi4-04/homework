import React from 'react';
import { Nav } from 'styled-nav-component';
import { NavLink } from 'react-router-dom';
import NavLog from './style';

/*const NavLog = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 30px;
`;*/

export const Auth = () => {
  return (
    <div>
      <NavLog>
        <Nav dark justified center tabs>
          <NavLink to="/signin">Вход</NavLink>

          <NavLink to="/signup">Регистрация</NavLink>
        </Nav>
      </NavLog>
    </div>
  );
};
