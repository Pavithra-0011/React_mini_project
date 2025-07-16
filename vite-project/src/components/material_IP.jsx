import React from 'react'
import { TextField, InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Input() {
  return (
    <>
    <TextField id="outlined-basic"
     placeholder='Search By Job Title Role' 
     disableUnderline
     slotProps={{
            input: {
              startAdornment: <InputAdornment position="start"><SearchOutlinedIcon/></InputAdornment>,
            },
            style: {
          border: 'none',
        },
          }}
          
      sx={{width: '25ch', border: 'none', '& fieldset': { border: 'none'}}}
    
     />

    </>
  )
}

export default Input