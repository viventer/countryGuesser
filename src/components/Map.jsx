import React, { useState, useContext, useEffect } from "react";
import { GeoJSON, MapContainer } from "react-leaflet";
import { StyledMap } from "./styles/Map.styled";
import "leaflet/dist/leaflet.css";
import mapData from "../data/countriesGeojson.json";
import GlobalContext from "../context/GlobalProvider";

export default function Map() {
  const { allCountries, setAllCountries } = useContext(GlobalContext);

  const [data, setData] = useState(() => {
    const cachedData = localStorage.getItem("cachedData");
    if (cachedData) {
      return JSON.parse(cachedData);
    } else {
      localStorage.setItem("cachedData", JSON.stringify(mapData));
      return mapData;
    }
  });

  return (
    <StyledMap>
      <MapContainer
        zoom={2}
        center={[0, 0]}
        className="mapContainer"
        zoomControl={false}
      >
        <GeoJSON data={data} className="countries" />
      </MapContainer>
    </StyledMap>
  );
}
