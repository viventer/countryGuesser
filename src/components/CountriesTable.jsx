import React, { useContext, useEffect, useState } from "react";
import { StyledCountriesTable } from "./styles/CountriesTable.styled";
import GlobalContext from "../context/GlobalProvider";
import { ThemeContext } from "styled-components";

export default function CountriesTable() {
  const { guessedCountries, countriesList } = useContext(GlobalContext);
  const [countriesDivs, setCountriesDivs] = useState();
  const theme = useContext(ThemeContext);

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
            ? countryNamesList[0]
            : ""}
        </div>
      ))
    );
    console.log(countriesList);
  }, [guessedCountries]);

  return <StyledCountriesTable>{countriesDivs}</StyledCountriesTable>;
}
