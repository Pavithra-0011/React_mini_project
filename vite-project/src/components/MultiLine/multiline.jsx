import React from 'react'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const style = {
 width:'790px',
 fontSize:'10px',
 '& .MuiOutlinedInput-root': {
          borderRadius: '20px', 
        },
}

function MultilineTextFields({placeholder}) {
  return (
    <>
     <Typography style={{fontFamily:'satoshi, sans-serif', fontWeight:'600'}}>Job Description</Typography>
     <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder={placeholder}
          style={style}
        />
    </>
  )
}

export default MultilineTextFields