import React, {useState} from 'react';
import Button from './Button';
import pos from './positions';
import './AppNitro.css';
// const[Score , setScore] = useState(0);
function App () {
  /////////////////////////////////////////////////////////////////////////////////////
  console.log (pos);
  const [buttonList, updateButtonList] = useState ([
    {
      buttonEnabled: true,
      questionVisible: false,
      index: 0,
      key: 0,
      done: false,
      style: pos[0].style,
    },
    {
      buttonEnabled: false,
      questionVisible: false,
      index: 1,
      key: 1,
      done: false,
      style: pos[1].style,
    },
    {
      buttonEnabled: false,
      questionVisible: false,
      index: 2,
      key: 2,
      done: false,
      style: pos[2].style,
    },
    {
      buttonEnabled: false,
      questionVisible: false,
      index: 3,
      key: 3,
      done: false,
      style: pos[3].style,
    },
    {
      buttonEnabled: false,
      questionVisible: false,
      index: 4,
      key: 4,
      done: false,
      style: pos[4].style,
    },
    {
      buttonEnabled: false,
      questionVisible: false,
      index: 5,
      key: 5,
      done: false,
      style: pos[5].style,
    },
    {
      buttonEnabled: false,
      questionVisible: false,
      index: 6,
      key: 6,
      done: false,
      style: pos[6].style,
    },
    // {
    //     buttonEnabled : false,
    //     questionVisible: false,
    //     index: 7,
    //     key: 7,
    //     done: false,
    //     style: pos[7].style
    // },
    // {
    //     buttonEnabled : false,
    //     questionVisible: false,
    //     index: 3,
    //     key: 3,
    //     done: false,
    //     style: pos[8].style
    // }
  ]);
  ////////////////////////////////////////////////////////////////////////////////////////
  const [Score, setScore] = useState (0);
  function setButtonList (curIndex = 0) {
    var nextIndex = curIndex + 1;
    var newButtonList = [...buttonList];
    for (let i = 0; i < newButtonList.length; i++) {
      newButtonList[i].buttonEnabled = false;
    }
    for (let i = 0; i <= curIndex; i++) {
      newButtonList[i].done = true;
    }
    if (nextIndex < newButtonList.length) {
      newButtonList[nextIndex].buttonEnabled = true;
    }
    updateButtonList (newButtonList);
  }
  function setQuestionList (curIndex) {
    var newButtonList = [...buttonList];
    for (let i = 0; i < newButtonList.length; i++) {
      if (i !== curIndex) newButtonList[i].questionVisible = false;
    }
    newButtonList[curIndex].questionVisible = !newButtonList[curIndex]
      .questionVisible;
    updateButtonList (newButtonList);
  }
  function changeScore (addition) {
    console.log ('wrong ans2!!');
    var newScore = Score + addition;
    setScore (newScore);
  }
  function gameOver () {
    alert (
      `Game Over Your Final Score Was ${Score}, Click on Finish button below to go back`
    );
  }

  return (
    <div className="main-body">
      <div className="score">
        Score:
        {' '}
        <div
          style={{
            color: Score >= 0 ? 'lightGreen' : 'red',
            display: 'inline-block',
            fontWeight: '1500',
          }}
        >
          {Score}
        </div>
      </div>
      {buttonList.map (element => {
        if (element.index === 6 && element.done === true)
          return <div>{gameOver ()} </div>;
        else
          return (
            <Button
              key={element.key}
              updateQuestion={setQuestionList}
              updateNextQuestion={setButtonList}
              updateScore={changeScore}
              index={element.index}
              style={element.style}
              done={element.done}
              questionVisible={element.questionVisible}
              buttonEnabled={element.buttonEnabled}
            />
          );
      })}
    </div>
  );
}

export default App;
