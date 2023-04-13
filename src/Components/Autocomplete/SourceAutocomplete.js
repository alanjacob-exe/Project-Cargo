import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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
    clearOnEscape={true}
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{}}
      getOptionLabel={getOptionLabel}
      // getOptionSelected={getOptionSelected}
      onChange={onChange}
      isOptionEqualToValue={isOptionEqualToValue}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Source"
          style={{  borderRadius: "12px" }}
        />
      )}
    />
  );
}
