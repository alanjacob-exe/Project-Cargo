import { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import L from "leaflet";

import airplaneIcon from "../../Photos/busIcon.png";
import { Popup } from "react-leaflet";

const icon = L.icon({
  iconSize: [45, 45],
  popupAnchor: [2, -20],
  iconUrl: airplaneIcon
});


export default function AirplaneMarker({ data,display }) {
  const  lat  = data[0];
  const  lng  = data[1];

  // console.log([lat,lng])
  const [prevPos, setPrevPos] = useState([lat, lng]);

  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng, prevPos]);

  return (
    <LeafletTrackingMarker
      icon={icon}
      position={[lat, lng]}
      previousPosition={prevPos}
      duration={1000}
    >
      <Popup>{display}</Popup>
    </LeafletTrackingMarker>
  );
}
