import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Map from "./components/Map";
import GlobalStyles from "./components/styles/GlobalStyles";
import { GlobalProvider } from "./context/GlobalProvider";
import CountriesTable from "./components/CountriesTable";

function App() {
  const theme = {
    colors: {
      background: "#222222",
      elementsBackground: "#007599",
      red: "#f27650",
      green: "#90E571",
      yellow: "#f8e25e",
      default: "#ACACAC",
      darkGray: "#494949",
      other: "#00f2ff",
    },
  };
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles />
          <Header />
          <main>
            <div className="flex">
              <Timer />
              <Counter />
            </div>
            <Input />
            <Map />
            <CountriesTable />
          </main>
        </div>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
