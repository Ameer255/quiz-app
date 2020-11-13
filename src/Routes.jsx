import React from "react";
import {Switch, Route} from "react-router-dom";

import {GenQuiz} from "./components/general-quiz/gen-quiz";
import {WebQuiz} from "./components/web-dev-quiz/web-quiz";
import {Menu} from "./components/menu/menu";

function Routes(){

    return(
        <Switch>
            <Route path="/quiz-app" exact component={Menu} />
            <Route path="/quiz-app/gen-quiz" exact component={GenQuiz} />
            <Route path="/quiz-app/web-quiz" exact component={WebQuiz} />


        </Switch>
    )
}

export default Routes;
