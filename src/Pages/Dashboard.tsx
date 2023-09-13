import axios from 'axios'
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'
import React from 'react'
import Navbar from '../Components/Navbar';
import UserRequest from '../Components/UserRequest';
import UserSide from '../Components/UserSide';

function Dashboard() {

    const isLogin = localStorage.getItem("isLogin")
    // isLogin=="true"?:nav("/")
    if(isLogin!="true"){
        location.href="/"
    }
    localStorage.setItem("Page","dashboard")

    return (
        <>
        
        <Navbar/>
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="bg-white w-full h-1"></div>
            <div className="flex-1 flex flex-wrap">
                <UserSide/>
                <div className="flex-1 p-4 lg:w-full md:w-1/2 ">
                    <div className=" bg-white pb-4 shadow rounded-lg lg:w-full md:w-full w-96">
                        <UserRequest/>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-1 bg-white'></div>
        </>
    )
}

export default Dashboard