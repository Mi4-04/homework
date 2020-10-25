import React from 'react';
import Helmet from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Auth } from '../../components/Auth/Auth';
import { FormGroup } from 'styled-form-component';
import { Button } from 'styled-button-component';
import { Container } from 'styled-container-component';
import { Column } from 'styled-grid-system-component';
import { NameAuth, FormControl, ErrorMsg } from './style';
import request from './request';
import { useContext } from 'react';
import {AuthContext} from '../../context/auth'

const Register = (props) => {
  
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(AuthContext)
  const onSubmit = async (data) => {
    console.log(data);
    const response = await request({ method: 'post', data , url: '/signup' })
    context.signin(data)
    props.history.push('/signin');

  };


  return (
    <div>
      <Helmet title="Регистрация" />
      <Auth />

      <form action="/signup" onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <NameAuth>
            <h1>Регистрация</h1>
          </NameAuth>

          <FormGroup>
            <label>
              Email
              <FormControl
                type="email"
                placeholder="Email"
                name="email"
                ref={register({ required: true })}
              />
            </label>
          </FormGroup>
          {errors.email && errors.reqPassword.type === 'required' && (
            <ErrorMsg>This is required</ErrorMsg>
          )}
          <FormGroup>
            <label>
              Пароль
              <FormControl
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: true, minLength: 6 })}
              />
            </label>
          </FormGroup>
          {errors.password && errors.password.type === 'required' && (
            <ErrorMsg>This is required</ErrorMsg>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <ErrorMsg>Минимум 6 символов </ErrorMsg>
          )}
          <FormGroup>
            <label>
              Пароль еще раз
              <FormControl
                type="password"
                placeholder="Repeat password"
                name="reqPassword"
                ref={register({ required: true, minLength: 6 })}
              />
            </label>
          </FormGroup>
          {errors.reqPassword && errors.reqPassword.type === 'required' && (
            <ErrorMsg>This is required</ErrorMsg>
          )}
          {errors.reqPassword && errors.reqPassword.type === 'minLength' && (
            <ErrorMsg>Минимум 6 символов </ErrorMsg>
          )}
          
          <FormGroup row>
            <Column sm={6}>
              <FormControl
                type="text"
                placeholder="Surname"
                name="surname"
                ref={register({ required: true })}
              />
            </Column>
            {errors.surname && errors.surname.type === 'required' && (
              <ErrorMsg>This is required</ErrorMsg>
            )}
            <Column sm={6}>
              <FormControl
                type="text"
                placeholder="Name"
                name="name"
                ref={register({ required: true })}
              />
            </Column>
            {errors.name && errors.name.type === 'required' && (
              <ErrorMsg>This is required</ErrorMsg>
            )}
          </FormGroup>

          <FormGroup row>
            <Column sm={8}>
              <FormControl
                type="text"
                placeholder="Country"
                name="country"
                ref={register({ required: true })}
              />
            </Column>
            {errors.country && errors.country.type === 'required' && (
              <ErrorMsg>This is required</ErrorMsg>
            )}
            <Column sm={4}>
              <FormGroup>
                <FormControl
                  name="city"
                  type="text"
                  placeholder="City"
                  ref={register({ required: true })}
                />
              </FormGroup>
            </Column>
            {errors.city && errors.city.type === 'required' && (
              <ErrorMsg>This is required</ErrorMsg>
            )}
          </FormGroup>

          <FormGroup>
            <Button type="submit"  block dark>
              Регистрация
            </Button>
          </FormGroup>
        </Container>
      </form>
    </div>
  );
};

export default Register;
