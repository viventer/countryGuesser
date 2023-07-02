import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  StyledTimer,
  StartButton,
  PauseButton,
  FinishButton,
  NoLimitButton,
} from "./styles/Timer.styled.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faPause,
  faPlay,
  faStop,
  faStopwatch,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

export default function Timer() {
  const [paused, setPaused] = useState(true);
  const [countDown, setCountDown] = useState(30 * 60);
  const [timer, setTimer] = useState("30:00");

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setCountDown((prevCount) => prevCount - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [paused]);

  useEffect(() => {
    const formattedDate = moment.unix(countDown).format("mm:ss");
    setTimer(formattedDate);
  }, [countDown]);

  return (
    <StyledTimer>
      <time>{timer}</time>
      {paused ? (
        <StartButton>
          <FontAwesomeIcon icon={faPlay} onClick={() => setPaused(false)} />
        </StartButton>
      ) : (
        <PauseButton>
          <FontAwesomeIcon icon={faPause} onClick={() => setPaused(true)} />
        </PauseButton>
      )}
      <FinishButton>
        <FontAwesomeIcon icon={faStop} />
      </FinishButton>
      <NoLimitButton>
        <FontAwesomeIcon icon={faUnlock} />
        <p>disable time limit</p>
      </NoLimitButton>
    </StyledTimer>
  );
}
