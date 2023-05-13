import React from 'react'
import { Questions } from './questionData'
import { Quiz } from '../quizContainer/quizContainer'

export const WebQuiz = () => {
  return <Quiz Questions={Questions} />
}
