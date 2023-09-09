import React from 'react'
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Imglinegold from '../assets/Linegold0.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Rent = {
    Area: string,
    Locaiton: string,
    State:string
  }
  type IsLocation = {
    lat: number;
    lng: number;
  };
function RentingForm() {
    /////////////////google map///////////////////////
    const mapStyles = {
        height: "100vh",
        width: "100%"
      };
      const defaultCenter: IsLocation = {
        lat: 24.713552,
        lng: 46.675297
      };
      const [userLocation, setUserLocation] = useState<IsLocation>();
      const [placeName, setPlaceName] = useState<string>('');
      const fetchPlaceName = async (latitude: number, longitude: number) => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDvVOxEFN68R3EuoM2vB2bKyy5sNsyURkI`
          );
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            setPlaceName(data.results[0].formatted_address);
          }
        } catch (error) {
          console.error('Error fetching place name:', error);
        }
      };
      const handleMapClick = (event: google.maps.MapMouseEvent) => {
        const { latLng } = event;
        if(latLng){
        const latitude= latLng.lat();
        const longitude = latLng.lng();
      
        setUserLocation({ lat: latitude, lng: longitude });
        fetchPlaceName(latitude, longitude);}
    
      };
      const handleLocationButtonClick = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const userLocation = {
                lat: latitude,
                lng: longitude
              };
              setUserLocation(userLocation);
              fetchPlaceName(latitude, longitude);
              console.log(userLocation)
            },
            (error) => {
              console.error("Error getting user location:", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      };
    /////////////////google map///////////////////////

    const [errorMessagelength,seterrorMessage] = React.useState("");
    const [AddRent,setAddRent] = React.useState<Rent>({
        Area:"",
        Locaiton:"",
        State:"",
        
      }); 
      
      const nav = useNavigate();

      const AddUser = () =>{
        if (AddRent.Area == ""){
          const notify = () => toast.warning("Enter Area of roof");
          notify()
          
        }else{
          const notify = () => toast.success("success");
          notify()  
          seterrorMessage("")
          nav("/userdashboard")    
        }
    axios.post("https://64f37a17edfa0459f6c69e5b.mockapi.io/Rent",{
        Area: AddRent.Area,
        Locaiton: {placeName},
        State:"New"
        
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("Name" , AddRent.Locaiton)
    })
    .catch((err) =>{
      console.log(err);
      
    })
      }
  return (
    <>
    <div className="h-screen flex md:justify-center sm:justify-center">
        <div className="flex md:w-1/2 justify-center  items-center bg-white lg:w-full ml-20">
            <img className='absolute' src={Imglinegold} alt="" />
            <div className="bg-white relative px-11 pt-4 bg-opacity-80 rounded-md">
                <p className="text-2xl text-gray-600 mb-11 font-semibold">Let's rent your roof.</p>
                <label className='ml-4' htmlFor="email">Area of roof</label>
                <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                    <input className='outline-none w-full' type="email" name="email" id="email" placeholder="Enter The area of your roof" onChange={(e) => { setAddRent({...AddRent,Area: e.target.value})}} />
                    <p>m²</p>
                </div>
                {/* <label className='ml-4' htmlFor="">System Type</label>
                <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                    <input className="outline-none w-full" type="text" name="" id="" placeholder="Enter your name" onChange={(e) => { setAddRent({...AddRent,Name: e.target.value}) }} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
                </div> */}
                
                <label className='ml-4' htmlFor="">Locaiton</label>
                <div className="flex items-center border-2  rounded-md mb-4 ">
                    <input className="outline-none w-96" value={placeName} placeholder="Locaiton"  onChange={(e) => { setAddRent({...AddRent,Locaiton: e.target.value}) }} />
                    <button className=' font-normal text-xs bg-slate-400 w-10 h-10 rounded-r flex justify-center items-center' onClick={handleLocationButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5'>
                            <path d="M176 256C176 211.8 211.8 176 256 176C300.2 176 336 211.8 336 256C336 300.2 300.2 336 256 336C211.8 336 176 300.2 176 256zM256 0C273.7 0 288 14.33 288 32V66.65C368.4 80.14 431.9 143.6 445.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H445.3C431.9 368.4 368.4 431.9 288 445.3V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V445.3C143.6 431.9 80.14 368.4 66.65 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H66.65C80.14 143.6 143.6 80.14 224 66.65V32C224 14.33 238.3 0 256 0zM128 256C128 326.7 185.3 384 256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256z"/>
                        </svg>
                    </button>
                </div>
                <span className='flex text-[#0C0A3E] text-xs ml-8' style={{color: "red"}}>{errorMessagelength}</span>
                <div className='flex justify-center'>
                    <button className="block text-center cursor-pointer	w-40 rounded-md bg-[#FFD35C] mt-4 py-2  text-[#0C0A3E] font-semibold mb-2 shadow-lg border-[1px]" onClick={AddUser}>Submit</button>
                </div>
                <ToastContainer 
                position = {"top-center"}
                autoClose = {false} //3 seconds
                closeOnClick= {true}
                pauseOnHover = {false}
                pauseOnFocusLoss = {false}
                draggable = {false}/>
            </div>
        </div>
        {/* /////////////////google map/////////////////////// */}
        <div className='hidden lg:flex lg:w-full lg:justify-end h-4'>
        <LoadScript
            googleMapsApiKey='AIzaSyDvVOxEFN68R3EuoM2vB2bKyy5sNsyURkI'>
            <div>
                
            </div>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={userLocation ? 17 : 12}
            center={userLocation || defaultCenter} 
            onClick={handleMapClick}>
                {userLocation && <Marker position={userLocation} />}
            </GoogleMap>
        </LoadScript>
        {/* <p>Place Name: {placeName}</p> */}
        </div>
        {/* /////////////////google map/////////////////////// */}

    </div>
    </>
  )
}

export default RentingForm