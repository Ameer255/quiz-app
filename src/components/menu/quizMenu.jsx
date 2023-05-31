import {React} from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import brainIcon from '@mui/icons-material/PsychologyAltOutlined';


export const QuizBox =({linkTo, icon, name})=>{

    return(
        <div className="box">
        <Link to={linkTo}>
          <div className="icon">
          <Grid >
            {icon}
          </Grid>
          </div>
          <div className="quiz-name">
            <b>{name}</b>
          </div>
        </Link>
      </div>

    )
}