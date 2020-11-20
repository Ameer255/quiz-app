
import React from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert";





export const Question = (props) => {

    let correctAudio = new Audio();
    correctAudio.src = "../correct.mp3";


    let wrongAudio;


    let [opt, setOpt] = useState("");

    useEffect(() => {
        document.querySelector('form').elements['option'].forEach((element) => {
            if (element.checked) {
                setOpt(element.value);
                //    const wrongAudi = document.getElementsByClassName('audio')[0];
                //   wrongAudi.load();
                //    wrongAudi.play();
                //    console.log(wrongAudi.play())
                //    console.log(wrongAudi.source)


            }
        })
    })

    const handleChange = (e) => {
        setOpt(e.target.value);
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
            // wrongAudio.play();
        }

        else {
            swal({
                title: "Incorrect",
                text: "Oh No..!",
                icon: "warning",
                button: "Continue",
                dangerMode: true,
                className: 'sa-sm'

            });

        }

        props.next();
        // wrongAudio.play();
    }
    console.log(props.q);

    return (
        <div className="question-container">

            <div className="question-count">
                <h3>{`${props.step} / 10`}</h3>
            </div>

            <div className="question">{props.q.map((element) => {
                return (
                    <h2> {element} </h2>
                )
            })}</div>



            <form className="answer-form">
                {props.options.map((option, index) => {
                    return (
                        <div className="options">

                            <div className="radio">
                                <input type="radio" value={option} id={index} onChange={handleChange} name="option" />
                            </div>
                            <div className="label" htmlFor={index}>
                                <label htmlFor={index}>{option}</label> <br />
                            </div>


                        </div>
                    )

                })}

            </form>

            <div className="check-btn">
                <button onClick={handleClick} >Check</button>

            </div>
            <audio className="audio">
                <source src="https://gofile.io/d/L4e34L" />
            </audio>

        </div>
    )
}