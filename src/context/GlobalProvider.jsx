import { createContext, useState } from "react";
import countriesListJson from "../data/countriesList.json";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [finished, setFinished] = useState(false);
  const [paused, setPaused] = useState(true);
  const [countriesList, setCountriesList] = useState(
    countriesListJson.countries
  );
  const [guessedCountries, setGuessedCountries] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        finished,
        setFinished,
        paused,
        setPaused,
        countriesList,
        setCountriesList,
        guessedCountries,
        setGuessedCountries,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
