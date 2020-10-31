import React, {createContext} from 'react'
import { useReducer } from 'react';
import { SIGNIN, LOGOUT } from './types';
import jwtDecode from 'jwt-decode'

const initialState = {
    user: null
}

const jwtToken = localStorage.getItem('token');

if(jwtToken) {
    const decodedToken  = jwtDecode(jwtToken)
    
    if(decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token')
    }else {
      
        initialState.user  = decodedToken
    }
}

 const AuthContext =  createContext({
    user: null, 
    signin: (data) => {},
    logout: () => {}
})

const AuthReducer = (state, action) => {
    switch(action.type) {
case SIGNIN: 
return {
    ...state,
    user: action.payload
};

case LOGOUT:

return {
    ...state,
    user: null
};

        default: 
        return state
    }
}
 

 const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer,initialState)

    const signin = (token) => {

        localStorage.setItem('token',  token)

     dispatch({
        type: SIGNIN,
        payload: token

})
    }

    const logout = () => {
        localStorage.removeItem('token')
dispatch({
    type: LOGOUT,
})
    }

    return (
        <AuthContext.Provider
         value = {{user: state.user, logout, signin}} 
          {...props}/>
    )
}


export    {AuthProvider, AuthContext}
