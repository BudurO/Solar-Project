import SingnUp from './Pages/SignUp'
import Navbar from './Components/NavbarHome'
import './App.css'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom"
import LogIn from './Pages/LogIn'
import HomePage from './Pages/HomePage'
import RentingForm from './Pages/RentingForm'
import RequestListAdmin from './Pages/RequestListAdmin'
import Dashboard from './Pages/Dashboard'
import PersonalInfo from './Pages/PersonalInfo'

function App() {
  return (
    <>
    
    <Navbar/>


  <Routes>
    {/* <Route path="/" element={ "" }/> */}
    <Route path='/HomePage' element={<HomePage/>}/>
    <Route path="/SingnUp" element={ <SingnUp/> }/>
    <Route path='/' element={<LogIn/>}/>
    <Route path='/rent' element={<RentingForm/>}/>
    <Route path='/RequestListAdmin' element={<RequestListAdmin/>}/>
    <Route path='/dashboard' element={<Dashboard/>}>
      {/* <Route path='/:id' element={<Dashboard/>}/> */}
    </Route>
    <Route path='/userInfo' element={<PersonalInfo/>}/>

  </Routes>

  <Footer/>
    </>
  )
}

export default App
