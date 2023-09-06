import React from 'react'
import ImgSolar from '../assets/solar-img.png'
import ImgFlagNumber from '../assets/flagNumber.svg'
import ImgArrow from '../assets/Arrow.svg'
import Imgeyeclose from '../assets/eye-close-line.svg'
import Imglinegold from '../assets/Linegold0.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type IuserInfo = {
  Email: string,
  Name: string,
  PhoneNumber: string,
  Createpassword: string
}
function SignUp() {
  const [AddInfoUser,setAddInfoUser] = React.useState<IuserInfo>({
    Email: "",
    Name:"",
    PhoneNumber:"",
    Createpassword:"",
  }); 

  const navigate = useNavigate();

  const AddUser = () =>{
    if (AddInfoUser.Email == "" ){
      const notify = () => toast.warning("Enter Email");

      notify()
     return navigate('/')    
    }else if(AddInfoUser.Name == ""){
      const notify = () => toast.warning("Enter Name");
      notify()
      return navigate('/')    

    }else if (AddInfoUser.PhoneNumber == "" ){
      const notify = () => toast.warning("Enter Phone Number");
      notify()
      return navigate('/')    

    }else if (AddInfoUser.Createpassword == "" ){
      const notify = () => toast.warning("Enter Create password");
      notify()
      return navigate('/')    

    }else{
      const notify = () => toast.success("success");
      notify()      
    }
axios.post("https://64f37a17edfa0459f6c69e5b.mockapi.io/users",{
    Email: AddInfoUser.Email,
    Name: AddInfoUser.Name,
    PhoneNumber: AddInfoUser.PhoneNumber,
    Createpassword: AddInfoUser.Createpassword,
})
.then((res) => {
  console.log(res);
  localStorage.setItem("Name" , AddInfoUser.Name)
})
.catch((err) =>{
  console.log(err);
  
})
  }
  return (
    <>
<div className="h-screen flex md:justify-center sm:justify-center">
{/* <img className='' src={Imglinegold} alt="" /> */}
<div className="flex md:w-1/2 justify-center py-10 items-center bg-white lg:w-full">
    <form className="bg-white">
      <p className="text-2xl text-gray-600 mb-11 font-semibold">Let’s get you started</p>

      <label className='ml-4' htmlFor="">Email</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4 bg-[#3D3B65]">
        <input className="pl-2 outline-none border-none bg-[#3D3B65]" type="email" name="email" id="email" placeholder="example@example.com"
        onChange={(e) => {
          setAddInfoUser({...AddInfoUser,Email: e.target.value})
        }}  
        />
      </div>

      <label className='ml-4' htmlFor="">Name</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4 bg-[#3D3B65]">
        <input className="pl-2 outline-none border-none bg-[#3D3B65] " type="text" name="" id="" placeholder="Enter your name"
        onChange={(e) => {
          setAddInfoUser({...AddInfoUser,Name: e.target.value})
        }}  
        />
      </div>

      <label className='ml-4' htmlFor="">Phone number</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4 bg-[#3D3B65]">
        <img src={ImgFlagNumber} alt="" />
        <img src={ImgArrow} alt="" />
        <input className="pl-2 outline-none border-none bg-[#3D3B65]" type="text" name="text" id="text" placeholder="+966    505 444 6666"
        onChange={(e) => {
          setAddInfoUser({...AddInfoUser,PhoneNumber: e.target.value})
        }}  
        />
      </div>

      <label className='ml-4' htmlFor="">Create password</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4 bg-[#3D3B65]">
        <input className="pl-2 outline-none border-none bg-[#3D3B65] px-72" type="password" name="password" id="password" placeholder="Password" 
        onChange={(e) => {
          setAddInfoUser({...AddInfoUser,Createpassword: e.target.value})
        }}  
        />
        <img src={Imgeyeclose} alt="" />
      </div>
      <span className='flex text-[#0C0A3E]'>Password must contain a minimum of 8 characters</span>
      <span className='text-[#0C0A3E]'>Password must contain at least one symbol e.g. @, !</span>
      <a className="block text-center cursor-pointer	 w-full rounded-md bg-[#FFD35C] mt-4 py-2  text-[#0C0A3E] font-semibold mb-2 border-[#0C0A3E] border-[1px]" onClick={AddUser}>Sign up</a>
      <ToastContainer 
        position = {"bottom-center"}
        autoClose = {false} //3 seconds
        closeOnClick= {true}
        pauseOnHover = {false}
        pauseOnFocusLoss = {false}
        draggable = {false}
        />
    </form>
  </div>


  <div className="justify-around items-center hidden lg:flex lg:w-full opacity-95 inset-0 z-0" style={{backgroundImage: `url(${ImgSolar})`}}>
    <div>
      <h1 className="text-white text-6xl font-sans mb-96 font-light w-[400px] leading-[60px] pt-4">“The sun is what will help us save our nature”</h1>
    </div>
  </div>
</div>
    </>
  )
}

export default SignUp