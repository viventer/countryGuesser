import React, { useState, useContext, useEffect } from "react";
import { GeoJSON, MapContainer, CircleMarker } from "react-leaflet";
import L, { circleMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { StyledMap } from "./styles/Map.styled";
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

  const [circleMarkers, setCircleMarkers] = useState([]);

  useEffect(() => {
    const updatedData = { ...data };
    updatedData.features.forEach((feature) => {
      const countryInGuessed = guessedCountries.includes(
        feature.properties.ADMIN.toLowerCase()
      );
      const fillColor = countryInGuessed
        ? theme.colors.green
        : finished
        ? theme.colors.red
        : theme.colors.default;
      feature.properties.style = { fillColor };
    });
    setData(updatedData);
  }, [guessedCountries, finished]);

  useEffect(() => {
    const markers = [];
    data.features.forEach((feature) => {
      const countryName = feature.properties.ADMIN.toLowerCase();
      if (smallCountries.includes(countryName)) {
        const center = L.geoJSON(feature).getBounds().getCenter();
        const { lat, lng } = center;
        const isGuessed = guessedCountries.includes(countryName);
        const color = isGuessed
          ? theme.colors.green
          : finished
          ? theme.colors.red
          : theme.colors.yellow;
        const marker = (
          <CircleMarker
            center={[lat, lng]}
            key={countryName}
            radius={4}
            pathOptions={{
              fillOpacity: 1,
              color: color,
              weight: 0,
            }}
          />
        );
        markers.push(marker);
      }
    });
    setCircleMarkers(markers);
  }, [data, guessedCountries]);

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
        {circleMarkers}
      </MapContainer>
    </StyledMap>
  );
}
