import React,{useState} from "react"
import question,{Question} from "./Question"
import './AppNitro.css';
function Button(props){
    const [done, setDone] = useState(false);
    
    function updateQuestion(){
        props.updateQuestion(props.index)
    }
    function updateNextQuestion(getDone){
        props.updateQuestion(props.index);
        props.updateNextQuestion(props.index);
        setDone(getDone);
    }
    return (
        <div>
            {
                !props.done?
                <button 
                    className="spbutton" 
                    onClick={updateQuestion} 
                    style={{...props.style,visibility:props.buttonEnabled?"visible":"hidden"}}>{props.index}
                </button>
                :
                <div style={props.style}>
                {done?<i style={{fontSize :"50px",color:"green"}} className="fa">&#xf058;</i>:
                      <i style={{fontSize :"50px",color:"red"}} className="fa">&#xf00d;</i>}
                </div>
            }
                <Question 
                    nextQuestion = {updateNextQuestion} 
                    style={{visibility:props.questionVisible?"visible":"hidden"}}
                    id = {props.index}
                    closeQuestion = {updateQuestion}
                    updateScore = {props.updateScore}
                />              
        </div>
    );
}


export default Button;