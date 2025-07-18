import { useState } from 'react'
import Home from './Pages/Home/home.jsx'
import Hiretalent from './Pages/Hire/hire.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
       <Route path='/' element={<Home/>}>
         <Route path='/Hire' element={<Hiretalent/>}/>
       </Route>
     </Routes>
    </>
  )
}

export default App
