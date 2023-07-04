import { createContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [finished, setFinished] = useState(false);
  const [paused, setPaused] = useState(true);

  return (
    <GlobalContext.Provider
      value={{ finished, setFinished, paused, setPaused }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
