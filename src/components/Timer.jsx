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
  faStopwatch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../context/GlobalProvider.jsx";
import { StyledConfirmationWindow } from "./styles/ConfirmationWindow.styled.jsx";
import FinishedMessage from "./FinishedMessage.jsx";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

export default function Timer() {
  const [countDown, setCountDown] = useLocalStorage("countdown", 30 * 60);
  const [timer, setTimer] = useLocalStorage("timer", "30:00");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const {
    paused,
    setPaused,
    finished,
    setFinished,
    limitedTime,
    setLimitedTime,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (!paused && limitedTime) {
      const interval = setInterval(() => {
        setCountDown((prevCount) => prevCount - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [paused, limitedTime, setCountDown]);

  useEffect(() => {
    if (limitedTime) {
      const formattedDate = moment.unix(countDown).format("mm:ss");
      setTimer(formattedDate);
    } else {
      setTimer("NO LIMIT");
    }
  }, [countDown, limitedTime, setTimer]);

  useEffect(() => {
    if (confirmed === true) {
      setFinished(true);
      setPaused(true);
      setShowConfirmation(false);
    }
  }, [confirmed, setFinished, setPaused]);

  return (
    <>
      {!finished ? (
        <StyledTimer>
          <time>{timer}</time>
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
            <NoLimitButton
              $limitedtime={limitedTime.toString()}
              onClick={() => {
                setLimitedTime(!limitedTime);
              }}
              aria-label={
                limitedTime ? "Disable time limit" : "Enable time limit"
              }
            >
              <FontAwesomeIcon icon={faStopwatch} />
              <p>{limitedTime ? "disable" : "enable"} time limit</p>
            </NoLimitButton>
          )}
        </StyledTimer>
      ) : (
        <FinishedMessage />
      )}
    </>
  );
}
