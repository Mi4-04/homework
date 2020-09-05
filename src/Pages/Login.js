import React, { useState, useEffect } from 'react';
import { Auth } from '../components/Auth';
import { FormControl, FormGroup, FormText } from 'styled-form-component';
import { Button } from 'styled-button-component';
import { Container } from 'styled-container-component';
import styled from 'styled-components';

const NameAuth = styled.div`
  text-align: center;
`;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name] = useState('Вход');

  useEffect(() => {
    document.title = `${name}`;
  });

  return (
    <div>
      <Auth />
      <form action="/signin" method="POST">
        <Container>
          <NameAuth>
            <h1>Вход в систему</h1>
          </NameAuth>
          <FormGroup>
            <FormControl
              {...email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />

            <FormText muted>We&#39;ll never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup>
            <FormControl
              {...password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              required
              // minlength={password.length > 6 ? password : null}
            />
          </FormGroup>

          <FormGroup>
            <Button type="submit" block dark>
              Войти
            </Button>
          </FormGroup>
        </Container>
      </form>
    </div>
  );
};
