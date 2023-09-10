import SingnUp from './Pages/SignUp'
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom"
import LogIn from './Pages/LogIn'
import HomePage from './Pages/HomePage'
import RentingForm from './Pages/RentingForm'
import RequestListAdmin from './Pages/RequestListAdmin'
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
  </Routes>

  <Footer/>
    </>
  )
}

export default App
