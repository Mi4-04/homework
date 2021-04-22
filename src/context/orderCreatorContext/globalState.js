import React, { useReducer, useState } from 'react'
// import _default from 'react-hook-form/dist/logic/appendErrors'
import orderCreatorReducer from './reducer'
import { ADD_INFO_TO_ORDER } from './action'

const OrderCreatorContext = React.createContext({

  categories: [
    { id: 1, title: 'Картины' },
    { id: 2, title: 'Обработка фото' },
    { id: 3, title: 'Шарж' },
  ],
  enter: [],
  addInfoToOrder: (infoToOrders) => {},

})

const OrderCreatorProvider = (props) => {
  const categories = [
    { id: 1, title: 'Картины' },
    { id: 2, title: 'Обработка фото' },
    { id: 3, title: 'Шарж' },
  ]
  const [enterState, dispatch] = useReducer(orderCreatorReducer, { enter: [] })

  const addInfoToOrder = (infoToOrders) => {
    setTimeout(() => {
      dispatch({ type: ADD_INFO_TO_ORDER, infoToOrders })
    }, 700)
  }

  return (
            <OrderCreatorContext.Provider
            value = {{
              categories,
              enter: enterState.enter,
              addInfoToOrder,
            }}

           >
               {props.children}
            </OrderCreatorContext.Provider>
  )
}

export { OrderCreatorProvider, OrderCreatorContext }
