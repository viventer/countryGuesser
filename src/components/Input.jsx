import React, { useState, useContext } from "react";
import { StyledInput } from "./styles/Input.styled";

export default function Input() {
  const [country, setCountry] = useState("");

  return (
    <StyledInput onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="inputBar">Enter country names</label>
      <input
        type="text"
        id="inputBar"
        value={country}
        placeholder="Enter a country name"
        onChange={(e) => setCountry(e.target.value)}
      />
    </StyledInput>
  );
}
