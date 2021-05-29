import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Question } from "../question/question";
import { Questions } from "./questionData";

export const WebQuiz = () => {



  let [questionInfo, setQuestionInfo] = useState({
    step: 0,
    correct: 0

  })

  const addToCorrect = () => {
    setQuestionInfo({ ...questionInfo, correct: questionInfo.correct += 1 });
    console.log(questionInfo.correct)
  }


  const nextStep = () => {
    setQuestionInfo({ ...questionInfo, step: questionInfo.step + 1 });
  };


  if (questionInfo.step >= 0 && questionInfo.step <= 10) {

    return <Question
      q={Questions[questionInfo.step].Qs}
      next={nextStep}
      step={questionInfo.step}
      options={Questions[questionInfo.step].options}
      correct={Questions[questionInfo.step].correct}
      addToCorrect={addToCorrect} />


  }
  else {
    return <div className="result">
      <div><h2>Result</h2></div>
      <table>
        <tbody>
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
          <td className="incorrect">{10 - questionInfo.correct}</td>
        </tr>
        </tbody>
      </table>
      <div>
        <Link to="/quiz-app"><button>Back To Quiz Home</button> </Link>
      </div>

    </div>
  }


}