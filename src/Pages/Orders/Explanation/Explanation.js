import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet';
import { Container, Button, FormGroup } from 'styled-bootstrap-components'
import { MenuCreaterOrders } from '../../../components/MenuCreateOrder/MenuCreaterOrders'
import {
  Main, Content, H1, P, TitleInput, H3, FormTextArea, SmallP,
} from './style'
import { SideInfoOrder } from '../../../components/SideInfoOrder/SideInfoOrder'
import Modal from '../../../components/Modal/Modal'

export const Explantion = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const openModal = () => {
    setModalActive((prev) => !prev);
  };
  return (
    <Main>
      <Container>
      <Helmet title="Описание заказа" />
      <MenuCreaterOrders />
      <SideInfoOrder title1 = "Категория" title2 = "Название " title3 = "Описание" named = '1' description = " 123" description2 = "12345"/>

      <Content>
      <H1> Описание задания </H1>
      <form>
      <P>Придумайте название вашего задания. Название должно привлекать внимание и отражать суть задачи.</P>
     <h3>Название</h3>
<TitleInput />
<H3>Описание</H3>
<p>Опишите подробно то, что необходимо сделать в рамках данного проекта. Чем подробнее вы опишите задачу, тем лучше будет результат.</p>
   <p>Для обеспечения конфиденциальности и защиты от мошеннических действий, не указывайте для связи никаких своих внешних контактных данных.</p>

    <FormTextArea/>

    <H1>Обязательные требования</H1>
    <P>Напишите обязательные требования, которым должна соответствовать работа. Форматы файлов, способы проверки и т.д.</P>

    <h3>Обязательные требования</h3>
    <FormTextArea/>
    <SmallP>Заполнять не обязательно, но желательно</SmallP>

<h2>Файлы</h2>
<label>Добавить файлы.</label>
<FormGroup >
<Button type = "button" onClick = {openModal} success>Выбрать файл</Button>
</FormGroup>

    <FormGroup >

    <Button type="submit" block success >

             Продолжить
           </Button>
           </FormGroup>

     </form>
     <Modal showModal = {modalActive} setActive = {setModalActive}/>
      </Content>

     {/* <Link to= "/project/create/categories">Link back</Link> */}

      </Container>
    </Main>
  )
};
