import React, { useState } from "react";
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
        onChange={(e) => setCountry(e.target.value)}
      />
    </StyledInput>
  );
}
