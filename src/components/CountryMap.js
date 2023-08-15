import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countriesData from './countries.json'; 

const CountryMap = () => {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryColor, setCountryColors] = useState({});

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

  const onCountryClick = (event) =>{
    const clickedContryName = event.target.feature.properties.ADMIN;
    setSelectedCountry(clickedContryName)
  };

  const resetSelection = () => {
    setSelectedCountry(null);
  };

  return (
    <div>
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100vh' }} onClick={resetSelection}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={countriesData.features} style={countryStyle} onEachFeature={(feature, layer) => {
            layer.on({
              click: onCountryClick,
            });
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
