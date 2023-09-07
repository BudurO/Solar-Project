import SingnUp from './Pages/SignUp'
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
  <Navbar/>

  <Routes>
    <Route path="/" element={ "" }/>
    <Route path="/" element={ <SingnUp/> }/>
  </Routes>
  
  <Footer/>
    </>
  )
}

export default App
