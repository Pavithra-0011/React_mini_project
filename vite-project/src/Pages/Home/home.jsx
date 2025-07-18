import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Outlet } from 'react-router-dom'
import Input from '../../components/material_IP'
import Select_Input from '../../components/Select_ip'
import Cards from '../../components/Cards/Cards.jsx'
import Amazon from '../../assets/Amazon.png'
import Swiggy from '../../assets/Swiggy.png'
import Tesla from '../../assets/Tesla.png'
import BasicModal from '../../components/Modal/modal.jsx'
import Slider from '../../components/Slider/slider.jsx'
import { Link } from 'react-router-dom';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import './home.scss'

function Home() {
  const [view, SetView] = useState(true)
  const handleClick =() =>{
    SetView(false)
  }

  const JobClick = () =>{
     SetView(true)
  }
  return (
    <div className='main-frame'>
      <div className='header'>
        <div className='Navigation_links'>
           <img src={logo} height='44px' width='44px'/>
           <nav><ul>
            <li onClick={JobClick}><Link to='/' className='lnk'>Home</Link></li>
            <li onClick={JobClick}><Link to='/' className='lnk'>Find Jobs</Link></li>
            <li onClick={handleClick}><Link to='/Hire' className='lnk'>Find Talents</Link></li>
            <li>About Us</li>
            <li>Testimonals</li>
            </ul></nav>
            <button><BasicModal text={"Create Jobs"}/></button>
        </div>
        <div className='filter'>
           <Input/>
           <Select_Input placeholder={"Preferred Location"} icon={<RoomOutlinedIcon/>}
           Menu1={"Chennai"}
           Menu2= {"Bangalore"}
           />
           <Select_Input placeholder={"Job Type"} icon={<RecordVoiceOverOutlinedIcon/>}
           Menu1={"Internship"}
           Menu2= {"Full Time"}
           Menu3= {"Part Time"}
           Menu4 = {"Contract"}
           />
           <Slider/>
        </div>
      </div>
      <div className='body_content'>
        {view ? (
        <>
        <Cards Logo={Amazon} Title={"Full Stack Developer"}/>
        <Cards Logo={Tesla} Title={"Node Js Developer"}/>
        <Cards Logo={Swiggy} Title={"UI/UX Developer"}/>
        <Cards Logo={Amazon} Title={"Node Js Developer"}/>
        <Cards Logo={Tesla} Title={"UI/UX Developer"}/>
        <Cards Logo={Swiggy} Title={"Full Stack Developer"}/>
        <Cards Logo={Amazon} Title={"Node Js Developer"}/>
        <Cards Logo={Tesla} Title={"UI/UX Developer"}/>
        </>
        )
        :(<Outlet/>)
        }
      </div>
    </div>
  )
}

export default Home