import React from 'react';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import { Container } from 'styled-container-component';
import { Button, ButtonGroup, ButtonToolbar } from 'styled-button-component';
import {
  GeneralTop, HeaderName, HeaderInfo1, HeaderInfo2, Iorders, IExecutors, DivButton,
} from './style';

export const Home = () => (
    <div>
      <Helmet title="Главная" />
      <GeneralTop dark>
        <Container sm>
          <HeaderName>
            <p>Услуги дизайнеров</p>
          </HeaderName>

          <HeaderInfo1>
            <p> Disigner – более тысячи заказов каждый день, 1.5М дизайнеров</p>
          </HeaderInfo1>

          <HeaderInfo2>
            <p> Работа по безопасной сделке.</p>
            <p>Честные отзывы и актуальный рейтинг.</p>
            <p>Широкие возможности для заказчиков и фрилансеров.</p>
            <p>Достойное вознаграждение и ожидаемый результат.</p>
          </HeaderInfo2>

<DivButton>
          <ButtonToolbar center>
            <ButtonGroup ml9 mr9>
              <NavLink to="/signin">
                <Button dark>
                  <Iorders>Я заказчик</Iorders>
                </Button>
              </NavLink>
            </ButtonGroup>
            <ButtonGroup ml9>
              <NavLink to="/signin">
                <Button dark>
                  <IExecutors>Я исполнитель</IExecutors>
                </Button>
              </NavLink>
            </ButtonGroup>
          </ButtonToolbar>
          </DivButton>

        </Container>
      </GeneralTop>
    </div>
);
