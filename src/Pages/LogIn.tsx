import React from 'react'
import ImgSolar from '../assets/solar-img.png'
import Imglinegold from '../assets/Linegold0.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';

type IuserLogIn = {
    id:string,
    Name: string,
    Email:string,
    Createpassword:string,
  }

function LogIn() {
        // const [UserInf,setUserInf] = React.useState([])
        const [errorMessagelength,seterrorMessage] = React.useState("");
        const [AddInfoUser,setAddInfoUser] = React.useState({
            id: "",
            Email: "",
            Createpassword:"",
            Name:"",

          }); 

        const [LogInUserO,setLogInUser] = React.useState<IuserLogIn[]>([]); 
        const navigate = useNavigate();

        const LogInUser = () =>{
          if(AddInfoUser.Email == "" && AddInfoUser.Email.length < 8){
            const notify = () => toast.warning("Enter your Email");
            notify()
            return navigate('/') 
          }else if (!AddInfoUser.Email.includes('@')){
            seterrorMessage("Email must contain at least one symbol e.g. @ .")
          }else if (AddInfoUser.Createpassword == "" ){
            const notify = () => toast.warning("Enter your password");
            notify()
            return navigate('/')    
          }else if (AddInfoUser.Createpassword.length < 8){
            seterrorMessage("Password must contain a minimum of 8 characters")
            return navigate('/')    
          }
          else if (!AddInfoUser.Createpassword.includes('@') && !AddInfoUser.Createpassword.includes('!') && !AddInfoUser.Createpassword.includes('#') && !AddInfoUser.Createpassword.includes('$') && !AddInfoUser.Createpassword.includes('&') && !AddInfoUser.Createpassword.includes('*') && !AddInfoUser.Createpassword.includes('%')){
            seterrorMessage("Password must contain at least one symbol e.g. @, !")
            return navigate('/')    
          }
            axios.get("https://64f37a17edfa0459f6c69e5b.mockapi.io/users")
            .then((res) => {
                  const LonInUser = res.data.find((cheek:IuserLogIn) => {
                     return cheek.Email === AddInfoUser.Email && cheek.Createpassword === AddInfoUser.Createpassword
                  });
                  if (LonInUser.length === 0){
                    const notify = () => toast.warn("Invalid");
                    notify()  
                    navigate('/')
                  }else if(AddInfoUser.Email === "Admin@gmail.com" && AddInfoUser.Createpassword === "AdminAdmin%%%%%%%"){
                    localStorage.setItem("isLogin","true") 
                    localStorage.setItem("Name","Admin")
                    const notify = () => toast.success("success Admin");
                    notify()  
                    navigate('/RequestListAdmin')
                  }else{
                    // const notify = () => toast.success("s");
                    // notify() 
                    localStorage.setItem("isLogin","true") 
                    localStorage.setItem("Name",LonInUser.Name)
                    localStorage.setItem("id",LonInUser.id)
                    const notify = () => toast.success(`success${AddInfoUser.Name}`);
                    notify()  
                    navigate('/HomePage')
                  }
            })
            .catch((error) =>{
              console.log(error);
              
            });
          };
     
  return (
    <>
        <Navbar/>
    <div className="h-screen flex md:justify-center sm:justify-center">
{/* <img className='' src={Imglinegold} alt="" /> */}
<div className="flex md:w-1/2 justify-center py-10 items-center bg-white lg:w-full m-auto">
<img className='absolute' src={Imglinegold} alt="" />
<div className="bg-white relative px-11 pt-4 bg-opacity-80 rounded-md">

<p className="text-xl text-gray-600 mb-11 font-semibold">Welcome back!</p>
<label className='ml-4' htmlFor="email">Email</label>
<div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
  <input className="outline-none lg:w-96 md:w-96 sm:w-full" type="email" name="email" id="email" placeholder="example@example.com"
  onChange={(e) => {
  setAddInfoUser({...AddInfoUser,Email: e.target.value})
  }}
  value={AddInfoUser.Email} 
  />
</div>
<label className='ml-4' htmlFor="password">Password</label>
<div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
  <input className="outline-none lg:w-96 md:w-96 sm:w-full" type="password" name="password" id="password" placeholder="Password"
  onChange={(e) => {
    setAddInfoUser({...AddInfoUser,Createpassword: e.target.value})
    }} 
    value={AddInfoUser.Createpassword}
  />
  {/* <img src={Imgeyeclose} alt="" /> */}
</div>
 <span className='flex text-[#0C0A3E] text-xs ml-8' style={{color: "red"}}>{errorMessagelength}</span>
<div className='flex justify-center'>
<button className="block text-center cursor-pointer	w-40 rounded-md bg-[#FFD35C] mt-4 py-2  text-[#0C0A3E] font-semibold mb-2 shadow-lg border-[1px]" onClick={() => LogInUser(AddInfoUser.Email,AddInfoUser.Createpassword)}>LogIn</button>
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