import React, { useState, useContext, useEffect, useRef } from "react";
import { StyledInput } from "./styles/Input.styled";
import GlobalContext from "../context/GlobalProvider";

export default function Input() {
  const [enteredCountryName, setEnteredCountryName] = useState("");
  const {
    setGuessedCountries,
    guessedCountries,
    countriesList,
    paused,
    limitedTime,
    finished,
  } = useContext(GlobalContext);
  const [showRedOutline, setShowRedOutline] = useState(false);
  const [showGreenOutline, setShowGreenOutline] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    const lowerCountryName = enteredCountryName.toLowerCase();
    for (const countryNames of countriesList) {
      const mainCountryName = countryNames[0];
      const isCorrect = countryNames.includes(lowerCountryName);
      const isAlreadyGuessed = guessedCountries.includes(mainCountryName);
      if (isCorrect && !isAlreadyGuessed) {
        handleCountryGuessed(mainCountryName);
      }
    }
  }, [enteredCountryName, countriesList, guessedCountries]);

  function handleCountryGuessed(countryName) {
    setGuessedCountries([...guessedCountries, countryName]);
    setEnteredCountryName("");
    setShowGreenOutline(true);
    setTimeout(() => {
      setShowGreenOutline(false);
    }, 200);
  }

  useEffect(() => {
    if (paused && limitedTime && !finished) {
      inputRef.current.disabled = true;
    } else if (!finished) {
      inputRef.current.disabled = false;
    }
  }, [paused, limitedTime, finished]);

  function handlePressedEnter() {
    setShowRedOutline(true);
    setTimeout(() => {
      setShowRedOutline(false);
    }, 200);
  }

  return (
    <StyledInput onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="inputBar">
        {paused ? "Start the timer" : "Enter country names"}
      </label>
      <input
        ref={inputRef}
        type="text"
        id="inputBar"
        value={enteredCountryName}
        placeholder={
          paused && limitedTime ? "Start the timer" : "Enter a country name"
        }
        onChange={(e) => setEnteredCountryName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handlePressedEnter();
        }}
        className={
          showRedOutline ? "redOutline" : showGreenOutline ? "greenOutline" : ""
        }
        autoComplete="off"
      />
    </StyledInput>
  );
}
