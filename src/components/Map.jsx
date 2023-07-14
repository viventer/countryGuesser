import React, { useState, useContext, useEffect } from "react";
import { GeoJSON, MapContainer, CircleMarker } from "react-leaflet";
import { StyledMap } from "./styles/Map.styled";
import "leaflet/dist/leaflet.css";
import mapData from "../data/countriesGeojson.json";
import GlobalContext from "../context/GlobalProvider";
import { ThemeContext } from "styled-components";

export default function Map() {
  const { guessedCountries, finished } = useContext(GlobalContext);
  const theme = useContext(ThemeContext);
  const smallCountries = [
    "andorra",
    "antigua and barbuda",
    "barbados",
    "brunei",
    "trinidad and tobago",
    "samoa",
    "luxembourg",
    "mauritius",
    "comoros",
    "kiribati",
    "bahrain",
    "dominica",
    "tonga",
    "singapore",
    "micronesia",
    "saint lucia",
    "palau",
    "seychelles",
    "saint vincent and the grenadines",
    "grenada",
    "malta",
    "maldives",
    "saint kitts and nevis",
    "marshall islands",
    "liechtenstein",
    "san marino",
    "tuvalu",
    "nauru",
    "monaco",
    "vatican",
  ];

  const [data, setData] = useState(() => {
    const cachedData = localStorage.getItem("cachedData");
    if (cachedData) {
      return JSON.parse(cachedData);
    } else {
      localStorage.setItem("cachedData", JSON.stringify(mapData));
      return mapData;
    }
  });

  useEffect(() => {
    const updatedData = { ...data };
    updatedData.features.forEach((feature) => {
      if (guessedCountries.includes(feature.properties.ADMIN.toLowerCase())) {
        feature.properties.style = { fillColor: theme.colors.green };
      } else if (finished) {
        feature.properties.style = { fillColor: theme.colors.red };
      } else {
        feature.properties.style = { fillColor: theme.colors.default };
      }
    });
    setData(updatedData);
  }, [guessedCountries, finished]);

  const styleFeature = (feature) => feature.properties.style;

  // nie działa
  function addDot(country, latlng) {
    if (smallCountries.includes(country.properties.ADMIN.toLowerCase())) {
      console.log(country.properties.ADMIN);
    }
  }

  return (
    <StyledMap>
      <MapContainer
        zoom={2}
        center={[0, 0]}
        className="mapContainer"
        zoomControl={false}
      >
        <GeoJSON
          data={data}
          className="countries"
          style={styleFeature}
          onEachFeature={addDot}
        />
      </MapContainer>
    </StyledMap>
  );
}
