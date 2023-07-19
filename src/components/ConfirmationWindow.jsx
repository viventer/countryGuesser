import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { StyledConfirmationWindow } from "./styles/ConfirmationWindow.styled";

export default function ConfirmationWindow({
  finishGame,
  setShowConfirmation,
}) {
  return (
    <StyledConfirmationWindow>
      <h2>Are you sure you want to finish?</h2>
      <div>
        <button onClick={() => finishGame()}>
          <FontAwesomeIcon icon={faCheck} />
          <p>YES</p>
        </button>
        <button onClick={() => setShowConfirmation(false)}>
          <FontAwesomeIcon icon={faXmark} />
          <p>NO</p>
        </button>
      </div>
    </StyledConfirmationWindow>
  );
}
