import './App.css';
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {GenQuiz} from "./components/general-quiz/gen-quiz";
import {WebQuiz} from "./components/web-dev-quiz/web-quiz";
import {Menu} from "./components/menu/menu";

function App() {

  return (
    <BrowserRouter >

     <Switch>
            <Route path="/quiz-app" exact component={Menu} />
            <Route path="/gen-quiz" exact component={GenQuiz} />
            <Route path="/web-quiz" exact component={WebQuiz} />


        </Switch>

    </BrowserRouter>
  );
}

export default App;


