import React from "react";
import { MapContainer, TileLayer, Marker,Polyline, Popup } from "react-leaflet";
// import Marker from 'react-leaflet-animated-marker';

export function TransportMap(position) {
  const polyline = position.pointers
  const limeOptions = { color: "blue" };
//   console.log("mapsource in tmaps"+position.mapsource)

  return (
    <MapContainer center={[10.9984717, 76.1401113]} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
        url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2"
      />
      <Marker position={position.location1} />
      <Marker position={position.location2} />
      <Polyline pathOptions={limeOptions} positions={polyline} />

    </MapContainer>
  );
}
