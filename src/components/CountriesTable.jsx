import React, { useContext } from "react";
import { StyledCountriesTable } from "./styles/CountriesTable.styled";
import GlobalContext from "../context/GlobalProvider";

export default function CountriesTable() {
  const { guessedCountries, countriesList } = useContext(GlobalContext);

  return <StyledCountriesTable></StyledCountriesTable>;
}
