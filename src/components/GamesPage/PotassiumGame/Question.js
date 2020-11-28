import React, {useState} from 'react';
import './AppNitro.css';

function Question (props) {
  ///////////////////////////////////////////////////////////////////////////////////////////////
  const [ques, setQues] = useState ([
    {
      q: 'Which form of potassium is most commonly applied as fertilizer?',
      o1: 'Potassium Hydroxide',
      o2: 'Potassium Sulphate',
      o3: 'Potassium chloride',
      o4: 'Potassium iodide',
      ans: 3,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'What natural process is necessary to break down primary minerals to provide plant available forms of potassium?',
      o1: 'Adsorption',
      o2: 'Fixation',
      o3: 'Leaching',
      o4: 'Weathering',
      ans: 4,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'In what form is potassium mined from the ground?',
      o1: 'Apatite',
      o2: 'Flourite',
      o3: 'Gypsum',
      o4: 'Potash',
      ans: 4,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'What is the most reliable way to tell if a crop needs potassium added to the soil?',
      o1: 'Weather reports',
      o2: 'Soil test',
      o3: "Inspecting plants' leaves",
      o4: 'Water test',
      ans: 2,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'In what form it the potassium in the manure?',
      o1: 'K+',
      o2: 'K-',
      o3: 'Organic K',
      o4: 'Insoluble K',
      ans: 1,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'Harvesting crops removes potassium from the soil, but is essential in providing potassium for which of the following?',
      o1: 'Atmosphere',
      o2: 'Animals',
      o3: 'Soil',
      o4: 'Plants',
      ans: 2,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'Which process describes the entrapment of potassium ions in clay materials?',
      o1: 'Desorption',
      o2: 'Fixation',
      o3: 'Weathering',
      o4: 'Release',
      ans: 2,
      marked: -1,
      correctSubmission: false,
    },
  ]);
  ////////////////////////////////////////////////////////////////////////////////////////////////
  var ID = props.id;
  function mark (ID, opt) {
    var newQues = [...ques];
    if (!ques[ID].submitted) newQues[ID].marked = opt;
    setQues (newQues);
  }

  function check () {
    var newQues = [...ques];
    if (ques[ID].marked === ques[ID].ans) {
      props.updateScore (30);
      props.nextQuestion (true);
      newQues[ID].correctSubmission = true;
      Extra (ID);
    } else {
      if (!ques[ID].submitted) props.updateScore (-5);
    }
    newQues[ID].submitted = true;
    setQues (newQues);
  }
  function close () {
    if (ques[ID].submitted) {
      props.nextQuestion (false);
    } else {
      props.closeQuestion ();
    }
  }
  function Extra () {
    var message = '';
    var something = false;
    if (ques[ID].correctSubmission) {
      message = 'Correct';
      something = true;
    } else if (ques[ID].submitted) {
      message = 'Wrong!! [Correct Option: ' + ques[ID].ans + ']';
      something = true;
    }
    return <h3 className={something ? 'message' : ''}>{message}</h3>;
  }
  return (
    <div className="question3" style={props.style}>
      <div className="bgHead">
        <div className="quesionHead3">{ques[props.id].q}</div>
      </div>
      <div className="block">
        <div
          className="Option3"
          onClick={() => mark (ID, 1)}
          style={{
            backgroundImage: ques[ID].marked === 1 ? 'none' : '',
          }}
        >
          {ques[ID].o1}
        </div>
        <div
          className="Option3"
          onClick={() => mark (ID, 2)}
          style={{
            backgroundImage: ques[ID].marked === 2 ? 'none' : '',
          }}
        >
          {ques[ID].o2}
        </div>
      </div>
      <div className="block">
        <div
          className="Option3"
          onClick={() => mark (ID, 3)}
          style={{
            backgroundImage: ques[ID].marked === 3 ? 'none' : '',
          }}
        >
          {ques[ID].o3}
        </div>
        <div
          className="Option3"
          onClick={() => mark (ID, 4)}
          style={{
            backgroundImage: ques[ID].marked === 4 ? 'none' : '',
          }}
        >
          {ques[ID].o4}
        </div>
      </div>
      <div className="buttons">
        <button
          type="submit"
          onClick={() => check ()}
          style={{
            cursor: ques[ID].submitted || ques[ID].marked === -1
              ? 'no-drop'
              : '    ',
            width: '500px',
            backgroundColor: 'limegreen',
            fontWeight: 'bold',
            fontSize: 'x-large',
          }}
          disabled={ques[ID].submitted || ques[ID].marked === -1}
          className={ques[ID].correctSubmission ? 'disabledButton' : ''}
        >
          Submit
        </button>
        <button
          type="close"
          onClick={() => close ()}
          style={{
            width: '500px',
            backgroundColor: 'crimson',
            fontWeight: 'bold',
            fontSize: 'x-large',
          }}
        >
          Close
        </button>
      </div>
      <Extra />
    </div>
  );
}

export {Question};
