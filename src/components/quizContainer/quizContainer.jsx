import { useState, React } from 'react'
import { Result } from '../result/result'
import { Question } from '../question/question'

export const Quiz = (props) => {
  let [questionInfo, setQuestionInfo] = useState({
    step: 0,
    correct: 0,
  })

  const addToCorrect = () => {
    setQuestionInfo({ ...questionInfo, correct: (questionInfo.correct += 1) })
    console.log(questionInfo.correct)
  }

  const nextStep = () => {
    setQuestionInfo({ ...questionInfo, step: questionInfo.step + 1 })
  }

  if (questionInfo.step >= 0 && questionInfo.step <= 9) {
    return (
      <Question
        q={props.Questions[questionInfo.step].Qs}
        next={nextStep}
        step={questionInfo.step}
        options={props.Questions[questionInfo.step].options}
        correct={props.Questions[questionInfo.step].correct}
        addToCorrect={addToCorrect}
      />
    )
  } else {
    return <Result correct={questionInfo.correct} />
  }
}
