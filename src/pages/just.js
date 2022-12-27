import React from "react";
import "./just.css";
import file from "../file.json";
export default function Radius(props) {
  const data = file;
  // console.log("length of data:"+data.features.length)
  // console.log(data.features[2].geometry.coordinates[0])
  var coor = [10.976051, 76.225449];
  var latitude = 10.976051;
  var longitude = 76.225449;

  var r_earth = 6378;
  var pi = Math.PI;
  var new_latitude = ToNorthPosition(coor);
  var newNorth = [coor[1], new_latitude[0]];
  var newSouth = [coor[1], new_latitude[1]];
  var newEast = [new_latitude[2], coor[0]];
  var newWest = [new_latitude[3], coor[0]];

  console.log("north" + newNorth);
  console.log("south" + newSouth[1]);

  console.log("East" + newEast);
  console.log("West" + newWest);

  function ToNorthPosition(coordinate) {
    var North = coordinate[0] + (1 / r_earth) * (180 / pi);
    var South = coordinate[0] - (1 / r_earth) * (180 / pi);
    var East =
      coordinate[1] +
      ((1 / r_earth) * (180 / pi)) / Math.cos((coordinate[0] * pi) / 180);
    var west =
      coordinate[1] -
      ((1 / r_earth) * (180 / pi)) / Math.cos((coordinate[0] * pi) / 180);

    // console.log("South 1kms is"+South);

    // console.log("north 1kms is"+North);
    // console.log("East 1kms is"+East);
    // console.log("West 1kms is"+west);
    return [North, South, East, west];
  }
  // var meters=1
  // var coef=(meters/111.32)
  // var new_lat=(latitude+coef);
  // var new_long=((longitude/coef)/(Math.cos(latitude*0.01745)))

  // console.log(new_latitude + "new lat");
  // console.log("new long",+new_long);
  // var coordinates;
  // for(var i=0;i<30;i++)
  // {
  //     coordin
  //     console.log("coordinates"+i+"="+data.features[i].geometry.coordinates)
  // }
  var coordinates = [];
  var index = [];
  var index2 = [];

  ///////////////////////////         for finding coordinates north of southern limit       ///////////////////////////////
  // console.log("Upper than south:"+newSouth[1]+"   "+data.features[20].geometry.coordinates[1]);

  for (var i = 0; i < (data.features.length); i++) {
    if (data.features[i].geometry.coordinates[1] > newSouth[1]) {
      // console.log(
      //   "index=" + i + "=" + data.features[i].geometry.coordinates[1]
      // );
      index.push(i);
    }
  }

  ///////////////////////////         for finding coordinates south of northern limit       ///////////////////////////////
  console.log("less than north");

  for (i = 0; i < index.length; i++) {
    var value = index[i];
    // console.log(index[i])

    if (data.features[value].geometry.coordinates[1] < newNorth[1]) {
      // console.log(
      //   "index2=" + value + "=" + data.features[value].geometry.coordinates
      // );
      index2.push(value);
    }
  }
  // var last = index2.length - 1;
  // console.log("value of value" + index2[last]);

  //index2 contains index positions of the json data where the coordinates
  // are below the northern linit and greater than southern limit

  // console.log("index 2:" + index2);
  console.log("lwest" + newWest[0]);
  console.log("east" + newEast);

  var index3 = [];
  var index4 = [];

  ///////////////////////////         for finding coordinates east of western limit        ///////////////////////////////

  console.log("western"+newWest[0])

  for (i = 0; i < index2.length; i++) {
    var value = index2[i];

    if (data.features[value].geometry.coordinates[0] > newWest[0]) {
      // console.log(
      //   "index3=" + value + "=" + data.features[value].geometry.coordinates[1],
      //   data.features[value].geometry.coordinates[0]
      // );
      index3.push(value);
    }
  }
  //console.log(index3)

  ///////////////////////////         for finding coordinates west of eastern limit       ///////////////////////////////

  for (i = 0; i < index3.length; i++) {
    var value = index3[i];
    console.log(value)

    if (data.features[value].geometry.coordinates[0] < newEast[0]) {
      console.log(
        "index4=" + value + "=" + data.features[value].geometry.coordinates[1],data.features[value].geometry.coordinates[0]
      );
      index4.push(value);
    }
  }

  //   }
  // var coordinates;
  // for (i = 0; i < index.length; i++) {
  //   // console.log("index length:" + index.length);
  //   var value = index[i];
  //   // console.log("data["+value+"]"+data.features[value].geometry.coordinates[0]);
  //   console.log(
  //     "data[" + value + "]" + data.features[value].geometry.coordinates[1]
  //   );
  //   // console.log("newnorth:"+newNorth[0]);
  //   console.log("newnorth:" + newNorth[1]);

  //   if (data.features[value].geometry.coordinates[1] < newNorth[1]) {
  //     index2.push(value);
  //     console.log("below north:" + data.features[value].geometry.coordinates);
  //   }
  //   // console.log(value);

  //   // if (coordinates[i] < newNorth) {
  //   //
  // }
  console.log("index2  " + index2.length);

  // console.log("last=" + data.features[last].geometry.coordinates);

  return (
    <div>
      <h2>HAiii</h2>
      <div>{newWest}</div>

      <div>{data.features[52].properties["name"]}</div>
      <div>{data.features[2].geometry.coordinates}</div> 
      <div>{data.features[4].geometry.coordinates}</div>
    </div>
  );
}
