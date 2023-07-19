import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import {
  StartButton,
  PauseButton,
  FinishButton,
} from "./styles/TimeControlButtons.styled";

import GlobalContext from "../context/GlobalProvider";

export default function TimeControlButtons({ setShowConfirmation }) {
  const { paused, setPaused, limitedTime } = useContext(GlobalContext);

  return (
    <>
      {paused && limitedTime ? (
        <StartButton aria-label="start game">
          <FontAwesomeIcon icon={faPlay} onClick={() => setPaused(false)} />
        </StartButton>
      ) : limitedTime ? (
        <PauseButton aria-label="pause game">
          <FontAwesomeIcon icon={faPause} onClick={() => setPaused(true)} />
        </PauseButton>
      ) : null}
      <FinishButton aria-label="finish game">
        <FontAwesomeIcon
          icon={faFlagCheckered}
          onClick={() => setShowConfirmation(true)}
        />
      </FinishButton>
    </>
  );
}
