import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Map from "./components/Map";
import GlobalStyles from "./components/styles/GlobalStyles";
import GlobalContext from "./context/GlobalProvider";
import CountriesTable from "./components/CountriesTable";
import FinishedMessage from "./components/FinishedMessage";

function App() {
  const { finished } = useContext(GlobalContext);

  const theme = {
    colors: {
      mainBackground: "#222222",
      headerAndSelection: "#007599",
      red: "#f27650",
      green: "#90E571",
      yellow: "#f8e25e",
      defaultCountry: "#ACACAC",
      elementsBackground: "#494949",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <main>
          {!finished ? (
            <div className="sticky">
              <div className="flex">
                <Timer />
                <Counter />
              </div>
              <Input />
            </div>
          ) : (
            <FinishedMessage />
          )}
          <Map />
          <CountriesTable />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
