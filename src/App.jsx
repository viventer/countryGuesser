import React from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Input from "./components/Input";
import Map from "./components/Map";
import CountriesList from "./components/CountriesList";
import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Timer />
      <Input />
      <Map />
      <CountriesList />
    </div>
  );
}

export default App;
