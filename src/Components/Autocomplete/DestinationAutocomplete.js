import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function DestinationComplete({
  onChange,
  options,
  getOptionLabel,
  getOptionSelected,
  isOptionEqualToValue,
}) {
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
          label="Destination"
          style={{ borderRadius: "12px" }}
        />
      )}
    />
  );
}
