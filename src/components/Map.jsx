import React, { useState, useContext, useEffect } from "react";
import { GeoJSON, MapContainer } from "react-leaflet";
import { StyledMap } from "./styles/Map.styled";
import "leaflet/dist/leaflet.css";
import mapData from "../data/countriesGeojson.json";
import GlobalContext from "../context/GlobalProvider";
import { ThemeContext } from "styled-components";

export default function Map() {
  const { guessedCountries } = useContext(GlobalContext);
  const theme = useContext(ThemeContext);

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
      if (guessedCountries.includes(feature.properties.ADMIN)) {
        feature.properties.style = { fillColor: theme.colors.green };
      } else {
        feature.properties.style = { fillColor: theme.colors.default };
      }
    });
    setData(updatedData);
  }, [guessedCountries]);

  const styleFeature = (feature) => feature.properties.style;

  return (
    <StyledMap>
      <MapContainer
        zoom={2}
        center={[0, 0]}
        className="mapContainer"
        zoomControl={false}
      >
        <GeoJSON data={data} className="countries" style={styleFeature} />
      </MapContainer>
    </StyledMap>
  );
}
