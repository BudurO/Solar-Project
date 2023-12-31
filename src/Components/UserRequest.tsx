import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
type InfoRent={
    id?:string,
    Area?: string,
    Locaiton:{placeName:string},
    State?:string,
    Number?:string,
    Name?:string,
}
function UserRequest() {
    const [Info, setInfo] = React.useState<InfoRent[]>([]);

    React.useEffect(()=>{
        axios.get("https://64f37a17edfa0459f6c69e5b.mockapi.io/Rent")
    .then((res)=>{
        setInfo(res.data);
    }) 
    },[])
    let cunt= 1;

    const deleteRent=(id:string)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://64f37a17edfa0459f6c69e5b.mockapi.io/Rent/${id}`)
                .then((res)=>{
                    setInfo(res.data)
                    setInfo(
                        Info.filter((del)=>{
                            return del.id !== id;
                        }
                        )
                    )
                })
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
        
    }
    const getName = localStorage.getItem("Name")
  return (
    <>
        <table className="lg:w-full table-auto text-sm mb-4 md:w-full">
                            <thead className='bg-yellow-200 rounded-t-lg lg:w-full md:w-72  h-14 pt-2'>
                                <tr className="text-sm leading-normal w-[20vw] lg:w-full md:w-1/2">
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase  text-[.5rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">ID</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.5rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">House address</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.5rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">Status</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.5rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">Phone</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.5rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">Area of roof</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className=' border border-solid border-gray-300 h-16'>
                            
                                {Info.map((item)=>{
                                    if(item.Name===getName){
                                        return(
                                            <tr className="hover:bg-grey-lighter" key={item.id}>
                                                <td className="py-2 px-4 border-b border-grey-light border border-dashed  rounded-full h-10 w-10 text-[.3rem] lg:text-sm md:text-sm">#{cunt++}</td>
                                                <td className="py-2 px-4 border-b border-grey-light border-r text-[.3rem] lg:text-sm md:text-sm font-semibold lg:font-normal md:font-normal">{item.Locaiton.placeName}</td>
                                                <td className="py-2 px-4 border-b border-grey-light border-r text-[.3rem] lg:text-sm md:text-sm font-semibold lg:font-normal md:font-normal">{item.State}</td>
                                                <td className="py-2 px-4 border-b border-grey-light border-r text-[.3rem] lg:text-sm md:text-sm font-semibold lg:font-normal md:font-normal">{item.Number}</td>
                                                <td className="py-2 px-4 border-b border-grey-light border-r text-[.3rem] lg:text-sm md:text-sm font-semibold lg:font-normal md:font-normal">{item.Area}<span className='ml-4'>m²</span></td>
                                                <td className=" px-2 border-b border-grey-light">
                                                    <button onClick={()=> deleteRent(String(item.id))} className="text-white bg-red-700  focus:ring-4 focus:ring-blue-300 font-medium text-[.3rem] lg:w-8 lg:h-7 w-5 h-7 text-center flex items-center justify-center rounded-lg ">
                                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className=" lg:w-4 lg:h-4 w-3 h-3 " viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })}
                                
                                
                                
                            </tbody>
                        </table>
    </>
  )
}

export default UserRequest