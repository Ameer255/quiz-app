import { Link } from "react-router-dom";


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
            <i className="fas fa-brain"></i>
          </div>
          <div className="quiz-name">
            <b>IQ Quiz</b>
          </div>
        </Link>
      </div>


      <div className="box">
        <Link to="/english-quiz">
          <div className="icon">
            <i className="fas fa-spell-check"></i>
          </div>
          <div className="quiz-name">
            <b>English & Grammer</b>
          </div>
        </Link>
      </div>


      <div className="box">
        <Link to="/math-quiz">
          <div className="icon">
            <i className="fas fa-calculator"></i>
          </div>
          <div className="quiz-name">
            <b>Maths</b>
          </div>
        </Link>
      </div>




    </div>

  )


}