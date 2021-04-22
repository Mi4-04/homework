import React, { useContext } from 'react'

import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/authContext/auth'

const AuthRoute = ({ component: Component, ...args }) => {
  const { user } = useContext(AuthContext)

  return (
        // Роут с проверкой на то чтобы когда ты авторизован ты не мог зайти в signin или signup
        <Route {...args}
        render = {(props) => (!user ? <Component {...props}/> : <Redirect to = "/orders" />) }/>
  )
}

export default AuthRoute
