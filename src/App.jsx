import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Input from "./components/Input";
import Map from "./components/Map";
import CountriesList from "./components/CountriesList";
import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  const theme = {
    colors: {
      background: "#222222",
      elementsBackground: "#007599",
      red: "#f27650",
      green: "#90E571",
      yellow: "#f8e25e",
      default: "#ACACAC",
      other: "#00f2ff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <main>
          <Timer />
          <Input />
          <Map />
          <CountriesList />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
