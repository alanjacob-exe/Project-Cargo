import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect() {
  return (
<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={countries}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Source" />}
/>
  );
}

const countries = ['ALAPPUZHA','ADOOR','ADKATHBAIL','ADIVARAM','ADIMALI','ADICHIRA','AMBALAMKUNNU','ALUVA','ALTHARA','ALATHOOR','ALATHIYUR',
  
];