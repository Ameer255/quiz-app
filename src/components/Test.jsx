import {React } from 'react'
import { useLocation } from 'react-router-dom'


export const RouteTest = () => {
    const loc = useLocation();
    console.log(loc.state)
  let message = "hello"
    return(
        <div>
            
            <h2>Hi {`${loc.state.name} ${message} `} </h2>
        </div>
    )
 
}
