import React from 'react'
import HomePageImg from '../assets/HomePage.png'
import LineImg from '../assets/line.png'
function HomePage() {
  return (
    <>
    <div className='flex justify-center flex-col'>
    <img className='w-full h-full' src={HomePageImg} alt="" />
    <h1 className='text-center text-4xl text-[#0C0A3E] font-semibold mt-4'><span className='t text-[#FEB221]'>The</span> Process</h1>
    <img className='' src={LineImg} alt="" />
    </div>


    </>
  )
}

export default HomePage