import './App.css';
import React from "react";
import Routes from "../src/Routes";
import {Router} from "react-router-dom";
import history from "./services/history";

function App() {

  return (
    <Router  history={history}>

      <Routes />
    </Router>
  );
}

export default App;


