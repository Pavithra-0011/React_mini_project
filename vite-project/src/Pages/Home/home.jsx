import React, { useState, useEffect } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios'
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
import ComboBox from '../../components/AutoComplete/autocomplete.jsx'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import './home.scss'

const jobs = [
  {
    title: "Full Stack Developer",
    company: "Amazon",
    experience: "1-3 yr",
    jobType: "onsite",
    location: "Chennai",
    salary: 12
  },
  {
    title: "Node Js Developer",
    company: "Tesla",
    experience: "1-3 yr",
    jobType: "onsite",
    location: "Bangalore",
    salary: 12
  },
  {
    title: "UX/UI Designer",
    company: "Swiggy",
    experience: "1-3 yr",
    jobType: "onsite",
    location: "Hyderabad",
    salary: 12
  },
  {
    title: "Full Stack Developer",
    company: "Amazon",
    experience: "1-3 yr",
    jobType: "onsite",
    location: "Pune",
    salary: 12
  },
  {
    title: "Node Js Developer",
    company: "Tesla",
    experience: "1-3 yr",
    jobType: "onsite",
    location: "Noida",
    salary: 12
  },
  {
    title: "UX/UI Designer",
    company: "Swiggy",
    experience: "1-3 yr",
    jobType: "onsite",
    location: "Kolkata",
    salary: 12
  },
  {
    title: "Full Stack Developer",
    company: "Amazon",
    experience: "1-3 yr",
    jobType: "onsite",
    location: "Mumbai",
    salary: 12
  },
  {
    title: "Node Js Developer",
    company: "Tesla",
    experience: "1-3 yr",
    jobType: "onsite",
    location: "Delhi",
    salary: 12
  }
];

const style = {
    margin: '0px 0px',
    width: 300,
    border: '0px',
    '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
           '& fieldset': {
            border: 'none'},
          // border: '0px'
        },
}

const Role =[{label:'Full Stack Developer'}, {label:'UI/UX Designer'}, {label:'Node Js Developer'}]
const Location =[{label:'Chennai'}, {label:'Bangalore'}, {label:'Mumbai'}, {label:'Pune'}, {label:'Hyderabad'}]
const type = [{label:'Internship'}, {label:'Full Time'}, {label:'Part Time'},{label:'Contract'}, {label: 'Remote'}]

function Home() {
  const [view, SetView] = useState(true)
  const [job, setJob] = useState([])
  const [hasFilterApplied, setHasFilterApplied] = useState(false);
  const [filters, setFilters] = useState({
  role: '',
  location: '',
  jobType: '',
  salaryRange: [0, 100000]
});

  const getCompanyLogo = (companyName) => {
  switch (companyName.toLowerCase()) {
    case 'amazon':
      return Amazon;
    case 'tesla':
      return Tesla;
    case 'swiggy':
      return Swiggy;
    default:
      return null; // or a default logo
  }
};
useEffect(() => {
    axios.get('http://localhost:8000/jobs')
      .then((res) => {
        setJob(res.data)
        console.log("data", res.data)
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err)
      })
  }, [])

  console.log("Filters:", filters);
  useEffect(() => {
  if (!hasFilterApplied) return; 

  console.log("🔍 Fetching with filters:", filters); 
  const fetchJobs = async () => {
  try {
    const params = {};

    if (filters.role && filters.role.trim() !== "") params.role = filters.role;
    if (filters.location && filters.location.trim() !== "") params.location = filters.location;
    if (filters.jobType && filters.jobType.trim() !== "") params.jobType = filters.jobType;

    params.min_salary = filters.salaryRange[0];
    params.max_salary = filters.salaryRange[1];

    const query = new URLSearchParams(params).toString();
    const res = await axios.get(`http://localhost:8000/jobs?${query}`);
    setJob(res.data);
  } catch (err) {
    console.error("Error fetching jobs:", err);
  }
};

  fetchJobs();
}, [filters, hasFilterApplied]);

  
  const handleClick =() =>{
    SetView(false)
  }

  const JobClick = () =>{
     SetView(true)
  }

  const updateFilter = (field, value) => {
  setHasFilterApplied(true);  // user applied a filter
  setFilters((prev) => ({
    ...prev,
    [field]: value
  }));
};

const handleCreateJob = async (newJobData) => {
  try {
    const res = await axios.post("http://localhost:8000/jobs", newJobData);
    setJob((prev) => [...prev, res.data]);
  } catch (err) {
    console.error("Error creating job", err);
  }
};

const filteredJobs = job;
// console.log(filters)
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
            <button onClick={handleCreateJob}><BasicModal text={"Create Jobs"}/></button>
        </div>
        <div className='filter'>
           <ComboBox icon={<SearchOutlinedIcon/>} placeholder={'Search By Job, Title, Role'} 
           options={Role} style={style}
           onChange={(e, value) => updateFilter('role', value?.label || '')}
           />
           <ComboBox icon={<RoomOutlinedIcon/>} placeholder={'Preferred Loaction'} 
           options={Location} style={style}
           onChange={(e, value) => updateFilter('location', value?.label || '')}
           />
           <ComboBox icon={<RecordVoiceOverOutlinedIcon/>} placeholder={'Job Type'} 
           options={type} style={style}
           onChange={(e, value) => updateFilter('jobType', value?.label || '')}
           />
           <Slider
           onChange={(e, newValue) => updateFilter('salaryRange', newValue)}
           />
        </div>
      </div>
      <div className='body_content'>
        {view ? (
  <>
    {filteredJobs.length === 0 ? (
      <p className='no-jobs-found'>No Jobs found matching your filters</p>
    ) : (
      filteredJobs.map((jobs, index) => (
        <Cards
          key={index}
          Logo={getCompanyLogo(jobs.company)}
          title={jobs.title}
          company={jobs.company}
          experience={jobs.experience}
          jobType={jobs.jobType}
          location={jobs.location}
          salary={jobs.salary}
        />
      ))
    )}
  </>
) : (
  <Outlet />
)}
      </div>
    </div>
  )
}

export default Home