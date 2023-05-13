import React from 'react'
import { Questions } from './questionData'
import { Quiz } from '../quizContainer/quizContainer'

export const EnglishQuiz = () => {
  return <Quiz Questions={Questions} />
}
