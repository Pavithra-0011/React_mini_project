import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';

const style = {
  width: 385,
  margin: '10px 0px',
  
}

export default function BasicDatePicker() {
  return (
    <>
    <div style={{margin:'8px 0px'}}>
    <Typography style={{fontFamily:'satoshi,sans-serif', fontWeight:600}}>Application Deadline</Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" sx={{width:385,margin:'10px 0px','& .MuiOutlinedInput-root': {
          borderRadius: '20px', 
        },}}/>
      </DemoContainer>
    </LocalizationProvider>
    </div>
    </>
  );
}

