import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Question } from "../question/question";

export const GenQuiz = () => {


  let questions = [[], ["Mary had a number of cookies, after eating one, she gave half of the remaining to her sister. After eating another cookie, she gave half of what was left to her brother. Mary now had only five cookies left, how many cookies did she start with..?"],
  [["What number should replace the question mark..?"], ["0, 4, 2, 6, 3, 7, 3.5, ?"]],
  ["The price of an item was cut 20% for a sale. By what percent must the item be increased to again sale the item at its original price.?"],
  ["If the day before yesterday was thursday, when will sunday be..?"],
  ["If sami stood 13th in a racing competition from both top and bottom of the list, how many participants were there in the race..? "],
  ["A man faces north and covers 7 km, turns west and covers 2 km, then turns south and covers 4 km, again turns west and covers 2 km, how far is he from starting point..?"],
  [`If the seventh day of the month is three days earlier than friday, what day will it be on the nineteenth day of that month..?`],
  ["The old man's son is my son's uncle, what is the old man to me..?"],
  ["12 is what percent of 80.?"],
  ["The average age of four brothers is 12 years, if the age of their mother is also included, the average is increased by 5 years, The age of their mother (in years) is :"],
  [["What is the output of following code..?"], [`console.log(1 == "1");`]]];

  let options = [[], ["23", "22", "11", "45"],
  ["8", "7.5", "6.5", "6"],
  ["30%", "40%", "25%", "20%"],
  ["Tomorrow", "Day after tomorrow", "Today", "None"],
  ["27", "26", "24", "25"],
  ["20 km", "5 km", "15 km", "2 km"], 
  ["Wednesday", "Monday", "Sunday", "Friday"],
   ["Brother", "Father", "Son", "None"],
  ["15%", "13%", "17%", "8%"], 
  ["43", "48", "53", "37"]];

  let answerKey = [[], ["23"], ["7.5"], ["25%"], ["Tomorrow"],
  ["25"], ["5 km"], ["Sunday"], ["Father"], ["15%"], ["37"]];




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