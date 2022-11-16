import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";




// function AutocompleteOption(source){
//   // console.log(source.label)

//   return (source.label);
// }



export default function SourceComplete() {
  // setValue = (newValue) => {
  // console.log(newValue);}
  const [source, setsource] = useState("");
  const [destination, setDestionation] = useState("");
  console.log(source.label);

  


  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, value) => option.label === value.label}
      onChange={(event, value) => setsource(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Source"
          style={{ backgroundColor: "#fff", borderRadius: "12px" }}
        />
      )}
    />
  );
}

const options = [
  { label: "Perinthalmanna", id: "1", location: "75.11,76.6666" },
  { label: "Manjeri", id: "3" },
  { label: "Kottakkal", id: "4" },
  { label: "Malappuram", id: "5" },
  { label: "Wandoor", id: "6" },
  { label: "Tirur", id: "7" },
  { label: "Ponnani", id: "8" },
  { label: "Vengar", id: "3" },
  { label: "Parappanangadi", id: "3" },
  { label: "Cherpulaserri", id: "3" },
  { label: "Nilambur", id: "3" },
  { label: "Kottayam", id: "3" },
  { label: "Areekode", id: "3" },
];

