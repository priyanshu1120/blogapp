import React, { useState } from 'react'
import { createContext } from 'react'

export  const dataContext = createContext(null)

const DataProvider = ({children}) => {
     const [account, setAccount] = useState({name:"",email:""})
     const [auth,setAuth] = useState(true)
  return (
    <dataContext.Provider value = {{account,setAccount,auth,setAuth}}>
           {children}
    </dataContext.Provider>
  )
}

export default DataProvider
