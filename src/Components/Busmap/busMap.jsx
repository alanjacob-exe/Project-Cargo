import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import "./busmap.css";

import AirplaneMarker from "../../simulation/tem/AirplaneMarker";


export default function BusMap({ Bus, busId }) {
  // const busNumber = bus?.busNumber;
  // console.log("from busmap" + busNumber);
  // console.log("from busmap bus" + bus);
  // const [Bus, setBus] = useState([11.027775, 76.099903]);
  // console.log("busssssssssss" + Bus);

  // useEffect(() => {
  //   const busNumber = bus.busNumber;
  //   console.log(busNumber);
  // }, [bus]);
  // // const [detach, setdetach] = useState(0);
  // const selectedBus = localStorage.getItem("busid");

  // const busTracker = async (busname) => {
  //   console.log("bus tracker" + busname);

  //   // if (detach===1){
  //   //   unsub.off();
  //   // }
  //   const docRef = doc(db, "buses", busname, "location", busname);

    //   const unsub = onSnapshot(docRef, (doc) => {
    //     setBus(doc.data().location);
    //     console.log(
    //       "current bus" + busname + "Current data: ",
    //       doc.data().location
    //     );
    //   });
    //   return unsub();
    //   // console.log("data is" + test.location);
    // };

  //   const unsub = onSnapshot(
  //     doc(db, "buses", busname, "location", busname),
  //     (doc) => {
  //       setBus(doc.data().location);
  //     }
  //   );
  // };

  // const unsubscribe = onSnapshot(
  //   doc(db, "buses", "Jazza", "location", "Jazza"),
  //   (doc) => {
  //     setBus(doc.data().location);
  //     console.log(
  //       "current bus" + busname + "Current data: ",
  //       doc.data().location
  //     );
  //   }
  // );

  // const unsub = onSnapshot(
  //   doc(db, "buses", busname, "location", busname),
  //   (doc) => {
  //     setBus(doc.data().location);
  //     console.log(
  //       "current bus" + busname + "Current data: ",
  //       doc.data().location
  //     );
  //     }
  //     );

  // const unsubscribe=onSnapshot(doc(db, "buses", busname, "location", busname),(  )=>{

  // });
  // useEffect(() => {
  //   busTracker(busNumber);
  // }, [bus]);

  // console.log("from busmanp"+Bus)

  return (
    <MapContainer
      center={[10.975958, 76.225454]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.thunderforest.com/">Transport Map</a> contributors'
        url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b27fc203562944ceb7363792b9e8c9d2"
      ></TileLayer>
      <AirplaneMarker data={Bus ?? {}} display="dummy" />
    </MapContainer>
  );
}
