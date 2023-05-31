import React from 'react'
import { Link } from 'react-router-dom'

export const Result = ({correct})=>{

    return (
     <div className="result">
      <div><h2>Result</h2></div>
      <table>
        <tbody>

        <tr>
          <th>Total </th>
          <td>10</td>
        </tr>

        <tr>
          <th className="correct">Correct</th>
          <td className="correct">{correct}</td>
        </tr>

        <tr>
          <th className="incorrect">Incorrect</th>
          <td className="incorrect">{10 - correct}</td>
        </tr>
        </tbody>
      </table>
      <div>
        <Link to="/quiz-app"><button>Back To Quiz Home</button> </Link>
      </div>

    </div>
    )
}