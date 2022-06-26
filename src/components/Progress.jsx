import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Input from './Input';

import ResetButton from './ResetButton';

const ProgressBlock = styled.div`
  display: block;
`;

const CheckBoxArea = styled.div`
  position: relative;
  width: 900px;
  height: 12px;
  background-color: #ecdcdc5f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;

  label {
    cursor: pointer;
    display: block;
    background-color: #ffffff60;
    padding: 10px 14px;
  }

  .ball {
    position: absolute;
    left: -40px;

    &.move1 {
      left: 40px;
    }
    &.move2 {
      left: 225px;
    }
    &.move3 {
      left: 410px;
    }
    &.move4 {
      left: 580px;
    }
    &.move5 {
      left: 760px;
    }
  }

  .flag {
    position: absolute;
    top: -80px;
    right: -80px;
  }
`;

const InputArea = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;

  input {
    text-align: center;
    background-color: #ffffff30;
    padding: 12px 0;
    border: none;
    color: #fff;
    font-size: 16px;
  }

  h3 {
    text-align: center;
  }
`;

const Progress = () => {
  const localGoals = localStorage.getItem('goals');
  const goalValue = localGoals ? JSON.parse(localGoals) : ['', '', '', '', ''];
  const writtenArr = goalValue.map((item, i) => (item ? true : false));
  const writtenValue = localGoals
    ? writtenArr
    : [false, false, false, false, false];

  const localDone = localStorage.getItem('goal-done');
  const doneValue = localDone
    ? JSON.parse(localDone)
    : [false, false, false, false, false];

  const src = [
    '/img/ball/basicBall.png',
    '/img/ball/smileBall.png',
    '/img/ball/winkBall.png',
    '/img/ball/heartBall.png',
    '/img/ball/trophyBall.png',
  ];

  const [written, setWritten] = useState(writtenValue);
  const [goals, setGoals] = useState(goalValue);
  const [done, setDone] = useState(doneValue);
  const [imgSrc, setImgSrc] = useState(src[0]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const index = +e.target.id;
    const boolArr = [
      ...written.slice(0, index),
      true,
      ...written.slice(index + 1),
    ];
    console.log(index, boolArr);
    setWritten(boolArr);
    //  written을 true로
  };

  const onChangeInput = (e) => {
    const index = +e.target.id[1];
    const goalsArr = [
      ...goals.slice(0, index),
      e.target.value,
      ...goals.slice(index + 1),
    ];
    console.log(goalsArr);
    setGoals(goalsArr);
  };

  const editGoals = (e) => {
    const index = +e.target.id[1];
    const changedArr = [
      ...written.slice(0, index),
      false,
      ...written.slice(index + 1),
    ];
    setWritten(changedArr);
  };

  const moveBall = (e) => {
    const index = +e.target.innerText;
    const doneArr = [...done.slice(0, index), true, ...done.slice(index + 1)];
    console.log(index, doneArr);
    setDone(doneArr);
    setImgSrc(src[index]);
    // Temp (수정 예정)
    const ball = document.querySelector('.ball');
    ball.classList.add(`move${index + 1}`);
  };

  const resetGoals = () => {
    setGoals(['', '', '', '', '']);
    setWritten([false, false, false, false, false]);
    setDone([false, false, false, false, false]);
  };

  // localStorage
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem('goal-done', JSON.stringify(done));
  }, [done]);

  return (
    <ProgressBlock>
      <CheckBoxArea>
        {[1, 2, 3, 4, 5].map((item, i) => (
          <>
            <input
              type="checkbox"
              name="goal"
              id={'goal' + i}
              className="hidden"
              key={`c${i}`}
            />
            <label htmlFor={`#goal${i}`} onClick={moveBall} key={`l${i}`}>
              {i}
            </label>
          </>
        ))}
        <img src={imgSrc} alt="basicBall" width="90" className="ball" />
        <img src="/img/flag.png" alt="goal" width="120" className="flag" />
      </CheckBoxArea>
      <InputArea>
        {goals.map((goal, i) => (
          <form onSubmit={onSubmitForm} key={`f${i}`} id={i}>
            <>
              {!written[i] && (
                <input
                  value={goal}
                  id={`i${i}`}
                  onChange={onChangeInput}
                  key={`i${i}`}
                />
              )}
            </>
            {written[i] === true && (
              <h3 id={`t${i}`} key={`t${i}`} onDoubleClick={editGoals}>
                {goal}
              </h3>
            )}
          </form>
        ))}
      </InputArea>
      <ResetButton resetGoals={resetGoals} />
    </ProgressBlock>
  );
};

export default Progress;
