import { Button } from "@mui/material";
import { React, useState, useRef } from "react";
import {
  MapContainer,
  Circle,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap
} from "react-leaflet";
import file from "../../file.json";
import Control from "react-leaflet-custom-control";
import { useMapEvents } from "react-leaflet";
import { Map, L } from "leaflet";
import { useEffect } from "react";

// function LocationMarker(location) {
//   const [position, setPosition] = useState([11.035224, 76.099321]);
//   const map = useMapEvents({
//     click() {
//       setPosition(mark);

//       map.flyTo(location, 12);
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>source</Popup>
//     </Marker>
//   );
// }
// const usetemp = [11.035224, 76.099321];

// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click() {
//       setPosition({ lat: 11.035224, lng: 76.099321 });
//       map.flyTo({ lat: 11.035224, lng: 76.099321 }, map.getZoom());
//     },
//   });
// }


function Test({ location }) {
  const map = useMap();
  if (location) map.flyTo(location, 12);

  return location ? (
    <Marker
      position={location}
      //ref={markerRef}
    >
      <Popup>You are here:</Popup>
    </Marker>
  ) : null;
}

function Test2({ location }) {
  const map = useMap();
  if (location) map.flyTo(location, 10);

  return location ? (
    <Marker
      position={location}
      //ref={markerRef}
    >
      <Popup>You are here:</Popup>
    </Marker>
  ) : null;
}

