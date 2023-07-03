import React, { useEffect, useState, useContext } from "react";
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
  faCheck,
  faFlagCheckered,
  faPause,
  faPlay,
  faStop,
  faStopwatch,
  faUnlock,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../context/GlobalProvider.jsx";
import { StyledConfirmationWindow } from "./styles/ConfirmationWindow.styled.jsx";

export default function Timer() {
  const [paused, setPaused] = useState(true);
  const [countDown, setCountDown] = useState(30 * 60);
  const [timer, setTimer] = useState("30:00");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const { finish, setFinish } = useContext(GlobalContext);

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

  useEffect(() => {
    setFinish(true);
    setPaused(true);
    setShowConfirmation(false);
  }, [confirmed]);

  return (
    <>
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
          <FontAwesomeIcon
            icon={faStop}
            onClick={() => setShowConfirmation(true)}
          />
        </FinishButton>
        {showConfirmation ? (
          <StyledConfirmationWindow>
            <h2>Are you sure you want to finish?</h2>
            <div>
              <button onClick={() => setConfirmed(true)}>
                <FontAwesomeIcon icon={faCheck} />
                <p>YES</p>
              </button>
              <button onClick={() => setShowConfirmation(false)}>
                <FontAwesomeIcon icon={faXmark} />
                <p>NO</p>
              </button>
            </div>
          </StyledConfirmationWindow>
        ) : (
          <NoLimitButton>
            <FontAwesomeIcon icon={faUnlock} />
            <p>disable time limit</p>
          </NoLimitButton>
        )}
      </StyledTimer>
    </>
  );
}
