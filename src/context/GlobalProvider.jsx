import { createContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [finish, setFinish] = useState(false);

  return (
    <GlobalContext.Provider value={{ finish, setFinish }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
