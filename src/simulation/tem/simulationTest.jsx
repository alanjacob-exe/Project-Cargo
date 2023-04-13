import React from "react";
import { useEffect } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import PM_MJ from "./BusRoutes/PM-MJ.json";
import KK_ML from "./BusRoutes/KK_ML.json";
import KK_TIR from "./BusRoutes/KK_TIR.json";
import PM_KK from "./BusRoutes/PM_KK.json";
import PM_ML from "./BusRoutes/PM_ML.json";
import PM_TIR from "./BusRoutes/PM_TIR.json";
import MJ_PM from "./BusRoutes/MJ_PM.json"
import MJ_KK from "./BusRoutes/MJ_KK.json"


export default function SimulationTest(props) {
  var cursor = 0;
  var cursor1 = 45;

  ////////////////////////// Perinthalmanna - Manjeri      ////////////////
  useEffect(() => {
    Parambans(cursor);

    const interval = setInterval(() => {
      if (cursor === 199) {
        cursor = 0;

        Parambans(cursor);

        return;
      }
      if (cursor1 === 199) {
        cursor1 = 0;

        Parambans(cursor);

        return;
      }

      cursor += 1;

      Parambans(cursor);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const Parambans = async (i) => {
    const Route = PM_MJ.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Paramban==" + "i:  " + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "KL101111", "location", "KL101111"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  /////////////////////////////////Kottakkal - Malappuram    ////////////////////
  useEffect(() => {
    Walter(lailaCursor);

    const interval = setInterval(() => {
      if (cursor === 115) {
        cursor = 0;

        Walter(cursor);

        return;
      }
      if (cursor1 === 115) {
        cursor1 = 0;

        Walter(cursor);

        return;
      }

      cursor += 1;

      Walter(cursor);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const Walter = async (i) => {
    const Route = KK_ML.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Walter==" + "i:  " + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "KL108923", "location", "KL108923"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  //////////////////// Kottakkal - Tirur    /////////
  var lailaCursor = 0;

  useEffect(() => {
    Laila(lailaCursor);

    const interval = setInterval(() => {
      if (lailaCursor === 115) {
        lailaCursor = 0;

        Laila(lailaCursor);

        return;
      }
      if (cursor1 === 115) {
        cursor1 = 0;

        Laila(lailaCursor);

        return;
      }

      lailaCursor += 1;

      Laila(lailaCursor);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const Laila = async (i) => {
    const Route =
      KK_TIR.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Laila==" + "i:  " + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "KL102978", "location", "KL102978"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  //////////////////perinthalmanna kottakkal /////////////////
  var jcursor = 0;
  var jcursor1 = 70;

  const Javaz = async (i) => {
    const Route = PM_KK.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Javaz==" + "i:  " + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "KL 10 1453", "location", "KL 10 1453"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  const Charlie = async (i) => {
    const Route = PM_KK.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Charlie==" + "i:  " + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "KL53E1185", "location", "KL53E1185"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Javaz(jcursor);
    Charlie(jcursor1);

    const interval = setInterval(() => {
      if (jcursor === 240) {
        jcursor = 0;

        Javaz(jcursor);

        return;
      }
      if (jcursor1 === 240) {
        jcursor1 = 0;

        Charlie(jcursor1);

        return;
      }

      jcursor += 1;
      jcursor1 += 1;

      Javaz(jcursor);
      Charlie(jcursor1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  ////////////////////////////////     Perinthalmanna Malappuram//////////

  var icursor = 0;

  const Ichayanz = async (i) => {
    const Route = PM_ML.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Ichayanz==" + "i" + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "KL 10 2431", "location", "KL 10 2431"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Ichayanz(icursor);

    const interval = setInterval(() => {
      if (icursor === 197) {
        icursor = 0;

        Ichayanz(icursor);

        return;
      }

      icursor += 1;

      Ichayanz(icursor);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  //////////////////////////////    Perinthalmann Tirur//////////////////

  var mahancur = 0;

  const Mahan = async (i) => {
    const Route = PM_TIR.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Mahan==" + "i" + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "KL 10 3333", "location", "KL 10 3333"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Mahan(mahancur);

    const interval = setInterval(() => {
      if (mahancur === 392) {
        mahancur = 0;

        Mahan(mahancur);

        return;
      }

      mahancur += 1;

      Mahan(mahancur);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);



  /////////////////////////////////manjeriperinthalmanna////////////


  var selenacur = 0;

  const Selena = async (i) => {
    const Route = MJ_PM.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Selena==" + "i" + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "Selena", "location", "Selena"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Selena(selenacur);

    const interval = setInterval(() => {
      if (selenacur === 244) {
        selenacur = 0;

        Selena(selenacur);

        return;
      }

      selenacur += 1;

      Selena(selenacur);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);




  //////////////////////////        manjeri kottakkal ///////////////

  
  var shinycur = 0;

  const Shiny = async (i) => {
    const Route = MJ_KK.resourceSets[0].resources[0].routePath.line.coordinates;
    // const coordinates=props
    console.log("from Shiny==" + "i" + i + "route: " + Route[i]);

    try {
      await setDoc(doc(db, "buses", "KL105678", "location", "KL105678"), {
        location: Route[i],
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Shiny(shinycur);

    const interval = setInterval(() => {
      if (shinycur === 255) {
        shinycur = 0;

        Shiny(shinycur);

        return;
      }

      shinycur += 1;

      Shiny(shinycur);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);






































  // ///////////////////////     Perinthalmanna - Malappuram     ////////////////
  // useEffect(() => {
  //   // Parambans(cursor);
  //   // Merelal(cursor1);

  //   const interval = setInterval(() => {
  //     if (cursor === 199) {
  //       cursor = 0;
  //       // console.log(cursor)

  //       // Threestars(cursor);
  //       Merelal(cursor1);

  //       return;
  //     }
  //     if (cursor1 === 199) {
  //       cursor1 = 0;

  //       // Threestars(cursor);
  //       Merelal(cursor1);

  //       return;
  //     }

  //     cursor += 1;
  //     cursor1 += 1;

  //     // Threestars(cursor);
  //     Merelal(cursor1);
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // // console.log("current track:"+currentTrack);
  // // console.log("dummy track:"+dummyTrack);

  // ///////////////////    Threestar Bus databse   ///////////////////////

  // const Threestars = async (i) => {
  //   const Route = data.resourceSets[0].resources[0].routePath.line.coordinates;
  //   // const coordinates=props
  //   console.log("from Threestars==" + "i:  " + i + "route: " + Route[i]);

  //   try {
  //     await setDoc(doc(db, "buses", "Threestars", "location", "Threestars"), {
  //       location: Route[i],
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // ///////////////////    Merelal Bus databse   ///////////////////////

  // const Merelal = async (i) => {
  //   const Route = data.resourceSets[0].resources[0].routePath.line.coordinates;
  //   // console.log(Route.length);
  //   console.log("from merelal" + "i:" + i + "route:" + Route[i]);
  //   try {
  //     await setDoc(doc(db, "buses", "Merelal", "location", "Merelal"), {
  //       location: Route[i],
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // ////////////////////////////////////////   Manjeri - Perinthalmanna    ///////////////

  // useEffect(() => {
  //   Aradhana(man_pmn);
  //   Jazza(man_pmn1);

  //   const interval = setInterval(() => {
  //     if (man_pmn === 240) {
  //       man_pmn = 0;
  //       Aradhana(man_pmn);
  //       Jazza(man_pmn1);

  //       return;
  //     }
  //     if (man_pmn1 === 199) {
  //       man_pmn1 = 0;
  //       Aradhana(man_pmn);
  //       Jazza(man_pmn1);

  //       return;
  //     }

  //     man_pmn += 1;
  //     man_pmn1 += 1;

  //     Aradhana(man_pmn);
  //     Jazza(man_pmn1);
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // const Aradhana = async (i) => {
  //   const Route =
  //     p_manjeri.resourceSets[0].resources[0].routePath.line.coordinates;
  //   // console.log(Route.length);
  //   console.log("from aradhana" + "i:" + i + "route:" + Route[i]);
  //   try {
  //     await setDoc(doc(db, "buses", "Aradhana", "location", "Aradhana"), {
  //       location: Route[i],
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const Jazza = async (i) => {
  //   const Route =
  //     p_manjeri.resourceSets[0].resources[0].routePath.line.coordinates;
  //   // console.log(Route.length);
  //   console.log("from Jazza" + "i:" + i + "route:" + Route[i]);
  //   try {
  //     await setDoc(doc(db, "buses", "Jazza", "location", "Jazza"), {
  //       location: Route[i],
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
      <div>
        <h1>Simulation Test</h1>
      </div>
    </>
  );
}
