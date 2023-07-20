import React, { useContext } from "react";

import { StyledNoLimitButton } from "./styles/NoLimitButton.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../context/GlobalProvider";

export default function NoLimitButton() {
  const { limitedTime, setLimitedTime } = useContext(GlobalContext);

  return (
    <StyledNoLimitButton
      $limitedtime={limitedTime.toString()}
      onClick={() => {
        setLimitedTime(!limitedTime);
      }}
      aria-label={limitedTime ? "Disable time limit" : "Enable time limit"}
    >
      <FontAwesomeIcon icon={faStopwatch} />
      <p>{limitedTime ? "disable" : "enable"} time limit</p>
    </StyledNoLimitButton>
  );
}
