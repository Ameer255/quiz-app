import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { Question } from "../question/question";

export const WebQuiz = () => {



  // let brk = code.split('-');
  // let joiningBr = brk.join(" <br>");

  let questions = [[], ["which one is an inline element..?"],
  ["which tag is used to display an image..?"],
  ["which tag is used to connect external JavaScript file..?"],
  ["There are 4 ways to style HTML elements..?"],
  ["What is the correct way to find the length of an array in JS..?"],
  ["#FF3205 Is the representation of which color in Hexa..?"],
  [[`what is the output of the following code..?`], ["let arr = [2,4,3,7,6];"], ["console.log(arr[arr.length-2])"]]];

  let options = [[], ["div", "section", "H1", "<a>"],
  ["pic", "image", "img", "photo"],
  ["<script>", "<link>", "<Javascrip>"],
  ["true", "false"],
  ["Array.size", "Array.width", "Array.length", "sizeOf(Array)"],
  ["Red", "Green", "Blue"], ["6", "7", "3", "4"]];

  let answerKey = [[], ["<a>"], ["img"], ["<script>"], ["false"],
  ["Array.length"], ["Red"], ["7"]];




  let [questionInfo, setQuestionInfo] = useState({
    step: 1,
    correct: 0

  })

  const addToCorrect = () => {
    setQuestionInfo({ ...questionInfo, correct: questionInfo.correct += 1 });
    console.log(questionInfo.correct)
  }



  const nextStep = () => {
    setQuestionInfo({ ...questionInfo, step: questionInfo.step + 1 });
  };


  if (questionInfo.step >= 1 && questionInfo.step <= 7) {

    return <Question
      q={questions[questionInfo.step]}
      next={nextStep}
      step={questionInfo.step}
      options={options[questionInfo.step]}
      correct={answerKey[questionInfo.step]}
      addToCorrect={addToCorrect} />


  }
  else {
    return <div className="result">
      <div><h2>Result</h2></div>
      <table>
        <tr>

          <th>Total </th>
          <td>10</td>
        </tr>

        <tr>
          <th className="correct">Correct</th>
          <td className="correct">{questionInfo.correct}</td>
        </tr>

        <tr>
          <th className="incorrect">Incorrect</th>
          <td className="incorrect">{7 - questionInfo.correct}</td>
        </tr>
      </table>
      <div>
       <Link to="/quiz-app"><button>Back To Quiz Home</button> </Link> 
      </div>
      
    </div>
  }


}