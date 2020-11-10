import React, {useState,useCallback,createContext} from 'react'
import { useReducer } from 'react';
import { SIGNIN, LOGOUT, SIGNUP } from './types';
import jwtDecode  from 'jwt-decode'


const initialState = {
    user: null,
  
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
    signIn: (data) => {},
    logout: () => {}
})

const AuthProvider = (props) => {
     
    const [user, setUser] = useState(initialState)
    
    //debugger;
    const signIn = useCallback((token) => {
         localStorage.setItem('token', token)
        setUser(token)}, [setUser])
    
    const logout = useCallback(() =>{
       

        localStorage.removeItem('token');
         setUser(null)}, [setUser])
         return (
            <AuthContext.Provider
            
             value = {{user: user, logout, signIn}} 
              {...props}/>
        )
    }
/*const AuthReducer = (state, action) => {
    switch(action.type) {

case SIGNUP:
    return {
        ...state,
        user: null
    };

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
}*/
 

 

   /* const [state, dispatch] = useReducer(AuthReducer,initialState)

    const signup = (token) => {

        

     dispatch({
        type: SIGNUP,
        payload: token

})
    }


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
    }*/




export    {AuthProvider, AuthContext}
