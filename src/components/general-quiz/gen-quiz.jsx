import React from 'react'
import { Questions } from './questionData'
import { Quiz } from '../quizContainer/quizContainer'

export const GenQuiz = () => {
  return <Quiz Questions={Questions} />
}
