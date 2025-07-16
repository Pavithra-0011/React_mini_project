import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import {
  InputAdornment,
  OutlinedInput,
  TextField,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Select_Input({icon,placeholder,Menu1, Menu2, Menu3}) {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
      <FormControl>
        <Select
         value={state}
         displayEmpty 
          input={
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                {icon}
              </InputAdornment>
            }
          />
        }
          onChange={handleChange}
          sx={{width: '32ch', border: 'none','& fieldset': { border: 'none'}}}
        //   label="Age"
        renderValue={(selected) =>
          selected === '' ? (
            <span style={{ color: '#999' }}>{placeholder}</span>
          ) : (
            selected
          )
        }
        >
          <MenuItem value={Menu1}>{Menu1}</MenuItem>
          <MenuItem value={Menu2}>{Menu2}</MenuItem>
          <MenuItem value={Menu3}>{Menu3}</MenuItem>
        </Select>
        {/* </TextField> */}
      </FormControl>
  );
}

export default Select_Input
