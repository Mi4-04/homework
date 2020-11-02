import React, {useContext} from 'react';
import Helmet from 'react-helmet';
import { Auth } from '../../components/Auth/Auth';
import { FormGroup, FormText } from 'styled-form-component';
import { Container } from 'styled-container-component';
import { NameAuth, FormControl, Button, ErrorMsg } from './style';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import request from '../Register/request';
import { AuthContext } from '../../context/auth';



export const Login = (props) => {

  const context = useContext(AuthContext)
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {

    const response = await request({ method: 'post', data, url: '/signin' })
    
    context.signin(response.data.token)
    props.history.push('/orders')
  };

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
               <ErrorMessage
        errors={errors}
        name="email"
        render={
          () => <ErrorMsg>"This is required"</ErrorMsg>}
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

          <ErrorMessage
        errors={errors}
        name="email"
        render={
          () => <ErrorMsg>"This is required"</ErrorMsg>}
      />


          <FormGroup>
            <Button  type="submit"  >
              
              Войти
            </Button>
          </FormGroup>
        </Container>
      </form>
    </div>
  );
};
