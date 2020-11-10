import React from 'react';
import Helmet from 'react-helmet';
import Filter1 from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import {Container} from 'styled-bootstrap-components'
import {Title, TitleFilters, DivNumber1, DivNumber2, DivNumber3, TextContent,Text,Button, DivButton, Content, Main} from './style'
import {Link} from 'react-router-dom'


export const OrderRegistration = () => {

    return (
        <Main>
    <Helmet title = "Создание заказа" />
    <Container>

    <Content>
           <Title>Создайте заказ за 3 шага</Title> 
           
            <DivNumber1>
              <Filter1 style={{ color: 'green', fontSize: '50' }} />
              <TitleFilters>Выбери категорию</TitleFilters>
              
            </DivNumber1>

            <DivNumber2>
              <Filter2Icon  style={{ color: 'green', fontSize: '50' }} />
              <TitleFilters>Опиши задачу</TitleFilters>
            </DivNumber2>

            <DivNumber3>
              <Filter3Icon style={{ color: 'green', fontSize: '50' }}/> 
              <TitleFilters>Сделай публикацию</TitleFilters>
            </DivNumber3>
           
<TextContent>
    <Text>Всё очень просто!</Text>
</TextContent>

 <Link to = '/project/create/categories' style={{ textDecoration: 'none' }}>
<DivButton>
<Button  >
        Начать
      </Button >
      </DivButton>
  </Link>

      </Content>
         </Container>
         </Main>
    )

}
