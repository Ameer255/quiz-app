import { QuizBox } from "./quizMenu";
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';


export const Menu = () => {
  return (
    <div className="menu">

    <QuizBox linkTo="/web-quiz" icon={<CodeOutlinedIcon/>} name=" Web Quiz"/>

    <QuizBox linkTo="/gen-quiz" icon={<PsychologyAltOutlinedIcon/>} name="IQ Quiz"/>

    <QuizBox linkTo="/english-quiz" icon={<SpellcheckOutlinedIcon/>} name="English & Grammer"/>

    <QuizBox linkTo="/math-quiz" icon={<CalculateOutlinedIcon/>} name="Maths"/>
    

    </div>

  )
}