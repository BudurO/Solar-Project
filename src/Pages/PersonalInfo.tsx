import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
type IuserInfo = {
    id?:string,
    Email: string,
    Name: string,
    PhoneNumber: string,
}
function PersonalInfo() {
    const [Info, setInfo] = React.useState<IuserInfo[]|any>([])
    
    
    React.useEffect(()=>{
        axios.get("https://64f37a17edfa0459f6c69e5b.mockapi.io/users")
    .then((res)=>{
        setInfo(res.data);
    }) 
    },[])
    
        const getId = localStorage.getItem("id")
        const [UpInfo, setUpInfo] = React.useState<IuserInfo>({
            Email:Info.Email,
            Name: Info.Name,
            PhoneNumber: Info.PhoneNumber,
        })
        const UpdateInfo = (id:string)=>{
            Swal.fire({
                title: "You've updated user data successfully.",
                width: 600,
                padding: '3em',
                color:'#0C0A3E',
                confirmButtonColor: '#FEB221',
            })
            axios.put(`https://64f37a17edfa0459f6c69e5b.mockapi.io/users/${id}`,{
                Email:UpInfo.Email,
                Name: UpInfo.Name,
                PhoneNumber: UpInfo.PhoneNumber,
            })
            .then((res)=>{
                console.log(res)
            })
        }
        // React.useEffect(()=>UpdateInfo(getId),[])
    return (
        <>
        <div className="flex flex-col h-screen bg-gray-100">
                <div className="bg-white w-full h-1"></div>
                <div className="flex-1 flex flex-wrap">
                    <div className="p-2 bg-[#0C0A3E] w-full md:w-60 flex flex-col md:flex ">
                        <nav>
                            <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200">
                                <i className="fas fa-home mr-2"></i>Profile
                            </a>
                            <a className="block py-2.5 px-4 my-4 rounded transition duration-200  bg-white  text-[#0C0A3E]" href="/userInfo">
                                <i className="fas fa-file-alt mr-2"></i>Personal information
                            </a>
                            <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200  hover:bg-white hover:text-[#0C0A3E]" href="/dashboard">
                                <i className="fas fa-users mr-2"></i>Request history
                            </a>
                        </nav>
                    </div>
                    <div className=' flex flex-col ml-10 mt-8'>
                        <div className=' text-lg font-black mb-5'>
                            <h2>Personal information</h2>
                        </div>
                        <div className=' bg-white lg:p-10 p-2 xl:w-[70rem] lg:w-[44rem] md:w-[28rem]'>
                            {Info.map((item: { id: React.Key | null | undefined; Name: string | number | readonly string[] | undefined; Email: string | number | readonly string[] | undefined; PhoneNumber: string | number | readonly string[] | undefined })=>{
                                if(item.id===getId){
                                    return(
                                        <div key={item.id}>
                                            <div className='lg:mb-5 mb-3'>
                                                <p className=' font-medium'>Name</p>
                                                <div className='py-2 px-8 border-b border-[#FFE8BD] font-normal'>
                                                    <input className=' border border-gray-200 w-60' type="text" defaultValue={item.Name} onChange={((e)=>{setUpInfo({...UpInfo,Name:e.target.value})})}/>
                                                </div>
                                            </div>
                                            <div className='lg:mb-5 mb-3'>
                                                <p className=' font-medium'>Email</p>
                                                <div className='py-2 px-8 border-b border-[#FFE8BD] font-normal'>
                                                    <input className=' border border-gray-200 w-60' type="email" defaultValue={item.Email} onChange={((e)=>{setUpInfo({...UpInfo,Email:e.target.value})})}/>
                                                </div>
                                            </div>
                                            <div className='lg:mb-5 mp-3'>
                                                <p className=' font-medium'>Phone</p>
                                                <div className='py-2 px-8 border-b border-[#FFE8BD] font-normal'>
                                                    <input className=' border border-gray-200 w-60' type="text" defaultValue={item.PhoneNumber} onChange={((e)=>{setUpInfo({...UpInfo,PhoneNumber:e.target.value})})}/>
                                                </div>
                                            </div>
                                            <div className='flex justify-end'>
                                                <button className=' px-3 py-3 bg-[#FEB221] rounded-lg' onClick={()=>UpdateInfo(String(item.id))}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                                })}
                            
                        </div>
                    </div>
                </div>
        </div>
            <div className='h-1 bg-white'></div>
        </>
    )
}

export default PersonalInfo