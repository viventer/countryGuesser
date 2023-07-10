import React, { useState, useContext, useEffect, useRef } from "react";
import { StyledInput } from "./styles/Input.styled";
import GlobalContext from "../context/GlobalProvider";

export default function Input() {
  const [country, setCountry] = useState("");
  const { setGuessedCountries, guessedCountries, countriesList, paused } =
    useContext(GlobalContext);
  const [showRedOutline, setShowRedOutline] = useState(false);
  const [showGreenOutline, setShowGreenOutline] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    const lowerCountry = country.toLowerCase();
    if (
      countriesList.includes(lowerCountry) &&
      !guessedCountries.includes(lowerCountry)
    ) {
      setGuessedCountries([...guessedCountries, lowerCountry]);
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

  useEffect(() => {
    if (paused) {
      inputRef.current.disabled = true;
    } else {
      inputRef.current.disabled = false;
    }
  }, [paused]);

  return (
    <StyledInput onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="inputBar">
        {paused ? "Start the timer" : "Enter country names"}
      </label>
      <input
        ref={inputRef}
        type="text"
        id="inputBar"
        value={country}
        placeholder={paused ? "Start the timer" : "Enter a country name"}
        onChange={(e) => setCountry(e.target.value)}
        onKeyDown={handleKeyDown}
        className={
          showRedOutline ? "redOutline" : showGreenOutline ? "greenOutline" : ""
        }
        autoComplete="off"
      />
    </StyledInput>
  );
}
