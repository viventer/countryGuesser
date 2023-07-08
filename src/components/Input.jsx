import React, { useState, useContext, useEffect, useRef } from "react";
import { StyledInput } from "./styles/Input.styled";
import GlobalContext from "../context/GlobalProvider";

export default function Input() {
  const [country, setCountry] = useState("");
  const { setGuessedCountries, guessedCountries, countriesList } =
    useContext(GlobalContext);
  const [showRedOutline, setShowRedOutline] = useState(false);
  const [showGreenOutline, setShowGreenOutline] = useState(false);

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
      setShowGreenOutline(true);
      setTimeout(() => {
        setShowGreenOutline(false);
      }, 200);
      setCountry("");
    }
  }, [country]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setShowRedOutline(true);
    }
    setTimeout(() => {
      setShowRedOutline(false);
    }, 200);
  }

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
        className={
          showRedOutline ? "redOutline" : showGreenOutline ? "greenOutline" : ""
        }
      />
    </StyledInput>
  );
}
