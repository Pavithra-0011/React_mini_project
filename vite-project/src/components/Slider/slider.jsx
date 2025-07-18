import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

function RangeSlider({onChange}) {
  const [value, setValue] = React.useState([5000, 100000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };

 const formatK = (num) => `${Math.round(num / 1000)}K`;
  return (
    <>
    <div>
    <div style={{display:'flex', justifyContent:'space-between'}}>
        <p style={{fontSize:'16px', margin:'0px'}}>Salary Per Month</p>
        <div style={{ display: 'flex', gap: '16px', fontSize: '16px', color: 'black', fontWeight:500}}>
        <span>Rs:  {formatK(value[0])} – {formatK(value[1])}</span>
  </div>
    </div>
    <Box sx={{ width: 300}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        min={5000}
        max={100000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color='black'
        sx={{
            height:4,
        }}
      />
    </Box>
    </div>
    </>
  );
}

export default RangeSlider