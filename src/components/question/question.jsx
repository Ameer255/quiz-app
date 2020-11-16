
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
               const wrongAudi = document.getElementsByClassName('audio')[0];
              wrongAudi.load();
               wrongAudi.play();
               console.log(wrongAudi.play())
               console.log(wrongAudi.source)
                

            }
        })
    })

    const handleChange = (e) => {
        setOpt(e.target.value);
    }


    const handleClick = () => {

        if (opt == props.correct) {
            swal({
                title : "Correct",
                text : "Excellent.!",
                icon : "success",
                button : "Continue",
                className : 'sa-sm'

            })
            props.addToCorrect();
            // wrongAudio.play();
        }

        else {
            swal({
                title : "Incorrect",
                text : "Oh No..!",
                icon : "warning",
                button : "Continue",
                dangerMode : true,
                className : 'sa-sm'

            });
            
        }

        props.next();
        // wrongAudio.play();
    }

    return (
        <div className="question">
            <h4>{props.q}</h4>
    <div><h2>{`${props.step} / 5`}</h2></div>

            <form >
                {props.options.map((option, index) => {
                    return (
                        <div>

                            <input type="radio" value={option} id={index} onChange={handleChange} name="option" />
                            <label htmlFor={index}>{option}</label> <br />


                        </div>
                    )

                })}

            </form>

            <div>
                <button onClick={handleClick} disabled={props.step > 5}>Next</button>
                <button onClick={props.prev} disabled={props.step <= 1}> Preveous</button>
            </div>
            <audio className="audio">
                <source src="https://gofile.io/d/L4e34L"/>
            </audio>

        </div>
    )
}