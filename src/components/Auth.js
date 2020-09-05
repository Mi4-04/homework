import React from 'react';
import { Nav } from 'styled-nav-component';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/*const AuthContent = styled.div`
  display: inline-block;
  justify-content: center;
  padding-top: 50px;
  margin-top: 80px;
  width: 100%;
`;

const NameAuth = styled.div`
  text-align: center;
`;
const AuthForm = styled.div`
  text-align: center;
  box-shadow: 0 0 14px 0 rgba(3, 5, 7, 0.35);
  padding: 15px;
  border-radius: 5px;
  justify-content: center;
`;*/

const NavLog = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 30px;
`;

export const Auth = () => {
  return (
    /*<div className="container pt-4 center">
      <div className=" Auth ">
        <h1 className=" text-center mt-5 mb-5">Авторизация</h1>
        <form className="AuthForm">
          <div className="form-group">
            <input type="email" className="form-control " placeholder="Enter Email" />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <input type="password" className="form-control " placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-success">
            Войти
          </button>
          <button type="submit" className="btn btn-success">
            Регестрация
          </button>
        </form>
      </div>
    </div>*/

    /*<div>
      <AuthContent>
        <Container>
          <NameAuth>
            <h2>Мы рады видеть тебя!</h2>
            <h1>Авторизация</h1>
          </NameAuth>

          <form>
            <AuthForm>
              <FormGroup>
                <FormControl type="email" placeholder="Enter email" />

                <FormText muted>We&#39;ll never share your email with anyone else.</FormText>
              </FormGroup>
              <FormGroup>
                <FormControl type="password" placeholder="Enter password" />
              </FormGroup>

              <FormGroup>
                <ButtonGroup>
                  <Button mr7 inline-block dark>
                    Войти
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button ml9 inline-block dark>
                    Регестрация
                  </Button>
                </ButtonGroup>
              </FormGroup>
            </AuthForm>
          </form>
        </Container>
      </AuthContent>
    </div>*/

    /*  <div>
      <NavLog>
        <Nav center tabs>
          <ButtonToolbar>
            <ButtonGroup active lg mx9>
              <NavLink to="/login">
                <Button>Вход </Button>
              </NavLink>
            </ButtonGroup>
            <ButtonGroup lg mx9>
              <NavLink to="/register">
                <Button>Регистрация</Button>
              </NavLink>
            </ButtonGroup>
          </ButtonToolbar>
        </Nav>
      </NavLog>
    </div>*/

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
