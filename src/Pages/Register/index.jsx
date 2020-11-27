import React from 'react';
import Helmet from 'react-helmet';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { Auth } from '../../components/Auth/Auth';
import { FormGroup, FormCheck, FormCheckInput  } from 'styled-form-component';
import { Button } from 'styled-button-component';
import { Container } from 'styled-container-component';
import { Column } from 'styled-grid-system-component';
import { NameAuth, FormControl, ErrorMsg, LabelSelect, DivSelect } from './style';
import request from './request';
import { useContext } from 'react';
import {AuthContext} from '../../context/auth'

const Register = (props) => {
  
  const { register, handleSubmit, errors } = useForm();
 // const context = useContext(AuthContext)
  const onSubmit = async (data) => {
    const response = await request({ method: 'post', data , url: '/signup' })
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
                ref={register({ required: "This is required" })}
              />
            </label>
          </FormGroup>

          <ErrorMessage
        errors={errors}
        name="email"
        as={<ErrorMsg/>}
      />
      
          <FormGroup>
            <label>
              Пароль
              <FormControl
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: "This is required " ,  minLength: {
                  value: 6,
                  message: "Минимум 6 символов"
                 } })}
              />
            </label>
          </FormGroup>
          <ErrorMessage
        errors={errors}
        name="password"
        as={<ErrorMsg/>}
      />
    
         
          <FormGroup>
            <label>
              Пароль еще раз
              <FormControl
                type="password"
                placeholder="Repeat password"
                name="reqPassword"
                ref={register({ required: "This is required " ,  minLength: {
                  value: 6,
                  message: "Минимум 6 символов"
                 } })}
              />
            </label>
          </FormGroup>
          <ErrorMessage
        errors={errors}
        name="reqPassword"
        as={<ErrorMsg/>}
      />
     

            <Column sm={6}>
              <FormControl
                type="text"
                placeholder="Name"
                name="name"
                ref={register({ required: "This is required" })}
              />
            </Column>
          
            <ErrorMessage
        errors={errors}
        name="name"
        as={<ErrorMsg/>}
      />

         <DivSelect>
          <FormCheck inline >
        <LabelSelect>
          <FormCheckInput type="radio" name="typeUser" value = "iCustomer" ref={register({ required: "This is required" })} /> Я заказчик
        </LabelSelect>
      </FormCheck>
      <FormCheck inline >
        <LabelSelect>
          <FormCheckInput  type="radio" name="typeUser" value = "iExecutor" ref={register({ required: "This is required" })} /> Я исполнитель
        </LabelSelect>
      </FormCheck>
      <ErrorMessage
        errors={errors}
        name="typeUser"
        as={<ErrorMsg/>}
      />
      </DivSelect>

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
