import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Job_Input from '../Input/input.jsx';
// import { Typography } from '@mui/material';
import TextFieldComponent from '../Text_field/text_field.jsx'
import ComboBox from '../AutoComplete/autocomplete.jsx'
import MultilineTextFields from '../MultiLine/multiline.jsx'
import BasicDatePicker from '../Date_Picker/Datepicker.jsx'
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { alignItems, display, flexDirection, fontFamily } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '830px',
  height: '88vh',
  bgcolor: 'background.paper',
  border: 'None',
  borderRadius:'16px',
  boxShadow: 24,
  p: 4,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
};

const cities = [{label :'Chennai'}, {label :'Mumbai'}, {label :'Bangalore'}, {label :'Pune'}, {label :'Hyderabad'}]
const Job_Type = [{label:'Internship'}, {label:'Part-Time'}, {label:'Full-Time'}, {label:'Contract'}]

export default function BasicModal({text}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{text}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontFamily:'Satoshi, sans-serif', fontWeight:'bold', textAlign:'center', fontSize:'23px'}}>
            Create Job Opening
          </Typography>
          <div style={{height:'90%', width:'98%',boxSizing:'border-box', marginTop:'20px', padding:'10px 10px', display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            <Job_Input placeholder={"Job Title"} text={"Job Title"}/>
            <Job_Input placeholder={"Amazon, Microsoft, Swiggy"} text={"Company Name"}/>
            <ComboBox options={cities} text={"Location"} placeholder={"Job Location"}/>
            <ComboBox options={Job_Type} text={"Job Type"} placeholder={"Job Type"}/>
            <TextFieldComponent placeholder={0} text={"Salary Range"}/>
            <TextFieldComponent placeholder={'12,00,000'}/>
            <BasicDatePicker/>
            <MultilineTextFields placeholder={"Please share a description to let the candidate know more about the job role"}/>
            </div>
            <div style={{width:'100%', display:'flex', justifyContent:'space-between',padding:'0px 20px', boxSizing:'border-box'}}>
            <Button style={{width:'200px',height:'49px', borderRadius:'10px',color:'black', border:'1px solid black'}}>Save Draft<KeyboardDoubleArrowDownOutlinedIcon/></Button>
            <Button style={{width:'200px',height:'49px', backgroundColor:'#00AAFF' ,borderRadius:'10px',color:'black'}}>Publish<KeyboardDoubleArrowRightOutlinedIcon/></Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
