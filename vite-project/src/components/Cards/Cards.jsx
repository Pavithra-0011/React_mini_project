import React from 'react'
import './Cards.scss'
import exp from '../../assets/exp.png'
import Salary from '../../assets/Salary.png'
import onsite from '../../assets/onsite.png'
import { Box } from '@mui/material'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

function Cards({Logo,title, company, salary, location, experience}) {
  return (
    <>
    <div className='Card_Frame'> 
        <div className='Logo'>
          <div className='logo_box'>
            <div className='Inner_cir'>
              <img src={Logo} height="65px" width= '65px'></img>
            </div>
          </div>
          <div className='time_label'>24h Ago</div>
        </div>
        <div className='Title'>
          {title}
        </div>
        <div className='description'>
          <span><img src={exp} height='15px' width='18px' />&nbsp;{experience}</span>
          <span><img src={onsite} height='15px' width='18px' />&nbsp;{location}</span>
          <span><img src={Salary} height='15px' width='18px' />&nbsp;{salary}</span>
        </div>
        <div className='job_des'>
            <ul>
              <li><p>A user-friendly interface lets you browse stunning photos and videos</p></li>
              <li><p>Filter destinations based on interests and travel style, and create personalized </p></li>
            </ul>
        </div>
        <div className='btn'>
          <button>Apply Now</button>
        </div>
    </div>
    </>
  )
}

export default Cards