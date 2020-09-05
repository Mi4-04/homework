import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'styled-container-component';

import { Button, ButtonGroup, ButtonToolbar } from 'styled-button-component';

const GeneralTop = styled.div`
  background: ${(props) => (props.dark ? 'rgb(41, 43, 44)' : 'black')};
  color: ${(props) => (props.dark ? 'white' : 'black')};
  height: 500px;
  padding-top: 30px;
  border: 1px solid rgba(2, 3, 3, 0.5);
  margin-top: 30px;
  box-shadow: 0 0 14px 0 rgba(3, 5, 7, 0.35);
`;

const HeaderName = styled.div`
  display: block;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
`;

const HeaderInfo1 = styled.div`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 18px;
`;

const HeaderInfo2 = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 40px;
`;
const Iorders = styled.button`
  width: 160px;
  height: 60px;
  border: 1px solid rgba(2, 3, 3, 0.5);

  font-size: 16px;
`;

const IExecutors = styled.button`
  width: 160px;
  height: 60px;
  border: 1px solid rgba(2, 3, 3, 0.5);

  font-size: 16px;
`;

export const Home = () => {
  const [titleName] = useState('Главная');

  useEffect(() => {
    document.title = `${titleName}`;
  });
  return (
    /* <div className="general-top bg-success">*/
    <GeneralTop dark>
      {/* <div className="container"> */}

      <Container>
        {/* <div className="headerName">
          <p>Услуги дизайнеров</p>
        </div>*/}
        <HeaderName>
          <p>Услуги дизайнеров</p>
        </HeaderName>
        {/*<div className="headerInfo1">
          <p> Disigner – более тысячи заказов каждый день, 1.5М дизайнеров</p>
        </div>*/}
        <HeaderInfo1>
          <p> Disigner – более тысячи заказов каждый день, 1.5М дизайнеров</p>
        </HeaderInfo1>
        {/* <div className="headerInfo2">
            <p> Работа по безопасной сделке.</p>
            <p>Честные отзывы и актуальный рейтинг.</p>
            <p>Широкие возможности для заказчиков и фрилансеров.</p>
            <p>Достойное вознаграждение и ожидаемый результат.</p>
          </div>*/}
        <HeaderInfo2>
          <p> Работа по безопасной сделке.</p>
          <p>Честные отзывы и актуальный рейтинг.</p>
          <p>Широкие возможности для заказчиков и фрилансеров.</p>
          <p>Достойное вознаграждение и ожидаемый результат.</p>
        </HeaderInfo2>

        {/* <div className="row">
          <div className="col text-right ">
            <NavLink to="/auth">
              <button className="btn btn-light iOrders ">Я заказчик</button>
            </NavLink>
          </div>
          <div className="col text-left ">
            <button className="btn btn-light iExecutors">Я исполнитель</button>
          </div>
        </div>*/}
        {/* <div>
          <BootstrapBaseCss />
          <Div flexRow>
            <Div flrxColumn textRight>
              <NavLink to="/auth">
                <Button>
                  <Iorders> Я заказчик</Iorders>
                </Button>
              </NavLink>
            </Div>
            <Div flrxColumn textLeft>
              <NavLink to="/auth">
                <Button>
                  <IExecutors> Я исполнитель</IExecutors>
                </Button>
              </NavLink>
            </Div>
          </Div>
        </div>*/}

        <ButtonToolbar center>
          <ButtonGroup ml9 mr9>
            <NavLink to="/auth">
              <Button dark>
                <Iorders>Я заказчик</Iorders>
              </Button>
            </NavLink>
          </ButtonGroup>
          <ButtonGroup ml9>
            <NavLink to="/auth">
              <Button dark>
                <IExecutors>Я исполнитель</IExecutors>
              </Button>
            </NavLink>
          </ButtonGroup>
        </ButtonToolbar>
      </Container>
    </GeneralTop>
    /*</div>*/
  );
};
