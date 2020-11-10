import React from 'react'
import Helmet from 'react-helmet';
import {MenuCreaterOrders} from '../../../components/MenuCreateOrder/MenuCreaterOrders'
import {Main} from './style'


export const Publication = () => {
  return (
    <Main>
      <Helmet title="Публикация заказа" />
      <MenuCreaterOrders />
      <h1> Публикация </h1>
    </Main>
  );
};
