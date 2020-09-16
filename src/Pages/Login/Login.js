import React from 'react';
import Helmet from 'react-helmet';
import { Auth } from '../../components/Auth/Auth';
import { FormGroup, FormText } from 'styled-form-component';
import { Button } from 'styled-button-component';
import { Container } from 'styled-container-component';
import { NameAuth, FormControl } from './style';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Helmet title="Вход" />

      <form action="/signin" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Auth />
        <Container>
          <NameAuth>
            <h1>Вход в систему</h1>
          </NameAuth>
          <FormGroup>
            <FormControl
              name="email"
              type="email"
              placeholder="Enter email"
              ref={register({ required: true })}
            />

            <FormText muted>We&#39;ll never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup>
            <FormControl
              name="password"
              type="password"
              placeholder="Enter password"
              ref={register({ required: true })}
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
