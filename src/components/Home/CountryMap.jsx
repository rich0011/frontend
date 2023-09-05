import React, { useState, useEffect, useRef, useContext } from 'react';
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import countriesData from './countries.json'; 
import { Context } from '../../Contexts/AppContext';

const CountryMap = () => {

  const { selectedCountry, setSelectedCountry } = useContext(Context);
  const [countryColor, setCountryColors] = useState({});
  const [mapInitialized, setMapInitialized] = useState(false); 
  const mapRef = useRef(null);

  useEffect(() => {
    const generateColors = () => {
      const colors = {};
      countriesData.features.forEach((featre) => {
        colors[featre.properties.ADMIN] = `#${Math.floor(Math.random() * 16777).toString(16)}`;
      });
      setCountryColors(colors)
    };
    generateColors();
  }, []);

  useEffect(() => {
    if (mapRef.current && mapInitialized) {
      const map = mapRef.current.leafletElement;

      if (selectedCountry) {
        const selectedFeature = countriesData.features.find(
          (feature) => feature.properties.ADMIN === selectedCountry
        );

        if (selectedFeature) {
          const selectedBounds = L.geoJSON(selectedFeature).getBounds();
          setMapInitialized(selectedBounds)
          map.fitBounds(selectedBounds);

        }
      } else {
        map.setView([0, 0], 3);
      }
    }
  }, [selectedCountry, mapInitialized]);

  const countryStyle = (feature) => {
    const isSelected = selectedCountry && selectedCountry === feature.properties.ADMIN;
    const boundaryColor = isSelected ? 'white' : '#f2e6ff';
    const fillColor = isSelected ? '#FF0000' : countryColor[feature.properties.ADMIN];
    return{
      fillColor: fillColor,
      color: boundaryColor,
      weight: isSelected ? 1 : 1,
      opacity: 0.1,
      fillOpacity: 0.6,
    };
  };


  const resetSelection = () => {
    setSelectedCountry(null);
  };

  return (
    <div>
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '73vh', width: '100%' }} onClick={resetSelection} 
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={countriesData.features} style={countryStyle}  onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.ADMIN) {
              layer.bindPopup(feature.properties.ADMIN);
            }
          }} />
    </MapContainer>
    <div>
      <h5>Selected Country: {selectedCountry || 'None'}</h5>
    </div>
    </div>
  );
};

export default CountryMap;
