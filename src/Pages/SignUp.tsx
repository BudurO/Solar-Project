import React from 'react'
import ImgSolar from '../assets/solar-img.png'
import ImgFlagNumber from '../assets/flagNumber.svg'
import ImgArrow from '../assets/Arrow.svg'
import Imgeyeclose from '../assets/eye-close-line.svg'
import Imglinegold from '../assets/Linegold0.png'
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
  const [errorMessagelength,seterrorMessage] = React.useState("");
  // const [errorMessagesymbol,seterrorMessagesymbol] = React.useState("");
  const [AddInfoUser,setAddInfoUser] = React.useState<IuserInfo>({
    Email: "",
    Name:"",
    PhoneNumber:"",
    Createpassword:"",
  }); 

  const navigate = useNavigate();

  const AddUser = () =>{
    if (AddInfoUser.Email == "" && AddInfoUser.Email.length < 8){
      const notify = () => toast.warning("Enter Email");
      notify()
     return navigate('/SingnUp') 
    }else if (!AddInfoUser.Email.includes('@')){
      seterrorMessage("Email must contain at least one symbol e.g. @ .")
      return navigate('/SingnUp')    
     }else if(AddInfoUser.Name == ""){
      const notify = () => toast.warning("Enter Name");
      notify()
      return navigate('/SingnUp')  
    }else if ( AddInfoUser.Name.length < 1){
      seterrorMessage("Name must contain a minimum of 3 characters")
      return navigate('/SingnUp')    
    } else if (AddInfoUser.PhoneNumber == "" ){
      const notify = () => toast.warning("Enter Phone Number");
      notify()
      return navigate('/SingnUp')    
    }
    else if ( AddInfoUser.PhoneNumber.length < 10){
      seterrorMessage("Phone Number must contain a minimum of 10 Number")
    }else if (AddInfoUser.Createpassword == "" ){
      const notify = () => toast.warning("Enter Create password");
      notify()
      return navigate('/SingnUp')    
    }else if (AddInfoUser.Createpassword.length < 8){
      seterrorMessage("Password must contain a minimum of 8 characters")
      return navigate('/SingnUp')    
    }
    else if (!AddInfoUser.Createpassword.includes('@') && !AddInfoUser.Createpassword.includes('!') && !AddInfoUser.Createpassword.includes('#') && !AddInfoUser.Createpassword.includes('$') && !AddInfoUser.Createpassword.includes('&') && !AddInfoUser.Createpassword.includes('*') && !AddInfoUser.Createpassword.includes('%')){
      seterrorMessage("Password must contain at least one symbol e.g. @, !")
      return navigate('/SingnUp')    
    }else{
      const notify = () => toast.success("success");
      notify()  
      seterrorMessage("")  
      return navigate('/')    
    }
axios.post("https://64f37a17edfa0459f6c69e5b.mockapi.io/users",{
    Email: AddInfoUser.Email,
    Name: AddInfoUser.Name,
    PhoneNumber: AddInfoUser.PhoneNumber,
    Createpassword: AddInfoUser.Createpassword,
})
.then((res) => {
  console.log(res);
})
.catch((err) =>{
  console.log(err);
  
})
  }
  return (
    <>
<div className="h-screen flex md:justify-center sm:justify-center sm:w-auto">
{/* <img className='' src={Imglinegold} alt="" /> */}
<div className="flex md:w-1/2 justify-center items-center bg-white lg:w-full m-auto p-0 ">
<img className='absolute' src={Imglinegold} alt="" />
    <div className="bg-white relative md:px-11 lg:px-11 pt-4 bg-opacity-80 rounded-md">

      <p className="text-2xl text-gray-600 mb-11 font-semibold">Let’s get you started</p>

      <label className='ml-4' htmlFor="email">Email</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
        <input className="outline-none lg:w-96 md:w-96 sm:w-auto" type="email" name="email" id="email" placeholder="example@example.com"
        onChange={(e) => {
          setAddInfoUser({...AddInfoUser,Email: e.target.value})
        }}  
        />
      </div>

      <label className='ml-4' htmlFor="">Name</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
        <input className="outline-none lg:w-96 md:w-96 sm:w-auto" type="text" name="" id="" placeholder="Enter your name"
        onChange={(e) => {
          setAddInfoUser({...AddInfoUser,Name: e.target.value})
        }}  
        />
      </div>
      <label className='ml-4' htmlFor="">Phone number</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
        <img className='sm:w-auto' src={ImgFlagNumber} alt="" />
        <img className='sm:w-auto' src={ImgArrow} alt="" />
        <input className="outline-none lg:w-96 md:w-96 sm:w-auto" type="text" name="text" id="text" placeholder="+966    505 444 6666"
        onChange={(e) => {
          setAddInfoUser({...AddInfoUser,PhoneNumber: e.target.value})
        }}  
        />
      </div>

      <label className='ml-4' htmlFor="">Create password</label>
      <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
        <input className="outline-none lg:w-96 md:w-96 sm:w-auto" type="password" name="password" id="password" placeholder="Password" 
        onChange={(e) => {
          setAddInfoUser({...AddInfoUser,Createpassword: e.target.value})
        }}  
        />
        <img src={Imgeyeclose} alt="" />
      </div>
       <span className='flex text-[#0C0A3E] text-xs ml-8' style={{color: "red"}}>{errorMessagelength}</span>
      <div className='flex justify-center'>
      <button className="block text-center cursor-pointer	w-40 rounded-md bg-[#FFD35C] mt-4 py-2  text-[#0C0A3E] font-semibold mb-2 shadow-lg border-[1px]" onClick={AddUser}>Sign up</button>
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

export default SignUp