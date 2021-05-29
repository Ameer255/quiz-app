import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Question } from "../question/question";

export const EnglishQuiz = () => {


  let questions = [[], [["Choose the appropriate letters to fill the blank..?"], ["Rec--ved"]],
  ["Hunter took an aim --- the running."],
  [["Choose the correct indirect sentence."],[`He said to me, "may you live long."`]],
  [`Select the correct antonym of "Development".`],
  ["Select the correct spelling."],
  ["Ali invited me --- tea party."],
  [`What is the antonym of "Glory".?`],
  ["Ahsan is junior --- me."],
  [["Well, i don't think i will be home before 6."], [`"Well" in the above sentence is : `]],
  [`Choose the correct synonym of "Serene".`],
  ];

  let options = [[], ["ae", "ai", "ei", "ie"],
  ["on", "at", "from", "by"],
  ["He prayed that he might live long.", "He wished that i might live long.", "He prayed that i may live long.", "He prayed that i might live long."],
  ["Retardation", "Transgration", "Impunity", "Retrogression"],
  ["Meriage", "Marriage", "Mariage", "Merriage"],
  ["at", "on", "for", "to"], ["Splendour", "Debasement", "Notoriety", "Fame"], 
  ["of", "than", "to", "by"],
  ["Interjection", "Conjuction", "Preposition", "Pronoun"], ["Delicate", "Meak", "Solemn", "Calm"],
  ];

  let answerKey = [[], ["ei"], ["at"], ["He prayed that i may live long."], ["Retrogression"],
  ["Marriage"], ["at"], ["Debasement"], ["to"], ["Interjection"], ["Calm"]];




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


  if (questionInfo.step >= 1 && questionInfo.step <= 10) {

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
          <td className="incorrect">{10 - questionInfo.correct}</td>
        </tr>
      </table>
      <div>
        <Link to="/quiz-app"><button>Back To Quiz Home</button> </Link>
      </div>

    </div>
  }


}