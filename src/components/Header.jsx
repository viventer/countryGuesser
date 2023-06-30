import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <FontAwesomeIcon icon={faEarthEurope} />
      </div>
      <h1>Country Guesser</h1>
    </StyledHeader>
  );
}
