import React from "react";
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
  return (
    <StyledTimer>
      <time>30:00</time>
      <StartButton>
        <FontAwesomeIcon icon={faPlay} />
      </StartButton>
      <PauseButton>
        <FontAwesomeIcon icon={faPause} />
      </PauseButton>
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
