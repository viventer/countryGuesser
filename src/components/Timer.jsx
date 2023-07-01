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
  faStop,
  faStopwatch,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

export default function Timer() {
  return (
    <StyledTimer>
      <time>30:00</time>
      <StartButton>
        <FontAwesomeIcon icon={faFlagCheckered} />
      </StartButton>
      <PauseButton>
        <FontAwesomeIcon icon={faPause} />
      </PauseButton>
      <FinishButton>
        <FontAwesomeIcon icon={faStop} />
      </FinishButton>
      <NoLimitButton>
        <FontAwesomeIcon icon={faUnlock} />
      </NoLimitButton>
    </StyledTimer>
  );
}
