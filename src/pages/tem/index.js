import React from "react";
import { useEffect, useState } from "react";

export default function Index(props) {
  const [seconds, setSeconds] = useState(0);
  const limit = 10;

  // useEffect(() => {
  //     const interval = setInterval(() => {
  //       setSeconds(seconds => seconds + 1);
  //     }, 1000);

  //     return () => clearInterval(interval);

  //   }, []);

  //   console.log(seconds)

  var counter = 0;

  var looper = setInterval(function () {
    counter++;
    console.log("Counter is: " + counter);

    if (counter >= 5) {
      clearInterval(looper);
    }
  }, 2000);





  return <></>;
}
