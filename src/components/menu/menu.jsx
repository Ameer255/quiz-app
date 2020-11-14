import { Link } from "react-router-dom"
import {Quiz} from "../quiz-box/quiz-box";

export const Menu = ()=>{
   return(
       <div className="menu">

         <div className="box">
       <Link to="/gen-quiz" > <Quiz category="General quiz"/></Link>
       </div>

       <div className="box">
       <Link to="/web-quiz" >  <Quiz category="Web quiz"/> </Link>
       </div>

       </div>

   )

        
 }