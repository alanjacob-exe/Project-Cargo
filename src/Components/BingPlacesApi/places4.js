import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export function Places4(location) {
  useEffect(() => {
    fetchData()
      .then((data) => {
        if (
          data.resourceSets &&
          data.resourceSets.length > 0 &&
          data.resourceSets[0].resources &&
          data.resourceSets[0].resources.length > 0
        ) {
          var firstResult = data.resourceSets[0].resources[0];
          var latitude = firstResult.point.coordinates[0];
          var longitude = firstResult.point.coordinates[1];
          console.log(latitude, longitude);
          // console.log("coordinates are" + [latitude,longitude]);
          // return coordinates
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  const baseURL =
    "https://dev.virtualearth.net/REST/v1/Locations?q=aluva&key=AkZCq_Islhah9akzIeF4n7sG0nOiw3MRjNYDx3FK9-mI16gbmjGvBe3RP8QYD4N2";
  const baseURL1 = "https://dev.virtualearth.net/REST/v1/Locations?q=";
  const baseURL2 = "&key=";

  const key = process.env.REACT_APP_BING_KEY;
  console.log("pos inside places4= " + location);
  


  const fetchData = async (pos) => {
    console.log("pos insise" + pos);
    const response = await fetch(`${baseURL1}${pos}${baseURL2}${key}`);
    console.log(`${baseURL1}${pos}${baseURL2}${key}`)
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  

  return <></>;
}

export default Places4;
