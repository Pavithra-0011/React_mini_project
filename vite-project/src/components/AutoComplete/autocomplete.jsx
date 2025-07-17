import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';


const style = {
    margin: '7px 0px',
    width: 380,
    '& .MuiOutlinedInput-root': {
          borderRadius: '10px', 
        },
}

export default function ComboBox({options, text, placeholder}) {
  return (
    <>
    <Box sx={{ mt: 1 }}>
     <Typography style={{fontFamily:'satoshi,sans-serif', fontWeight:'600', color:'#232222'}}>{text}</Typography>
    <Autocomplete
      disablePortal
      options={options}
      sx={style}
      renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
      />
      </Box>
      </>
  );
}
