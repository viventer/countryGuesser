import React, { useContext } from "react";
import { StyledFinishedMessage } from "./styles/FinishedMessage.styled.jsx";
import GlobalContext from "../context/GlobalProvider.jsx";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FinishedMessage() {
  const { guessedCountries, countriesList, setFinished, setGuessedCountries } =
    useContext(GlobalContext);
  return (
    <StyledFinishedMessage>
      <div className="flex">
        <h2>Finished!</h2>
        <p>
          {guessedCountries.length !== countriesList.length
            ? `You guessed ${guessedCountries.length} out of ${countriesList.length}
          countries.`
            : `You guessed all ${countriesList.length} countries`}
        </p>
      </div>
      <button
        onClick={() => {
          setFinished(false);
          setGuessedCountries([]);
        }}
      >
        <FontAwesomeIcon icon={faRotateLeft} />
        {guessedCountries.length !== countriesList.length
          ? "Try to get a better score"
          : "Try to repeat your score"}
      </button>
    </StyledFinishedMessage>
  );
}
