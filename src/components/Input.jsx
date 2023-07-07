import React, { useState, useContext, useEffect, useRef } from "react";
import { StyledInput } from "./styles/Input.styled";
import GlobalContext from "../context/GlobalProvider";

export default function Input() {
  const [country, setCountry] = useState("");
  const { setGuessedCountries, guessedCountries, countriesList } =
    useContext(GlobalContext);
  const [showOutline, setShowOutline] = useState(false);

  useEffect(() => {
    const words = country.split(" ");
    const titleCaseWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    const titledCountry = titleCaseWords.join(" ");
    if (
      countriesList.includes(titledCountry) &&
      !guessedCountries.includes(titledCountry)
    ) {
      setGuessedCountries([...guessedCountries, titledCountry]);
      setCountry("");
    }
  }, [country]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setShowOutline(true);
    }
    setTimeout(() => {
      setShowOutline(false);
    }, 200);
  }

  useEffect(() => {
    console.log(showOutline);
  }, [showOutline]);

  return (
    <StyledInput onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="inputBar">Enter country names</label>
      <input
        type="text"
        id="inputBar"
        value={country}
        placeholder="Enter a country name"
        onChange={(e) => setCountry(e.target.value)}
        onKeyDown={handleKeyDown}
        className={showOutline ? "outline" : ""}
      />
    </StyledInput>
  );
}
