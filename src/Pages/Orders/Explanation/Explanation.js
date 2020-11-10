import React from 'react'
import Helmet from 'react-helmet';
import {MenuCreaterOrders} from '../../../components/MenuCreateOrder/MenuCreaterOrders'
import {Main} from './style'


export const Explantion = () => {
  return (
    <Main>
      <Helmet title="Описание заказа" />
      <MenuCreaterOrders />
      <h1> Описание </h1>
    </Main>
  );
};
