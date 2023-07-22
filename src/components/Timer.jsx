import React, { useEffect, useState, useContext } from "react";

import moment from "moment";

import { StyledTimer } from "./styles/Timer.styled.jsx";
import ConfirmationWindow from "./ConfirmationWindow.jsx";
import NoLimitButton from "./NoLimitButton.jsx";

import GlobalContext from "../context/GlobalProvider.jsx";
import useLocalStorage from "../hooks/useLocalStorage.jsx";
import TimeControlButtons from "./TimeControlButtons.jsx";

export default function Timer() {
  const [countDown, setCountDown, resetCountDown] = useLocalStorage(
    "countDown",
    1800
  );
  // const [countDown, setCountDown] = useState(30 * 60);
  const [timer, setTimer] = useLocalStorage("timer", "30:00");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { paused, setPaused, setFinished, limitedTime, setLimitedTime } =
    useContext(GlobalContext);

  let counterInterval;
  useEffect(() => {
    if (!paused && limitedTime) {
      counterInterval = setCounterInterval();

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
    if (countDown <= 0 && limitedTime) {
      finishGame();
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
    setTimer("30:00");
    setLimitedTime(true);
    resetCountDown();
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
