import React, { useState, useContext } from 'react'
import Helmet from 'react-helmet';
import {
  Container, FormCheck, FormCheckInput, Button, FormGroup,
} from 'styled-bootstrap-components'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { MenuCreaterOrders } from '../../../components/MenuCreateOrder/MenuCreaterOrders'
import {
  Main, Content, H1, DivCategories, DivForm,
} from './style'
import { useDate } from '../../../components/DataContext/DataContext';
import { SideInfoOrder } from '../../../components/SideInfoOrder/SideInfoOrder'
// import { OrderCreatorContext, OrderCreatorProvider } from '../../../context/orderCreatorContext/globalState'
// import request from '../../../utils/request'
import { addCategoriesAction } from '../../../store/categoriesReducer';

export const Categories = (props) => {
  const categories = [
    { id: 1, title: 'Картины' },
    { id: 2, title: 'Обработка фото' },
    { id: 3, title: 'Шарж' },
    { id: 4, title: 'Портрет' },
    { id: 5, title: 'Пейзаж' },
  ];

  const dispatch = useDispatch()

  const addCategories = ({ categoriess }) => {
    const Entercategories = {
      enter,
    }

    dispatch(addCategoriesAction(Entercategories))
  }

  const { data, setValues } = useDate()
  const {
    register, handleSubmit, watch,
  } = useForm();
  const watchAllFields = watch();
  const enter = Object.keys(watchAllFields).filter((elem) => watchAllFields[elem] !== false);
  const onSubmit = async (data) => {
    // const response = await request({ method: 'post', data , url: '/project/create/categories' })
    console.log(data)
    setValues(data)
    props.history.push('/project/create/explanation');
  }

  return (

    <Main>
        <Container>
      <Helmet title="Выбор категории" />
      <MenuCreaterOrders />
      <div>
       <SideInfoOrder title1 = "Категория" />
       <Content>
      <H1> Выбор категории </H1>

  <DivForm>
  <form onSubmit={handleSubmit(onSubmit)} >
       <DivCategories>

{categories.map((d, i) => (

      <FormCheck key= {i}>
        <label >
<FormCheckInput type="checkbox" name = {d.title} value = {d.id} ref = {register} /> {d.title}
        </label>
      </FormCheck>

))}
      </DivCategories>
      <FormGroup>
            <Button onClick = {() => addCategories(enter)} block success >

              Продолжить
            </Button>
          </FormGroup>
</form>

  </DivForm>
      </Content>
      </div>
      </Container>
    </Main>
  )
}
