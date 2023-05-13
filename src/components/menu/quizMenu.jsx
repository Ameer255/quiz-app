import {React} from "react";
import { Link } from "react-router-dom";

export const QuizBox =({linkTo, icon, name})=>{

    return(
        <div className="box">
        <Link to={linkTo}>
          <div className="icon">
            <i className={icon}></i>
          </div>
          <div className="quiz-name">
            <b>{name}</b>
          </div>
        </Link>
      </div>

    )
}