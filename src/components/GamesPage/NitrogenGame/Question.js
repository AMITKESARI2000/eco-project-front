import React, {useState} from 'react';
import './AppNitro.css';

function Question (props) {
  ///////////////////////////////////////////////////////////////////////////////////////////////
  const [ques, setQues] = useState ([
    {
      q: 'Which of the following is NOT an example of Organic Matter?',
      o1: 'Animal Remains',
      o2: 'Plant residues',
      o3: 'Water',
      o4: 'Animal manure',
      ans: 3,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: "Atmospheric Nitrogen (N2) isn't directly usable by plants. Which type of Fixation doesn't help create an addition of Nitrogen to soil?",
      o1: 'Atmospheric Fixation',
      o2: 'Industrial Fixation',
      o3: 'Biological Fixation',
      o4: 'Mineral Fixation',
      ans: 4,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'What exactly does the Atmospheric Fixation help in creating?',
      o1: 'Nitrate',
      o2: 'Ammonium ',
      o3: 'Organic Matter',
      o4: 'Nitrous Oxide',
      ans: 2,
      marked: -1,
      correctSubmission: false,
      submitted: false,
    },
    {
      q: 'Which of the following results in Atmospheric Fixation?',
      o1: 'Rain',
      o2: 'Lightning',
      o3: 'Fire',
      o4: 'Thunder',
      ans: 2,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'Harvestable Product is essential in providing Nitrogen for which of the following?',
      o1: 'Soil',
      o2: 'Plants',
      o3: 'Atmosphere',
      o4: 'Animals',
      ans: 4,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'Through what process is Organic Matter turned into Ammonium NH4+?',
      o1: 'Immobilization',
      o2: 'Denitrification',
      o3: 'Nitrification',
      o4: 'Mineralization',
      ans: 4,
      marked: -1,
      correctSubmission: false,
      submitted: false,
    },
    {
      q: 'Ammonium NH4+ is NOT capable of which of the following?',
      o1: 'Immobilization',
      o2: 'Mineralization',
      o3: 'Nitrification',
      o4: 'Plant Uptake',
      ans: 2,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'What part do plant Residues play in the Nitrogen cycle?',
      o1: 'No Benefit provided',
      o2: 'Create Nitrous Oxide',
      o3: 'Source of Organic Matter',
      o4: 'Atmospheric Fixation',
      ans: 3,
      marked: -1,
      correctSubmission: false,
      submitted: false,
    },
    {
      q: 'Which of the following can be the best control when trying to minimize leaching? ',
      o1: 'Application Practices',
      o2: 'Decomposition',
      o3: 'Proximity to groundwater',
      o4: 'Soil type',
      ans: 1,
      marked: -1,
      correctSubmission: false,
      submitted: false,
    },
    {
      q: 'Which of the following does fertilizer provide to the plants?',
      o1: 'Ammonium',
      o2: 'Nitrate',
      o3: 'Nitrogen',
      o4: 'Nitrous Oxide',
      ans: 2,
      marked: -1,
      correctSubmission: false,
    },
    {
      q: 'Which of the following results in Atmospheric Fixation?',
      o1: 'Rain',
      o2: 'Lightning',
      o3: 'Fire',
      o4: 'Thunder',
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
    <div className="question1" style={props.style}>
      <div className="bgHead">
        <div className="quesionHead1">{ques[props.id].q}</div>
      </div>
      <div className="block">
        <div
          className="Option1"
          onClick={() => mark (ID, 1)}
          style={{backgroundImage: ques[ID].marked === 1 ? 'none' : ''}}
        >
          {ques[ID].o1}
        </div>
        <div
          className="Option1"
          onClick={() => mark (ID, 2)}
          style={{backgroundImage: ques[ID].marked === 2 ? 'none' : ''}}
        >
          {ques[ID].o2}
        </div>
      </div>
      <div className="block">
        <div
          className="Option1"
          onClick={() => mark (ID, 3)}
          style={{backgroundImage: ques[ID].marked === 3 ? 'none' : ''}}
        >
          {ques[ID].o3}
        </div>
        <div
          className="Option1"
          onClick={() => mark (ID, 4)}
          style={{backgroundImage: ques[ID].marked === 4 ? 'none' : ''}}
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
