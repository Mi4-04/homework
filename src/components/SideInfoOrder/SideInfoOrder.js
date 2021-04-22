import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DivCheck, TextCheck, P } from './style'
import { OrderCreatorContext } from '../../context/orderCreatorContext/globalState'

export const SideInfoOrder = (props) => {
  const dispatch = useDispatch()
  const categoriesEnter = useSelector((state) => state.categoriesReducer)
  console.log(categoriesEnter)
  return (

<DivCheck>

<h3>Ваш проект</h3>
<TextCheck>{props.title1} </TextCheck>

{categoriesEnter?.enter?.map((categories) => <P>{categories}</P>)}
 <br/>
<TextCheck>{props.title2} </TextCheck>
{props.named}
<br/>
<TextCheck>{props.title3} </TextCheck>
{props.description}
<br/>
{props.description2}
<br/>
<br/>
</DivCheck>

  )
}
