import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";




// function AutocompleteOption(source){
//   // console.log(source.label)

//   return (source.label);
// }



export default function SourceComplete({
  onChange,
  options,
  getOptionLabel,
  getOptionSelected,
  isOptionEqualToValue,
}) {
  // setValue = (newValue) => {
  // console.log(newValue);}


  


  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{}}
      getOptionLabel={getOptionLabel}
      getOptionSelected={getOptionSelected}
      onChange={onChange}
      isOptionEqualToValue={isOptionEqualToValue}

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



