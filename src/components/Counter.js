import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 40vh;
  font-size: 3rem;
  color: hsl(345, 95%, 68%);
`;

const finalDate = new Date(2022, 5, 26).getTime();

export default function Counter(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const updateTime = () => {
    const time = new Date().getTime();
    let finalCountdown = finalDate - time;

    let currentDays = Math.floor(finalCountdown / (1000 * 60 * 60 * 24));
    let currentHours = Math.floor(
      (finalCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let currentMinutes = Math.floor(
      (finalCountdown % (1000 * 60 * 60)) / (1000 * 60)
    );
    let currentSeconds = Math.floor((finalCountdown % (1000 * 60)) / 1000);

    // console.log(finalCountdown.getDay());

    if (currentDays !== days) {
      setDays(currentDays);
    }

    if (currentHours !== hours) {
      setHours(currentHours);
    }

    if (currentMinutes !== minutes) {
      setMinutes(currentMinutes);
    }

    if (currentSeconds !== seconds) {
      setSeconds(currentSeconds);
    }
  };

  useEffect(() => {
    const timerId = setInterval(updateTime, 100);
    return function clean() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Container>
      {days < 10 ? '0' + days : days} : {hours < 10 ? '0' + hours : hours} :{' '}
      {minutes < 10 ? '0' + minutes : minutes} : {seconds}
    </Container>
  );
}
