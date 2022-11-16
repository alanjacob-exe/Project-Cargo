import axios from "axios";
import React from "react";
import "../../data.json"
import { useState } from "react";

const baseURL = "https://dev.virtualearth.net/REST/v1/Locations?q=aluva&key=AkZCq_Islhah9akzIeF4n7sG0nOiw3MRjNYDx3FK9-mI16gbmjGvBe3RP8QYD4N2";
const baseURL1="https://dev.virtualearth.net/REST/v1/Locations?q="
const baseURL2="&key="

const key=process.env.REACT_APP_BING_KEY;



export default function Places(location) {
  // const [output,setoutput]=useState("")
    console.log(location)



fetch(`${baseURL1}${location}${baseURL2}${key}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(JSON.stringify(data));
    
    if(data.resourceSets && data.resourceSets.length > 0 && data.resourceSets[0].resources && data.resourceSets[0].resources.length > 0){
        var firstResult =  data.resourceSets[0].resources[0];
        var latitude = firstResult.point.coordinates[0];
        

        var longitude = firstResult.point.coordinates[1];
        console.log(latitude,longitude)
        var x=[latitude,longitude];
        
        // return ([latitude,longitude]);

        // setcoordinates([latitude,longitude]);
        
        //Do something with this data.
    }   
  })
  


  return (<></>);
}