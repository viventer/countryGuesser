import React, { useEffect, useContext, useState } from "react";
import GlobalContext from "../context/GlobalProvider";
import { StyledCounter } from "./styles/Counter.styled";

export default function Counter() {
  const { guessedCountries, countriesList, setFinished } =
    useContext(GlobalContext);
  const [numOfGuessedCountries, setNumOfGuessedCountries] = useState(
    guessedCountries.length
  );
  const numOfAllCountries = countriesList.length;

  useEffect(() => {
    setNumOfGuessedCountries(guessedCountries.length);
    if (numOfGuessedCountries === numOfAllCountries) {
      setFinished(true);
    }
  }, [guessedCountries]);

  return (
    <StyledCounter>
      <p>
        {numOfGuessedCountries} / {numOfAllCountries}
      </p>
    </StyledCounter>
  );
}
