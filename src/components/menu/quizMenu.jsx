import {React} from "react";
import { Link } from "react-router-dom";



export const QuizBox =({linkTo, img, name})=>{

    return(
        <div className="box">
        <Link to={linkTo}>
          <div className="icon">
            <img src={img} alt="quiz img"/>
          </div>
          <div className="quiz-name">
            <b>{name}</b>
          </div>
        </Link>
      </div>

    )
}