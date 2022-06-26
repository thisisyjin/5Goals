import { useState } from 'react';
import styled from 'styled-components';

const TimerBlock = styled.div`
  width: 100%;
  text-align: center;
  color: #faff00;
  margin-bottom: 160px;
`;

const Timer = () => {
  const [timer, setTimer] = useState('00:00:00');

  setInterval(() => {
    const untilToday = new Date(new Date().setHours(23, 59, 59));
    const limit = new Date(
      untilToday.setHours(
        untilToday.getHours() - new Date().getHours(),
        untilToday.getMinutes() - new Date().getMinutes(),
        untilToday.getSeconds() - new Date().getSeconds()
      )
    );
    const hour = limit.getHours().toString().padStart(2, '0');
    const min = limit.getMinutes().toString().padStart(2, '0');
    const sec = limit.getSeconds().toString().padStart(2, '0');

    setTimer(`${hour}:${min}:${sec}`);
  }, 1000);

  return (
    <TimerBlock>
      <h2>until {timer}</h2>
    </TimerBlock>
  );
};
export default Timer;
