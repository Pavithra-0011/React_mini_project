import React from 'react'
import logo from '../../assets/logo.png'
import Input from '../../components/material_IP'
import Select_Input from '../../components/Select_ip'
import Cards from '../../components/Cards/Cards.jsx'
import Amazon from '../../assets/Amazon.png'
import Swiggy from '../../assets/Swiggy.png'
import Tesla from '../../assets/Tesla.png'
import Slider from '../../components/Slider/slider.jsx'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import './home.scss'

function Home() {
  return (
    <div className='main-frame'>
      <div className='header'>
        <div className='Navigation_links'>
           <img src={logo} height='44px' width='44px'/>
           <nav><ul>
            <li>Home</li>
            <li>Find Jobs</li>
            <li>Find Talents</li>
            <li>About Us</li>
            <li>Testimonals</li>
            </ul></nav>
            <button>Create Jobs</button>
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
        <Cards Logo={Amazon} Title={"Full Stack Developer"}/>
        <Cards Logo={Tesla} Title={"Node Js Developer"}/>
        <Cards Logo={Swiggy} Title={"UI/UX Developer"}/>
        <Cards Logo={Amazon} Title={"Node Js Developer"}/>
        <Cards Logo={Tesla} Title={"UI/UX Developer"}/>
        <Cards Logo={Swiggy} Title={"Full Stack Developer"}/>
        <Cards Logo={Amazon} Title={"Node Js Developer"}/>
        <Cards Logo={Tesla} Title={"UI/UX Developer"}/>
      </div>
    </div>
  )
}

export default Home