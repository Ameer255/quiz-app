import { QuizBox } from "./quizMenu";
import img1 from "../../assets/images/sscode.png";
import img2 from "../../assets/images/Screenshot (51).png";
import img3 from "../../assets/images/Screenshot (52).png";
import img4 from "../../assets/images/Screenshot (53).png";


export const Menu = () => {
  return (
    <div className="menu">

    <QuizBox linkTo="/web-quiz" img={img1} name=" Web Quiz"/>

    <QuizBox linkTo="/gen-quiz" img={img2} name="IQ Quiz"/>

    <QuizBox linkTo="/english-quiz" img={img3} name="English & Grammer"/>

    <QuizBox linkTo="/math-quiz" img={img4} name="Maths"/>
    

    </div>

  )
}