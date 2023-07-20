import React, { useContext } from "react";
import { StyledFinishedMessage } from "./styles/FinishedMessage.styled.jsx";
import GlobalContext from "../context/GlobalProvider.jsx";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FinishedMessage() {
  const { guessedCountries, countriesList, setFinished, setGuessedCountries } =
    useContext(GlobalContext);

  const numOfGuessedCountries = guessedCountries.length;
  const numOfAllCountries = countriesList.length;
  const allGuessed = numOfGuessedCountries === numOfAllCountries;
  return (
    <StyledFinishedMessage>
      <div className="flex">
        <h2>Finished!</h2>
        <p>
          {allGuessed
            ? `You guessed all ${numOfAllCountries} countries`
            : `You guessed ${numOfGuessedCountries} out of ${numOfAllCountries}
          countries.`}
        </p>
      </div>
      <button
        onClick={() => {
          setFinished(false);
          setGuessedCountries([]);
        }}
        aria-label="new game"
      >
        <FontAwesomeIcon icon={faRotateLeft} />
        {allGuessed ? "Try to repeat your score" : "Try to get a better score"}
      </button>
    </StyledFinishedMessage>
  );
}
