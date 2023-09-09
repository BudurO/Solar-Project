import React from 'react'
import ImgSolar from '../assets/solar-img.png'
import Imglinegold from '../assets/Linegold0.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type IuserLogIn = {
    id:string,
    Email:string,
    Createpassword:string
  }

function LogIn() {
        // const [UserInf,setUserInf] = React.useState([])
        // const [AddInfoUser,setAddInfoUser] = React.useState({
        //     Email: "",
        //     Createpassword:"",
        //   }); 

        const [LogInUserO,setLogInUser] = React.useState<IuserLogIn[]>([]); 
        const navigate = useNavigate();

        const LogInUser = () =>{
            axios.get("https://64f37a17edfa0459f6c69e5b.mockapi.io/users")
            .then((res) => {
                setLogInUser(res.data);
                console.log(res.data);

            })
          
            .catch((err) =>{
              console.log(err);
              
            })
          
        }
  return (
    <>
    <div className="h-screen flex md:justify-center sm:justify-center">
{/* <img className='' src={Imglinegold} alt="" /> */}
<div className="flex md:w-1/2 justify-center py-10 items-center bg-white lg:w-full m-auto">
<img className='absolute' src={Imglinegold} alt="" />
    <div className="bg-white relative px-11 pt-4 bg-opacity-80 rounded-md">

      <p className="text-xl text-gray-600 mb-11 font-semibold">Welcome back!</p>

      <label className='ml-4' htmlFor="email">Email</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
        <input className="outline-none lg:w-96 md:w-96 sm:w-full" type="email" name="email" id="email" placeholder="example@example.com"
        // value={AddInfoUser.Email}
        // onChange={e => {
        //     setLogInUser({...AddInfoUser,Email: e.target.value});
        // }}
        />
      </div>

      <label className='ml-4' htmlFor="password">Password</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
        <input className="outline-none lg:w-96 md:w-96 sm:w-full" type="password" name="password" id="password" placeholder="Password"
        // value={AddInfoUser.Createpassword} 
        // onChange={e => {
        //     setLogInUser({...AddInfoUser,Createpassword: e.target.value});
        //  }} 
        />
        {/* <img src={Imgeyeclose} alt="" /> */}
      </div>
       {/* <span className='flex text-[#0C0A3E] text-xs ml-8' style={{color: "red"}}>{errorMessagelength}</span> */}
      <div className='flex justify-center'>
      <button className="block text-center cursor-pointer	w-40 rounded-md bg-[#FFD35C] mt-4 py-2  text-[#0C0A3E] font-semibold mb-2 shadow-lg border-[1px]" onClick={LogInUser}>LogIn</button>
      </div>
      <ToastContainer 
        position = {"top-center"}
        autoClose = {false} //3 seconds
        closeOnClick= {true}
        pauseOnHover = {false}
        pauseOnFocusLoss = {false}
        draggable = {false}
        />
    </div>
  </div>

<div className='hidden lg:flex lg:w-full lg:justify-end'>
<img src={ImgSolar} className="justify-around items-center bg-no-repeat bg-center w-[45vw]"/>
</div>
    </div>
    </>
  )
}

export default LogIn