import React from "react";
import data from "./file.json";
import { useState, useEffect } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import p_manjeri from "./p-Manjeri.json";

export default function SimulationTest(props) {
  var cursor = 0;
  var cursor1 = 45;
  var man_pmn = 0;
  var man_pmn1 = 6;

  ///////////////////////     Perinthalmanna - Malappuram     ////////////////
  useEffect(() => {
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
      if (cursor1 === 199) {
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

  ///////////////////    Threestar Bus databse   ///////////////////////

  const Threestars = async (i) => {
    const Route = data.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Threestars==" + "i:  " + i + "route: " + Route[i]);

    // try {
    //   await setDoc(doc(db, "buses", "Threestars", "location", "Threestars"), {
    //     location: Route[i],
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  ///////////////////    Merelal Bus databse   ///////////////////////

  const Merelal = async (i) => {
    const Route = data.resourceSets[0].resources[0].routePath.line.coordinates;
    // console.log(Route.length);
    console.log("from merelal" + "i:" + i + "route:" + Route[i]);
    // try {
    //   await setDoc(doc(db, "buses", "Merelal", "location", "Merelal"), {
    //     location: Route[i],
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  ////////////////////////////////////////   Manjeri - Perinthalmanna    ///////////////

  useEffect(() => {
    Aradhana(man_pmn);
    // Merelal(cursor1);

    const interval = setInterval(() => {
      if (man_pmn === 240) {
        man_pmn = 0;
        Aradhana(man_pmn);
        Jazza(man_pmn1);

        return;
      }
      if (man_pmn1 === 199) {
        man_pmn1 = 0;
        Aradhana(man_pmn);
        Jazza(man_pmn1);

        return;
      }

      man_pmn += 1;
      man_pmn1 += 1;

      Aradhana(man_pmn);
      Jazza(man_pmn1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const Aradhana = async (i) => {
    const Route =
      p_manjeri.resourceSets[0].resources[0].routePath.line.coordinates;
    // console.log(Route.length);
    console.log("from aradhana" + "i:" + i + "route:" + Route[i]);
    // try {
    //   await setDoc(doc(db, "buses", "Aradhana", "location", "Aradhana"), {
    //     location: Route[i],
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const Jazza = async (i) => {
    const Route =
      p_manjeri.resourceSets[0].resources[0].routePath.line.coordinates;
    // console.log(Route.length);
    console.log("from Jazza" + "i:" + i + "route:" + Route[i]);
    // try {
    //   await setDoc(doc(db, "buses", "Jazza", "location", "Jazza"), {
    //     location: Route[i],
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };


  

  return (
    <>
      <div>
        <h1>Simulation Test</h1>
      </div>
    </>
  );
}
