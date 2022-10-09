import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function DestinationComplete() {
  return (
<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={countries}
  sx={{ width: 200}}
  renderInput={(params) => <TextField {...params} label="Destination" style={{backgroundColor:'#fff',borderRadius:"12px",marginTop:'6px'}} />}
/>
  );
}

const countries = ['ALAPPUZHA','ADOOR','ADKATHBAIL','ADIVARAM','ADIMALI','ADICHIRA','AMBALAMKUNNU','ALUVA','ALTHARA','ALATHOOR','ALATHIYUR',
  
];