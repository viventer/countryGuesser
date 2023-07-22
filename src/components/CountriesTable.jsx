import React, { useContext, useEffect, useState } from "react";
import { StyledCountriesTable } from "./styles/CountriesTable.styled";
import GlobalContext from "../context/GlobalProvider";
import { ThemeContext } from "styled-components";

export default function CountriesTable() {
  const { guessedCountries, countriesList, finished } =
    useContext(GlobalContext);
  const theme = useContext(ThemeContext);

  const [countriesFields, setCountriesFields] = useState();

  useEffect(() => {
    const countriesFields = createCountriesFields();
    setCountriesFields(countriesFields);
  }, [guessedCountries, finished]);

  function createCountriesFields() {
    const fields = countriesList.map((countryNamesList) => {
      const mainCountryName = countryNamesList[0];
      return (
        <div
          key={mainCountryName}
          style={getCountryFieldStyles(mainCountryName)}
        >
          {canShowCountryName(mainCountryName)
            ? formatCountryName(mainCountryName)
            : ""}
        </div>
      );
    });
    return fields;
  }

  function getCountryFieldStyles(mainCountryName) {
    return {
      borderColor: guessedCountries.includes(mainCountryName)
        ? theme.colors.green
        : theme.colors.elementsBackground,
      color: guessedCountries.includes(mainCountryName)
        ? theme.colors.green
        : theme.colors.red,
    };
  }

  function canShowCountryName(mainCountryName) {
    return guessedCountries.includes(mainCountryName) || finished;
  }

  return <StyledCountriesTable>{countriesFields}</StyledCountriesTable>;
}

function formatCountryName(name) {
  const notToCapitalize = ["of", "and", "the"];
  const words_list = name.split(" ");
  const formattedName = words_list
    .map((word) => {
      if (notToCapitalize.includes(word)) {
        return word;
      }
      return capitalize(word);
    })
    .join(" ");
  return formattedName;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
