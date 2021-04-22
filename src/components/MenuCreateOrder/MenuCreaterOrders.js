// import { green } from '@material-ui/core/colors'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Container, Navbar } from 'styled-bootstrap-components'
import {
  Main, DivText, Text,
} from './style'

export const MenuCreaterOrders = () => (

<Main>
     <Nav center expandSm>
       <DivText>
            <NavLink to = '/project/create/categories' style={{ textDecoration: 'none', color: 'green' }} >
            <Text>Категории</Text>
            </NavLink>

        </DivText>
        <DivText>
        <NavLink to = '/project/create/explanation' style={{ textDecoration: 'none', color: 'green' }} >
            <Text>Описание</Text>
            </NavLink>
       </DivText>
       <DivText>
       <NavLink to = '/project/create/publication' style={{ textDecoration: 'none', color: 'green' }} >
            <Text>Публикация</Text>
            </NavLink>
           </DivText>
     </Nav>
</Main>

)