export function TransportMap(position) {
  const polyline = position.pointers;
  const blueOptions = { color: "blue" };
  const data = file;
  const bbox = position.bbox;
  console.log("from transport" + bbox);
  const bboxValues = [
    [bbox[0], bbox[1]],
    [bbox[2], bbox[3]],
  ];
  console.log("from transport" + bboxValues[0]);

  console.log("marker 1  " + position.location1);
  const marker1 = position.location1;
  const marker2 = position.location2;
  console.log("source......" + marker1);
  const [sourceChange, setsourceChange] = useState([11.035224, 76.099321]);
  const [map, setMap] = useState(null);



  // const SourceFlyTo = (fly) => {
  //   const map = useMapEvents({
  //     preclick() {

  //       map.flyTo(sourceChange, 12);
  //     },
  //   });
  //   return sourceChange === null ? null : (
  //     <Marker position={sourceChange}>
  //       <Popup>source</Popup>
  //     </Marker>
  //   );
  // };
  // useEffect(() => {
  //   setsourceChange(marker1)
  // }, [marker1])
  const sourceBusstops = nearbyBusstops(marker1);
  const destinationBusstops = nearbyBusstops(marker2);

  // import Marker from 'react-leaflet-animated-marker';

  // console.log("location 2 " + position.location2);
  // console.log("points"+polyline[2]);
  // console.log("Destination Busstops " + destinationBusstops);

  function nearbyBusstops(marker1) {
    // console.log("length of data:"+data.features.length)
    // console.log(data.features[2].geometry.coordinates[0])
    const data = file;

    var coor = marker1;

    var r_earth = 6378;
    var pi = Math.PI;
    var new_latitude = ToNorthPosition(coor);
    var newNorth = [coor[1], new_latitude[0]];
    var newSouth = [coor[1], new_latitude[1]];
    var newEast = [new_latitude[2], coor[0]];
    var newWest = [new_latitude[3], coor[0]];

    // console.log("north" + newNorth);
    // console.log("south" + newSouth[1]);

    // console.log("East" + newEast);
    // console.log("West" + newWest);

    function ToNorthPosition(coordinate) {
      var North = coordinate[0] + (1 / r_earth) * (180 / pi);
      var South = coordinate[0] - (1 / r_earth) * (180 / pi);
      var East =
        coordinate[1] +
        ((1 / r_earth) * (180 / pi)) / Math.cos((coordinate[0] * pi) / 180);
      var west =
        coordinate[1] -
        ((1 / r_earth) * (180 / pi)) / Math.cos((coordinate[0] * pi) / 180);

      // console.log("South 1kms is"+South))
      // console.log("north 1kms is"+North);
      // console.log("East 1kms is"+East);
      // console.log("West 1kms is"+west);
      return [North, South, East, west];
    }
    // var meters=1
    // var coef=(meters/111.32)
    // var new_lat=(latitude+coef);
    // var new_long=((longitude/coef)/(Math.cos(latitude*0.01745)))

    // console.log(new_latitude + "new lat");
    // console.log("new long",+new_long);
    // var coordinates;
    // for(var i=0;i<30;i++)
    // {
    //     coordin
    //     console.log("coordinates"+i+"="+data.features[i].geometry.coordinates)
    // }
    var coordinates = [];
    var index = [];
    var index2 = [];

    ///////////////////////////         for finding coordinates north of southern limit       ///////////////////////////////
    // console.log("Upper than south:"+newSouth[1]+"   "+data.features[20].geometry.coordinates[1]);

    for (var i = 0; i < data.features.length; i++) {
      if (data.features[i].geometry.coordinates[1] > newSouth[1]) {
        // console.log(
        //   "index=" + i + "=" + data.features[i].geometry.coordinates[1]
        // );
        index.push(i);
      }
    }

    ///////////////////////////         for finding coordinates south of northern limit       ///////////////////////////////
    // console.log("less than north");

    for (i = 0; i < index.length; i++) {
      var value = index[i];
      // console.log(index[i])

      if (data.features[value].geometry.coordinates[1] < newNorth[1]) {
        // console.log(
        //   "index2=" + value + "=" + data.features[value].geometry.coordinates
        // );
        index2.push(value);
      }
    }

    //index2 contains index positions of the json data where the coordinates
    // are below the northern linit and greater than southern limit

    // console.log("lwest" + newWest[0]);
    // console.log("east" + newEast);

    var index3 = [];
    var index4 = [];

    ///////////////////////////         for finding coordinates east of western limit        ///////////////////////////////

    // console.log("western" + newWest[0]);

    for (i = 0; i < index2.length; i++) {
      var value = index2[i];

      if (data.features[value].geometry.coordinates[0] > newWest[0]) {
        // console.log(
        //   "index3=" + value + "=" + data.features[value].geometry.coordinates[1],
        //   data.features[value].geometry.coordinates[0]
        // );
        index3.push(value);
      }
    }
    //console.log(index3)

    ///////////////////////////         for finding coordinates west of eastern limit       ///////////////////////////////

    for (i = 0; i < index3.length; i++) {
      var value = index3[i];
      // console.log(value)

      if (data.features[value].geometry.coordinates[0] < newEast[0]) {
        // console.log(
        //   "index4=" + value + "=" + data.features[value].geometry.coordinates[1],data.features[value].geometry.coordinates[0]
        // );
        index4.push(value);
      }
    }

    for (i = 0; i < index4.length; i++) {
      const value = index4[i];
      coordinates[i] = data.features[value].geometry.coordinates;
    }
    console.log(index4);
    return index4;
    // return coordinates[1];
  }
  var maarker = [];
  var maarker1 = [];

  for (var i = 0; i < sourceBusstops.length; i++) {
    var value = sourceBusstops[i];
    // console.log("list"+sourceBusstops[i])
    maarker.push(sourceBusstops[i]);
  }

  // for(var i=0;i<destinationBusstops.length;i++){
  //   var value=sourceBusstops[i];
  //   console.log("list"+destinationBusstops[i])
  //   maarker1.push([data.features[value].geometry.coordinates[1],data.features[value].geometry.coordinates[0]]);

  // }
  // console.log("maarker:"+maarker);

  // console.log("name:"+data.features[325].properties["name"]);

  // const indexelements=sourceBusstops.map((value)=> value*2)
  // console.log("double elements"+indexelements)

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const [isShown, setIsShown] = useState(false); //for source,destination markers
  const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];

  return (
    <MapContainer
      bounds={bboxValues}
      center={[11.035224, 76.099321]}
      zoom={11}
      zoomOffset={-1}
      whenCreated={setMap}    >
      <TileLayer
        attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
        url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2"
      ></TileLayer>
      <Control prepend position="topright">
        <Button
          variant="outlined"
          onClick={() => {
            handleClick();
          }}
        >
          Show Stops
        </Button>
      </Control>
      {isShown &&
        maarker.map((value) => (
          <Marker
            key={value}
            position={[
              data.features[value].geometry.coordinates[1],
              data.features[value].geometry.coordinates[0],
            ]}
          >
            <Popup>{data.features[value].properties["name"]}</Popup>
          </Marker>
        ))}
      {/* {maarker1.map((value) => (
        <Marker key={value} position={[data.features[value].geometry.coordinates[1],data.features[value].geometry.coordinates[0]]}>
          <Popup>{value}</Popup>
          </Marker>
      ))} */}
      <Test location={position.location1}/>
      <Test2 location={position.location2}/>
      <Polyline pathOptions={blueOptions} positions={polyline} />
    </MapContainer>
     
  );
}
