import React, { useState, useEffect } from 'react';
import { Auth } from '../components/Auth';
import { FormControl, FormGroup } from 'styled-form-component';
import { Button } from 'styled-button-component';
import { Container } from 'styled-container-component';
import styled from 'styled-components';
import { Column } from 'styled-grid-system-component';

const NameAuth = styled.div`
  text-align: center;
`;

export const Register = () => {
  const [titleName] = useState('Регистрация');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    document.title = `${titleName}`;
  });

  return (
    <div>
      <Auth />
      <form action="/signup" method="POST">
        <Container>
          <NameAuth>
            <h1>Регистрация</h1>
          </NameAuth>

          <FormGroup>
            <label>
              Email{email}
              <FormControl
                {...email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              Пароль{' '}
              <FormControl
                {...password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              Пароль еще раз
              <FormControl
                {...repPassword}
                onChange={(e) => setRepPassword(e.target.value)}
                type="password"
                placeholder="Repeat password"
                required
              />
            </label>
          </FormGroup>
          <form>
            <FormGroup row>
              <Column sm={6}>
                <FormControl
                  {...surname}
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  placeholder="Surname"
                  name="surname"
                  required
                />
              </Column>
              <Column sm={6}>
                <FormControl
                  {...name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
              </Column>
            </FormGroup>
            <FormGroup row>
              <Column sm={8}>
                <FormControl
                  {...country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="County"
                  required
                />
              </Column>
              <Column sm={4}>
                <FormGroup>
                  <FormControl
                    {...city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="City"
                    required
                  />
                </FormGroup>
              </Column>
            </FormGroup>
          </form>
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
