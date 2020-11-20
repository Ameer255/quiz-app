import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { GenQuiz } from "./components/general-quiz/gen-quiz";
import { WebQuiz } from "./components/web-dev-quiz/web-quiz";
import { Menu } from "./components/menu/menu";


let navOpen = false;

const navOpenClose = () => {

  let nav = document.querySelector(".nav-sm");

  let hamberger = document.querySelector('#hamberger');

  if (navOpen === false) {
    nav.style ="width : 100%; right : 0; ";

    hamberger.classList.add('toggle');
    navOpen = true;

  }

  else if (navOpen === true) {

    nav.style.width = "0";
    nav.style.right = "-400px";

    hamberger.classList.remove('toggle');
    navOpen = false;

  }
}


function App() {

  return (
    <BrowserRouter >
      <nav>

        <div>
          <h1><span className="first-letter">Q</span><span className="rem-letters">uiz</span> <span className="rem-letters">B</span><span className="first-letter">ox</span></h1>
        </div>

        <div className="nav-items">
          <div><Link to="/quiz-app" > Home </Link></div>
          <div><Link to="/gen-quiz"> General Quiz </Link></div>
          <div><Link to="/web-quiz"> Web Quiz</Link></div>
        </div>

        <div>

          <div id="hamberger" onClick={navOpenClose}>
            <span className="item1"></span>
            <span className="item2"></span>
            <span className="item3"></span>
          </div>

        </div>

      </nav>

      <div className="nav-sm">
        <div></div>
        <div><Link to="/quiz-app" onClick={navOpenClose}> Home </Link></div>
        <div><Link to="/gen-quiz" onClick={navOpenClose}> General Quiz </Link></div>
        <div><Link to="/web-quiz" onClick={navOpenClose}> Web Quiz</Link></div>
        <div></div>

      </div>

      <Switch>
        <Route path="/quiz-app" exact component={Menu} />
        <Route path="/gen-quiz" exact component={GenQuiz} />
        <Route path="/web-quiz" exact component={WebQuiz} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;


