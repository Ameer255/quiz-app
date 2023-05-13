import React from "react";
import {useNavigate} from 'react-router-dom'


export const MathQuiz = ()=>{
    const navigate = useNavigate();
  const toTest=()=>{
    navigate("/test",{state:{name:"Ameer"}})
  }
    return (
        <div style={{"display" : "flex" , "alignItems": "center", "justifyContent": "center"}}>
           <h3>No Quiz Here</h3> 
           {/* <div>
            <button onClick={toTest}>Go Test</button>
          </div> */}
           
        </div>
    )
}