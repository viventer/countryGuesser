import React, { useState, useContext, useEffect } from "react";

import { GeoJSON, MapContainer, CircleMarker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { ThemeContext } from "styled-components";
import { StyledMap } from "./styles/Map.styled";

import mapDataFromFile from "../data/countriesGeojson.json";
import smallCountriesData from "../data/smallCountries.json";

import GlobalContext from "../context/GlobalProvider";

import useLocalStorage from "../hooks/useLocalStorage";

export default function Map() {
  const { guessedCountries, finished } = useContext(GlobalContext);
  const theme = useContext(ThemeContext);

  const [circleMarkers, setCircleMarkers] = useState([]);
  const [mapData, setMapData] = useState(mapDataFromFile);

  const [smallCountries] = useLocalStorage(
    "small countries",
    JSON.stringify(smallCountriesData)
  );

  useEffect(() => {
    const updatedData = { ...mapData };
    updatedData.features.forEach((feature) => {
      setCountryFillColor(feature);
    });
    setMapData(updatedData);
  }, [guessedCountries, finished]);

  function setCountryFillColor(feature) {
    const countryName = getLowerCountryName(feature);
    const isGuessed = isCountryInGuessed(countryName);
    const fillColor = isGuessed
      ? theme.colors.green
      : finished
      ? theme.colors.red
      : theme.colors.default;
    feature.properties.style = { fillColor };
  }

  function isCountryInGuessed(countryName) {
    return guessedCountries.includes(countryName);
  }

  function getLowerCountryName(feature) {
    return feature.properties.ADMIN.toLowerCase();
  }

  useEffect(() => {
    const markers = [];
    mapData.features.forEach((feature) => {
      if (isSmallCountry(feature)) {
        const markerData = getMarkerData(feature);
        const marker = createCircleMarker(markerData);
        markers.push(marker);
      }
    });
    setCircleMarkers(markers);
  }, [mapData, guessedCountries]);

  function isSmallCountry(feature) {
    const countryName = getLowerCountryName(feature);
    return smallCountries.includes(countryName);
  }

  function createCircleMarker(markerData) {
    const { lat, lng, countryName, color } = markerData;
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
    return marker;
  }

  function getMarkerData(feature) {
    const center = L.geoJSON(feature).getBounds().getCenter();
    const { lat, lng } = center;
    const countryName = getLowerCountryName(feature);
    const isGuessed = isCountryInGuessed(countryName);
    const color = isGuessed
      ? theme.colors.green
      : finished
      ? theme.colors.red
      : theme.colors.yellow;
    return { lat, lng, countryName, color };
  }

  const styleFeature = (feature) => feature.properties.style;

  return (
    <StyledMap>
      <MapContainer
        zoom={2}
        center={[0, 0]}
        className="mapContainer"
        zoomControl={false}
      >
        <GeoJSON data={mapData} className="countries" style={styleFeature} />
        {circleMarkers}
      </MapContainer>
    </StyledMap>
  );
}
