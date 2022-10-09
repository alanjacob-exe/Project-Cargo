import { useState, useEffect } from "react";
import { geolocated } from "react-geolocated";


const CurrentLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation Not Supported,",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  
  return location;
};

export default CurrentLocation;
