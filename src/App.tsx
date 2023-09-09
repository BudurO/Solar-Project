import SingnUp from './Pages/SignUp'
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom"
import RentingForm from './Pages/RentingForm'

function App() {

  return (
    <>
  <Navbar/>

  <Routes>
    <Route path="/" element={ "" }/>
    <Route path="/SingnUp" element={ <SingnUp/> }/>
    <Route path='/rent' element={<RentingForm/>}/>
  </Routes>

  <Footer/>
    </>
  )
}

export default App
