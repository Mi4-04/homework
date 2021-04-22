import React from 'react';
import Helmet from 'react-helmet';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { Auth } from '../../components/Auth/Auth';
import { FormGroup, FormCheck, FormCheckInput } from 'styled-form-component';
import { Button } from 'styled-button-component';
import { Container } from 'styled-container-component';
import { Column } from 'styled-grid-system-component';
import { NameAuth, FormControl, ErrorMsg, LabelSelect, DivSelect } from './style';
import request from '../../utils/request';
import { useContext } from 'react';
import {AuthContext} from '../../context/authContext/auth'

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(AuthContext)
  const onSubmit = async (data) => {
    const response = await request({ method: 'post', data, url: '/signup' })
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

          <ErrorMessage
        errors={errors}
        name="email"
        render={
          () => <ErrorMsg>This is required</ErrorMsg>}
      />
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
          <ErrorMessage
        errors={errors}
        name="password"
        render={
          () => <ErrorMsg>This is required</ErrorMsg>}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={
          () => <ErrorMsg>Минимум 6 символов</ErrorMsg>}
      />
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
          <ErrorMessage
        errors={errors}
        name="reqPassword"
        render={
          () => <ErrorMsg>This is required</ErrorMsg>}
      />
      <ErrorMessage
        errors={errors}
        name="reqPassword"
        render={
          () => <ErrorMsg>Минимум 6 символов</ErrorMsg>}
      />
          <FormGroup>
            <Column sm={5}>
              <FormControl
                type="text"
                placeholder="Name"
                name="name"
                ref={register({ required: true })}
              />
            </Column>
            <ErrorMessage
        errors={errors}
        name="name"
        render={
          () => <ErrorMsg>This is required</ErrorMsg>}
      />
        </FormGroup>
         <DivSelect>
          <FormCheck inline >
        <LabelSelect>
          <FormCheckInput type="radio" name="typeUser" value = "iCustomer" ref={register({ required: true })} /> Я заказчик
        </LabelSelect>
      </FormCheck>
      <FormCheck inline >
        <LabelSelect>
          <FormCheckInput type="radio" name="typeUser" value = "iExecutor" ref={register({ required: true })} /> Я исполнитель
        </LabelSelect>
      </FormCheck>
      <ErrorMessage
        errors={errors}
        name="typeUser"
        render={
          () => <ErrorMsg>This is required</ErrorMsg>}
      />
      </DivSelect>

          <FormGroup>
            <Button type="submit" block dark>
              Регистрация
            </Button>
          </FormGroup>
        </Container>
      </form>
    </div>
  );
};

export default Register;
