import React from "react";
import { MapContainer, TileLayer,Marker, Popup } from "react-leaflet";
// import Marker from 'react-leaflet-animated-marker';


export function TransportMap(position) {
  return (
    <MapContainer center={[10.95590759312288, 76.22946062699094]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
        url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2"
      />
      <Marker position={position.location1} />
      <Marker position={position.location2} />
    </MapContainer>
  );
}
