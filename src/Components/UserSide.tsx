import React from 'react'
import { useParams } from 'react-router-dom'

function UserSide() {
    const getpage = localStorage.getItem("Page")
  return (
    <>
        <div className="p-2 bg-[#0C0A3E] w-full md:w-60 flex flex-col md:flex ">
                    <nav>
                        <a className="block text-white font-semibold py-2.5 px-4 my-4 rounded transition duration-200">
                            <i className="fas fa-home mr-2"></i>Profile
                        </a>
                        {getpage=="dashboard"?<a className="block text-white py-2.5 px-4 my-4 rounded transition duration-200  hover:bg-white  hover:text-[#0C0A3E]" href="/userInfo">
                            <i className="fas fa-file-alt mr-2"></i>Personal information
                        </a>:<a className="block  py-2.5 px-4 my-4 rounded transition duration-200  bg-white  text-[#0C0A3E]" href="/userInfo">
                            <i className="fas fa-file-alt mr-2"></i>Personal information
                        </a>}
                        {getpage=="dashboard"?<a className="block  py-2.5 px-4 my-4 rounded transition duration-200  bg-white text-[#0C0A3E]" href="/dashboard">
                            <i className="fas fa-users mr-2"></i>Request history
                        </a>:<a className="block  py-2.5 px-4 my-4 rounded transition duration-200 text-white  hover:bg-white hover:text-[#0C0A3E]" href="/dashboard">
                            <i className="fas fa-users mr-2"></i>Request history
                        </a>}
                        
                    </nav>
                </div>
                
    </>
  )

} 

export default UserSide