import React from "react";
import {useState} from "react";
import { Question } from "../question/question";

export const WebQuiz = ()=>{

    let [step, setStep] = useState(1);
    let [correct, SetNumCorrect] = useState(0);

    const addToCorrect = ()=>{
      SetNumCorrect(correct+1);
    }


    let questions = [[], ["which one is an inline element..?"], 
    ["which tag is used to display an image..?"],
  ["which tag is used to connect external JavaScript file..?"],
["There are 4 ways to style HTML elements..?"],
["What is the correct way to find the length of an array in JS..?"]];

    let options = [[], ["div", "section", "H1", "<a>"], 
    ["pic", "image", "img", "photo"],
     ["<script>", "<link>", "<Javascrip>"],
    ["true", "false"],
  ["Array.size", "Array.width", "Array.length", "sizeOf(Array)"]];

    let answerKey = [[], ["<a>"], ["img"] ,["<script>"], ["false"], "Array.length"];
    

    const nextStep = () => {
        setStep(step + 1 );
      };
    
      const prevStep = () => {
        setStep(step - 1 );
      };

       if(step >=1 && step <=5){
           
           return <Question
            q={questions[step]}
             next={nextStep} prev={prevStep}
              step={step}
               options={options[step]}
               correct={answerKey[step]}
               addToCorrect={addToCorrect} />
         
           
       }
       else{
       return <div style={{"textAlign": "center"}}>
         <h2>Result : <br/>{`Correct : ${correct}`} <br/> {`Incorrect : ${5-correct}`}</h2>
         </div>
       }
      
    
}