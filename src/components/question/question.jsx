
import React from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import correct from "../resources/correct.mp3";
import wrong from "../resources/wrong.mp3";




export const Question = (props) => {

    let correctAudio = new Audio(correct);



    let wrongAudio = new Audio(wrong)


    let [opt, setOpt] = useState("");

    useEffect(() => {
        document.querySelector('form').elements['option'].forEach((element) => {
            if (element.checked) {
                setOpt(element.value)
                
            }
        });
        return false;

    })

    const handleChange = (e) => {

        if(e.target == e.currentTarget){
        let id = e.target.id;
        let inpt = document.querySelector("#"+id+' input');
        inpt.checked = true;
        setOpt(inpt.value);
    }
    else{
        return false;
    }
    }


    const handleClick = () => {

        if (opt == props.correct) {
            swal({
                title: "Correct",
                text: "Excellent.!",
                icon: "success",
                button: "Continue",
                className: 'sa-sm'

            })
            props.addToCorrect();
            correctAudio.play();
        }

        else {

            swal({
                title: "Incorrect",
                text: `Oh No..! \n Correct answer was : ${props.correct}`,
                icon: "warning",
                button: "Continue",
                dangerMode: true,
                className: 'sa-sm'

            });

            wrongAudio.play();
        }

        props.next();

    }
    console.log(props.q);

    return (
        <div className="question-container">

            <div className="question-count">
                <h3>{`${props.step} / 10`}</h3>
            </div>

            <div className="question">{props.q.map((element, index) => {
                return (
                    <h2 key={index}> {element} </h2>
                )
            })}</div>



            <form className="answer-form">
                {props.options.map((option, index) => {
                    return (
                        <div className="options" key={index} id={"hello"+index} onClickCapture={handleChange}>

                            <div className="radio" >
                                <input type="radio" value={option} id={index} name="option"
                                 onChange={(e)=>setOpt(e.target.value)} />
                            </div>

                            <div className="label" htmlFor={index}>
                                <label htmlFor={index}>{option}</label> 
                            </div>


                        </div>
                    )

                })}

            </form>

            <div className="check-btn">
                <button onClick={handleClick} >Check</button>

            </div>

        </div>
    )
}