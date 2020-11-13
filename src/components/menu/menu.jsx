// import React from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Link } from "react-router-dom"


 import {Quiz} from "../quiz-box/quiz-box";

export const Menu = ()=>{
   return(
       <div>
       <Link to="/quiz-app/gen-quiz" > <Quiz category="Web quiz"/></Link>
       <Link to="/quiz-app/web-quiz" >  <Quiz category="General quiz"/> </Link>
       </div>

   )

        
 }