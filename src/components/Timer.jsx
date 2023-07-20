import React, { useEffect, useState, useContext } from "react";

import moment from "moment";

import { StyledTimer } from "./styles/Timer.styled.jsx";
import ConfirmationWindow from "./ConfirmationWindow.jsx";
import NoLimitButton from "./NoLimitButton.jsx";

import GlobalContext from "../context/GlobalProvider.jsx";
import useLocalStorage from "../hooks/useLocalStorage.jsx";
import TimeControlButtons from "./TimeControlButtons.jsx";

export default function Timer() {
  const [countDown, setCountDown] = useLocalStorage("countdown", 30 * 60);
  const [timer, setTimer] = useLocalStorage("timer", "30:00");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { paused, setPaused, setFinished, limitedTime, setLimitedTime } =
    useContext(GlobalContext);

  useEffect(() => {
    if (!paused && limitedTime) {
      const counterInterval = setCounterInterval();
      return () => {
        clearInterval(counterInterval);
      };
    }
  }, [paused, limitedTime, setCountDown]);

  function setCounterInterval() {
    const interval = setInterval(() => {
      setCountDown((prevCount) => prevCount - 1);
    }, 1000);
    return interval;
  }

  useEffect(() => {
    if (countDown <= 0) {
      setFinished(true);
    } else if (limitedTime) {
      const formattedDate = moment.unix(countDown).format("mm:ss");
      setTimer(formattedDate);
    } else {
      setTimer("NO LIMIT");
    }
  }, [countDown, limitedTime, setTimer]);

  function finishGame() {
    setFinished(true);
    setPaused(true);
    setShowConfirmation(false);
    setTimer("0:00");
    setLimitedTime(true);
    // Get countdown ready for a new game.
    setCountDown(30 * 60);
  }

  return (
    <StyledTimer>
      <time>{timer}</time>
      <TimeControlButtons setShowConfirmation={setShowConfirmation} />
      {showConfirmation ? (
        <ConfirmationWindow
          finishGame={finishGame}
          setShowConfirmation={setShowConfirmation}
        />
      ) : (
        <NoLimitButton />
      )}
    </StyledTimer>
  );
}
