import { Link } from "react-router-dom"
import { Quiz } from "../quiz-box/quiz-box";

export const Menu = () => {
  return (
    <div className="menu">

      <div className="box">
        <Link to="/web-quiz" >
          <div className="icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="quiz-name">
            <b>Web Quiz</b>
          </div>
        </Link>
      </div>


      <div className="box">

        <Link to="/gen-quiz">

          <div className="icon">
            <i class="fas fa-brain"></i>
          </div>

          <div className="quiz-name">
            <b>IQ Quiz</b>
          </div>

        </Link>
      </div>





    </div>

  )


}