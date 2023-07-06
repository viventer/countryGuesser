import { createContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [finished, setFinished] = useState(false);
  const [paused, setPaused] = useState(true);
  const [allCountries, setAllCountries] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        finished,
        setFinished,
        paused,
        setPaused,
        allCountries,
        setAllCountries,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
