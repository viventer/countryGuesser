import { createContext, useState } from "react";
import countriesListJson from "../data/countriesList.json";
import useLocalStorage from "../hooks/useLocalStorage";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [finished, setFinished] = useLocalStorage("finished", false);
  const [paused, setPaused] = useLocalStorage("paused", true);
  const [countriesList, setCountriesList] = useState(
    countriesListJson.countries
  );
  const [guessedCountries, setGuessedCountries] = useLocalStorage(
    "guessedCountries",
    []
  );

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
