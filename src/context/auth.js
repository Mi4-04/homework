import React, {useState,useCallback,createContext, useEffect} from 'react'
import jwtDecode  from 'jwt-decode'

 const AuthContext =  createContext({
    user: null, 
    signIn: (data) => {},
    logout: () => {}
})

const AuthProvider = (props) => {
     
    const jwtToken = localStorage.getItem('token');
    const [users, setUser] = useState(jwtToken)

    useEffect(() => {
        const jwtToken = localStorage.getItem('token');

        if(jwtToken) {
            const decodedToken  = jwtDecode(jwtToken)
            
            if(decodedToken.exp * 1000 < Date.now()) {
                
                localStorage.removeItem('token')
                setUser(null)
            }
        }
    }, [])
    
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
