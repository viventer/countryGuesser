import React, { useEffect, useContext, useState } from "react";
import GlobalContext from "../context/GlobalProvider";
import { StyledCounter } from "./styles/Counter.styled";

export default function Counter() {
  const { guessedCountries, countriesList, finished } =
    useContext(GlobalContext);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(guessedCountries.length);
  }, [guessedCountries]);

  return (
    <StyledCounter>
      {!finished && (
        <p>
          {counter} / {countriesList.length}
        </p>
      )}
    </StyledCounter>
  );
}
