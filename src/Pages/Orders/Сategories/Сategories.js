import React, {useState, useEffect} from 'react'
import Helmet from 'react-helmet';
import {MenuCreaterOrders} from '../../../components/MenuCreateOrder/MenuCreaterOrders'
import {Main, DivCheck, Content, H1,  DivCategories, DivForm, TextCheck, P} from './style'
import {Container, FormCheck, FormCheckInput, Button, FormGroup} from 'styled-bootstrap-components'
import {useForm} from 'react-hook-form'
import request from '../../../utils/request'

export const Categories = (props) => {
 
  const [valueState, setValueState] =  useState([])
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
     //   const response = await request({ method: 'post', data , url: '/project/create/categories' })
        console.log(data)
       //props.history.push('/project/create/explanation');
    }
     
useEffect(() => {
  let valueState  = [
    {value: "Полиграфия",name: "Полиграфия"},
    {value: "Баннеры", name: "Баннеры"},
    {value: "Логотипы", name: "Логотипы"},
    {value: "Инфографика",name: "Инфографика"},
    {value: "Дизайн упаковки/этикетки", name: "Дизайн упаковки/этикетки"},
    {value: "Оформление социальных сетей", name: "Оформление социальных сетей"},
    {value: "Картографи", name: "Картографи"},
    {value: "Фирменный стиль (айдентика)", name: "Фирменный стиль (айдентика)"},
    {value: "Дизайн упаковки", name: "Дизайн упаковки"},
    {value: "Полиграфическая верстка", name: "Полиграфическая верстка"},
    {value:"Интерфейсы для игр", name: "Интерфейсы для игр"},
    {value: "Дизайн интерфейсов", name: "Дизайн интерфейсов"},
    {value: "Дизайн мобильных приложений", name: "Дизайн мобильных приложений"},
    {value: "Гейм-дизайнер", name: "Гейм-дизайнер"},
    {value: "Векторная графика", name: "Векторная графика"},
    {value: "Разработка шрифтов", name: "Разработка шрифтов"},
    {value: "Дизайн игр (game design)", name: "Дизайн игр (game design)"},
    {value: "Игровая графика под ключ", name: "Игровая графика под ключ"},
    {value: "Концепт-арт", name: "Концепт-арт"},
    {value: "Каллиграфия и леттеринг", name: "Каллиграфия и леттеринг"},
    {value: "Интерьеры", name: "Интерьеры"},
  ];

  setValueState(valueState)
    
}, [])
     


  return (
    <Main>
        <Container>
      <Helmet title="Выбор категории" />
      <MenuCreaterOrders />
      <div>
      <DivCheck>
         <h3>Ваш проект</h3>
  <TextCheck>Категория</TextCheck>
  {valueState.map((d, i) => (
    <P key = {i}>{d.value}</P>
  ))}
   {/*тут кусок где должен выводиться 

  
 
 */}
     </DivCheck>
<Content>
      <H1> Выбор категории </H1>
     
  <DivForm>
  <form onSubmit={handleSubmit(onSubmit)}>
       <DivCategories>
     
{valueState.map((d, i ) => (
      
      <FormCheck key= {i}>
        
        <label >
<FormCheckInput type="checkbox" name = {d.name} value = {d.value} ref = {register} /> {d.name}
        </label>
      </FormCheck>
     
     ) )}
      </DivCategories>
      <FormGroup>
            <Button type="submit"  block success>
              Продолжить
            </Button>
          </FormGroup>
</form>

  </DivForm>
      </Content>
      </div>
      </Container>
    </Main>
  );
};

