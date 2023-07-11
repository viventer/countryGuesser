import React, { useContext, useEffect, useState } from "react";
import { StyledCountriesTable } from "./styles/CountriesTable.styled";
import GlobalContext from "../context/GlobalProvider";
import { ThemeContext } from "styled-components";

export default function CountriesTable() {
  const { guessedCountries, countriesList } = useContext(GlobalContext);
  const [countriesDivs, setCountriesDivs] = useState();
  const theme = useContext(ThemeContext);

  function formatCountryName(name) {
    const formattedName = name
      .split(" ")
      .map((word) => {
        if (word.length < 3 || word === "and") {
          return word;
        }
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
    return formattedName;
  }

  useEffect(() => {
    setCountriesDivs(
      countriesList.map((countryNamesList) => (
        <div
          key={countryNamesList[0]}
          style={{
            borderColor: guessedCountries.includes(countryNamesList[0])
              ? theme.colors.green
              : theme.colors.darkGray,
            color: theme.colors.green,
          }}
        >
          {guessedCountries.includes(countryNamesList[0])
            ? formatCountryName(countryNamesList[0])
            : ""}
        </div>
      ))
    );
  }, [guessedCountries]);

  return <StyledCountriesTable>{countriesDivs}</StyledCountriesTable>;
}
