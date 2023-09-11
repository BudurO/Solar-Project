import SingnUp from './Pages/SignUp'
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom"
import RentingForm from './Pages/RentingForm'
import Dashboard from './Pages/Dashboard'
import PersonalInfo from './Pages/PersonalInfo'

function App() {

  return (
    <>
    
    <Navbar/>


  <Routes>
    <Route path="/" element={ "" }/>
    <Route path="/SingnUp" element={ <SingnUp/> }/>
    <Route path='/rent' element={<RentingForm/>}/>
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
