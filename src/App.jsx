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
      incorrect: "#f07167",
      correct: "#67F071",
      default: "#ACACAC",
      pause: "#FED9B7",
      other: "#00AFB9",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Timer />
        <Input />
        <Map />
        <CountriesList />
      </div>
    </ThemeProvider>
  );
}

export default App;
