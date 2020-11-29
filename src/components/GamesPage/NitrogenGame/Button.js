import React, {useState} from 'react';
import question, {Question} from './Question';
import './AppNitro.css';

function Button (props) {
  const [done, setDone] = useState (false);

  function updateQuestion () {
    props.updateQuestion (props.index);
  }
  function updateNextQuestion (getDone) {
    props.updateQuestion (props.index);
    props.updateNextQuestion (props.index);
    setDone (getDone);
  }

  return (
    <div>
      {!props.done
        ? <button
            className="spbutton1"
            onClick={updateQuestion}
            style={{
              ...props.style,
              visibility: props.buttonEnabled ? 'visible' : 'hidden',
            }}
          >
            {props.index}
          </button>
        : <div style={props.style}>
            {done
              ? <div
                  className="spbutton1"
                  style={{backgroundColor: '#09ff00'}}
                />
              : <div
                  className="spbutton1"
                  style={{backgroundColor: 'burlywood'}}
                />}
          </div>}
      <Question
        nextQuestion={updateNextQuestion}
        style={{visibility: props.questionVisible ? 'visible' : 'hidden'}}
        id={props.index}
        closeQuestion={updateQuestion}
        updateScore={props.updateScore}
      />
    </div>
  );
}

export default Button;
