import { point } from "leaflet";
import React, { useState, useEffect } from "react";

export default function Country(location) {
  const [countryItems, initCountry] = useState([]);
  const [coordinates, setcoordinates] = useState("");
  const [pointers,Setpointers]=useState("")

  const baseURL =
    "https://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=perinthalmanna&wp.1=11.041799,%2076.080109&optmz=distance&routeAttributes=routePath&output=json&key=AkZCq_Islhah9akzIeF4n7sG0nOiw3MRjNYDx3FK9-mI16gbmjGvBe3RP8QYD4N2";
  const pointurl1 = "https://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=";
  const pointurl2 = "&wp.1=";
  const pointurl3 = "&optmz=distance&routeAttributes=routePath&output=json&key=";
  const key = process.env.REACT_APP_BING_KEY;

  const points = async () => {
    const location1 = "perinthalmanna";
    const location2 = "manjeri";
    const response = await fetch(
      `${pointurl1}${location1}${pointurl2}${location2}${pointurl3}${key}`
    );

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    points()
      .then((data) => {
        if (
          data.resourceSets &&
          data.resourceSets.length >0
        ) {
            console.log(data.resourceSets[0].resources[0].routePath.line.coordinates)
            Setpointers(data.resourceSets[0].resources[0].routePath.line.coordinates)
            return pointers
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  var value = countryItems[0];
  console.log("pointers"+pointers[0]);
  return <></>;
}
