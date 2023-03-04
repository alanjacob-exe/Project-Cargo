import React from "react";
import data from "./file.json";
import { useState, useEffect } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default function SimulationTest(props) {
  var cursor = 0;
  var cursor1 = 45;
  const [currentTrack, setCurrentTrack] = useState({});
  const [dummyTrack, setdummyTrack] = useState({});
  var dataStory = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    setCurrentTrack(cursor);
    setdummyTrack(cursor1);
    Threestars(cursor);
    Merelal(cursor1);

    const interval = setInterval(() => {
      if (cursor === 199) {
        cursor = 0;
        // console.log(cursor)

        // Threestars(cursor);
        Merelal(cursor1);

        return;
      }
      if (cursor1 ===199) {
        cursor1 = 0;

        // Threestars(cursor);
        Merelal(cursor1);

        return;
      }

      cursor += 1;
      cursor1 += 1;

      // Threestars(cursor);
      Merelal(cursor1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // console.log("current track:"+currentTrack);
  // console.log("dummy track:"+dummyTrack);

  useEffect(() => {
    const selectedBus = localStorage.getItem("busid");
  }, []);
  const selectedBus = localStorage.getItem("busid");

  const Threestars = async (i) => {
    const Route = data.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Threestars==" +"i:  "+i+"route: " +Route[i]);

    try {
      await setDoc(doc(db, "buses", "Threestars", "location", "Threestars"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  const Merelal = async (i) => {
    const Route = data.resourceSets[0].resources[0].routePath.line.coordinates;
    // console.log(Route.length);
    console.log("from merelal" +"i:"+i+"route:" +Route[i]);
    try {
      await setDoc(doc(db, "buses", "Merelal", "location", "Merelal"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h1>Simulation Test</h1>
      </div>
    </>
  );
}
