import React from "react";
import BingMapsReact from "bingmaps-react";

function BingMap() {
  const pushPin = {
    center: {
      latitude: 11.056719,
      longitude: 76.096012,
    },
    options: {
      title: "IHRD Malappuram",
    },
  } 

  const pushPins = [pushPin];

  return (
    <BingMapsReact
      bingMapsKey={process.env.REACT_APP_BING_KEY}
      height="550px"
      mapOptions={{
        navigationBarMode: "square",
        enableHighDpi: "true",
      }}
      width="100vw"
      viewOptions={{
        center: { latitude: 11.056719, longitude: 76.096012 },
        mapTypeId: "road",
        zoom:16
      }}
      pushPins={pushPins}

    />
  );
}

export default BingMap;