import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

export default function DestinationComplete({
  onChange,
  options,
  getOptionLabel,
  getOptionSelected,
  isOptionEqualToValue,
}) {
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
          label="Destination"
          style={{ backgroundColor: "#fff", borderRadius: "12px" }}
        />
      )}
    />
  );
}
