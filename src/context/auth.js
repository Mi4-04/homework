import React, {useState,useCallback,createContext} from 'react'
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
     
    const [users, setUser] = useState(jwtToken)
    
    //debugger;
    const signIn = useCallback((token) => {
        
         localStorage.setItem('token', token)
        setUser(token)}, [setUser])
    
    const logout = useCallback(() =>{
       

        localStorage.removeItem('token');
         setUser(null)}, [setUser])
         return (
            <AuthContext.Provider
            
             value = {{user: users, logout, signIn}} 
              {...props}/>
        )
    }


export    {AuthProvider, AuthContext}
