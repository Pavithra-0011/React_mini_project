import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const style = {
 width:'376px',
 height:'50px',
//  borderRadius:'100px',
 margin:'5px 0px',
 '& .MuiOutlinedInput-root': {
          borderRadius: '10px', 
        },
}
 
function Job_Input({placeholder, text}) {
  return (
    <>
     <Box>
     <Typography style={{fontFamily:'satoshi,sans-serif', fontWeight:'600', color:'#232222'}}>{text}</Typography>
     <TextField id="outlined-basic" 
     placeholder={placeholder}
     variant="outlined" 
     sx={style}
     />
     </Box>
    </>
  )
}

export default Job_Input