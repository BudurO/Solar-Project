import React from 'react'
import HomePageImg from '../assets/HomePage.png'
import LineImg from '../assets/line.png'
import Mask0 from '../assets/Mask group.svg'
import Mask1 from '../assets/Mask group (1).svg'
import Mask2 from '../assets/Mask group (2).svg'
import ImgVision from '../assets/ImgVision.svg'
import lineVision0 from '../assets/lineVision0.png'
import Ellipse from '../assets/Ellipse .png'
function HomePage() {
  return (
    <>
    <div className='flex justify-center flex-col'>
    <img className='w-full h-full relative' src={HomePageImg} alt="" />

  <div className='flex justify-center'>
  <button className="mb-8 px-4 py-2 bg-[#FFD35C] text-black font-semibold rounded w-32">Rent a roof</button>
  </div>
    <h1 className='text-center text-4xl text-[#0C0A3E] font-semibold mt-8'><span className='t text-[#FEB221]'>The</span> Process</h1>
    <img className='' src={LineImg} alt="" />
    </div>

<body className="bg-white">

<section>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-2 mb-8 ml-14">
        <div>
          <img src={Mask1} alt="" />
          <h3 className="lg:text-lg md:text-lg font-semibold text-gray-500 mt-2 mb-8 ml-8 text-xs"><p className='text-[#000000] font-normal'><span className='text-[#FEB221]'>01</span> Send a Request</p></h3>
          <p className='ml-8 text-xs lg:text-lg md:text-lg'>Enabling sustainable societies through innovation in technology and services.</p>
        </div>
        <div>
          <img src={Mask0} alt="" />
          <h3 className="lg:text-lg md:text-lg font-semibold text-gray-500 mt-2 mb-8 ml-8 text-xs"><p className='text-[#000000] font-normal'><span className='text-[#FEB221]'>02</span> investigate the roof</p></h3>
          <p className=' ml-8 text-xs lg:text-lg md:text-lg'>To promote the installation of power plants based on renewable energy sources for Energy Security.</p>
        </div>
        <div>
            <img src={Mask2} alt="" />
          <h3 className="lg:text-lg md:text-lg font-semibold text-gray-500 mt-2 mb-8 ml-8 text-xs"><p className='text-[#000000] font-normal'><span className='text-[#FEB221]'>03</span> Easy installition</p></h3>
          <p className='ml-8 text-xs lg:text-lg md:text-lg'>Engines and storage will provide the needed flexibility to balance renewables and secure reliability</p>
        </div>
      </div>
</section>
    
<section className='flex' id='OurVision'>
        <img className='absolute lg:flex md:flex hidden' src={lineVision0} alt="" />
        <img className='relative mb-96 lg:flex lg:w-auto md:flex hidden md:w-80' src={ImgVision} alt="" />

      <div className="grid grid-cols-1 gap-4 lg:mt-24">
        <div className='lg:ml-32 lg:mt-4 md:ml-20 md:mb-4 text-center'>
          <p className='text-[#0C0A3E] text-4xl lg:text-left lg:font-semibold md:text-center lg:mt-60 md:mt-60 lg:mb-8 lg:w-[300px] md:w-[300px] md:mb-4 mb-4'><span className='text-[#FEB221]'>Our</span> Vision</p>
          <p className='lg:text-left md:text-xs lg:text-sm lg:w-[360px] lg:tracking-wide md:w-[360px] md:tracking-wide md:text-left'>
          Towards a 100% renewable energy future.
          The energy landscape is in a transition towards more flexible and sustainable energy systems. We envision a 100% renewable energy future.</p>
          <p className='md:text-xs lg:text-sm lg:w-[400px] lg:tracking-wide md:w-[300px] md:tracking-wide md:text-left'>Xxx is leading the transition – we understand, design, build and serve optimal power systems for future generations.</p>

          <div className='flex mb-4 mt-4'>
          <img className=' w-8 h-8' src={Ellipse} alt="" />
          <p className='text-sm w-96 ml-8 text-left'><span className='text-[#FEB221] text-2xl'>Create</span> a site that provides a roof rental service to install solar panels, targeting shops and residents.</p>
          </div>
         <div className='flex'>
          <img className='w-8 h-8' src={Ellipse} alt="" />
          <p className='text-sm w-96 ml-8 text-left'><span className='text-[#FEB221] text-2xl'>Aim</span> of benefiting from solar energy in the Kingdom and transforming it into more sustainable energy by following Vision 2030</p>

         </div>
        </div>
      </div>

</section>    

</body>
    </>
  )
}

export default HomePage