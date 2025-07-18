import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
// import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';



export default function ComboBox({ options, text, placeholder, icon, style, onChange }) {
  return (
    <Box sx={{ mt: 1 }}>
      <Typography style={{ fontFamily: 'satoshi,sans-serif', fontWeight: '600', color: '#232222' }}>
        {text}
      </Typography>
      <Autocomplete
        disablePortal
        options={options}
        sx={style}
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  {icon}
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}
