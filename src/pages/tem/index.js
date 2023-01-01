import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import AirplaneMarker from "./AirplaneMarker";
import data from "./file.json";
import { Button } from "bootstrap";
import "./styles.css"

let cursor = 0;
export default function Tracker(props) {
  var dataStory = data.resourceSets[0].resources[0].routePath.line.coordinates;

  const [latitude, setLatitude] = useState(10.975958);
  const [longitude, setLongitude] = useState(76.225454);
  const [status, setStatus] = useState(null);

  // const dataStory =  [
  //     [
  //       10.977522,
  //       76.228444
  //     ],
  //     [
  //       10.977603,
  //       76.228251
  //     ],
  //     [
  //       10.977669,
  //       76.228109
  //     ],
  //     [
  //       10.977103,
  //       76.227824
  //     ],
  //     [
  //       10.976645,
  //       76.227666
  //     ],
  //     [
  //       10.976234,
  //       76.227799
  //     ],
  //     [
  //       10.975461,
  //       76.22768
  //     ],
  //     [
  //       10.97548,
  //       76.227628
  //     ],
  //     [
  //       10.975628,
  //       76.227161
  //     ],
  //     [
  //       10.975732,
  //       76.226133
  //     ],
  //   ];

  const [currentTrack, setCurrentTrack] = useState({});

  useEffect(() => {
    setCurrentTrack(dataStory[cursor]);

    const interval = setInterval(() => {
      if (cursor === dataStory.length - 1) {
        cursor = 0;
        setCurrentTrack(dataStory[cursor]);
        return;
      }

      cursor += 1;
      setCurrentTrack(dataStory[cursor]);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

//   console.log([lat, lng]);
  return (
    <div className="basic">
      <button onClick={getLocation}>Get Location</button>
      <MapContainer
        style={{ height: "calc(100vh - 52px)" }}
        center={[10.975958, 76.225454]}
        zoom={17}
        minZoom={5}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
          url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2"
        />
        <AirplaneMarker data={currentTrack ?? {}} />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
}
