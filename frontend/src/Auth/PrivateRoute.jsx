import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { dataContext } from '../Context/DataProvider'

const PrivateRoute = ({children}) => {
    const {auth} = useContext(dataContext)
    if(!auth){
     return <Navigate to="/account"/>
    }else{
        return (
            <>
              {children}    
            </>
          )
    }

 
}

export default PrivateRoute
