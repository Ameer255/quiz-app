import { QuizBox } from "./quizMenu";

export const Menu = () => {
  return (
    <div className="menu">

    <QuizBox linkTo="/web-quiz" icon="fas fa-laptop-code" name=" Web Quiz"/>

    <QuizBox linkTo="/gen-quiz" icon="fas fa-brain" name="IQ Quiz"/>

    <QuizBox linkTo="/english-quiz" icon="fas fa-spell-check" name="English & Grammer"/>

    <QuizBox linkTo="/math-quiz" icon="fas fa-calculator" name="Maths"/>
    

    </div>

  )
}