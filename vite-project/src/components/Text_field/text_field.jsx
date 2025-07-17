import React from 'react'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function TextFieldComponent({placeholder,text}) {
  return (
    <>
    <div style={{display:'flex', flexDirection:'column', margin:'11px 0px 3px 0px'}}>
     <Typography style={{fontFamily:'satoshi,sans-serif', fontWeight:600}}>Salary Range</Typography>
    <TextField id="outlined-basic" 
    type='number'
    variant="outlined" 
    sx={{margin:'5px 0px', width:'183px'}} 
    placeholder={`↑↓ ₹${placeholder}`}
    />
    </div>
    </>
  )
}

export default TextFieldComponent