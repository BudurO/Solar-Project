import React from 'react'
import { Routes, Route } from "react-router-dom"
import SingnUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import HomePage from '../Pages/HomePage'
import RentingForm from '../Pages/RentingForm'
import RequestListAdmin from '../Pages/RequestListAdmin'
import Dashboard from '../Pages/Dashboard'
import PersonalInfo from '../Pages/PersonalInfo'
import Footer from '../Components/Footer'
import NavbarHome from './NavbarHome'
function Router() {
  return (
    <>

 <Routes>
    {/* <Route path="/" element={ "" }/> */}
    <Route path='/HomePage' element={<HomePage/>}/>
    <Route path="/SingnUp" element={ <SingnUp/> }/>
    <Route path='/' element={<LogIn/>}/>
    <Route path='/rent' element={<RentingForm/>}/>
    <Route path='/RequestListAdmin' element={<RequestListAdmin/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    {/* <Route path='/:id' element={<Dashboard/>}/> */}
    <Route path='/userInfo' element={<PersonalInfo/>}/>

  </Routes>

    </>
  )
}

export default Router