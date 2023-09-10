import axios from 'axios';
import React from 'react'
type InfoRent={
    id:string,
    Area: string,
    Locaiton:{placeName:string},
    State:string,
    Number:string,
    Name:string,
}
function RequestListAdmin() {
    const [Info, setInfo] = React.useState<InfoRent[]>([]);
    React.useEffect(()=>{
        axios.get("https://64f37a17edfa0459f6c69e5b.mockapi.io/Rent")
    .then((res)=>{
        setInfo(res.data);
    }) 
    },[])
    let cunt= 1;
    const deleteRent=(id:string)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://64f37a17edfa0459f6c69e5b.mockapi.io/Rent/${id}`)
        .then((res)=>{
            console.log(res)
            setInfo(
                Info.filter((del)=>{
                    return del.id !== id;

                }
                )
                )
        })
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
          
    }
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
                        <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200  hover:bg-white  hover:text-[#0C0A3E]" href="#">
                            <i className="fas fa-file-alt mr-2"></i>Personal information
                        </a>
                        <a className="block  py-2.5 px-4 my-4 rounded transition duration-200  bg-white text-[#0C0A3E]" href="#">
                            <i className="fas fa-users mr-2"></i>Request history
                        </a>
                    </nav>
                </div>
                <div className="flex-1 p-4 lg:w-full md:w-1/2 ">
                    <div className=" bg-white pb-4 shadow rounded-lg lg:w-full md:w-full w-auto">
                        <table className="lg:w-full table-auto text-sm mb-4 md:w-1/2 w-[10]">
                            <thead className='bg-yellow-200 rounded-t-lg lg:w-full md:w-full w-auto'>
                                <tr className="text-sm leading-normal w-[20vw] lg:w-full md:w-1/2">
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase  text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm">ID</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">House address</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">Status</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">Phone</th>
                                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">Area of roof</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                {Info.map((item)=>{
                                    return(
                                        <tr className="hover:bg-grey-lighter" key={item.id}>
                                            <td className="py-2 px-4 border-b border-grey-light border border-dashed  rounded-full h-10 w-10 text-[.4rem] lg:text-sm md:text-sm">#{cunt++}</td>
                                            <td className="py-2 px-4 border-b border-grey-light border-r text-[.4rem] lg:text-sm md:text-sm">{item.Locaiton.placeName}</td>
                                            <td className="py-2 px-4 border-b border-grey-light border-r text-[.4rem] lg:text-sm md:text-sm">{item.State}</td>
                                            <td className="py-2 px-4 border-b border-grey-light border-r text-[.4rem] lg:text-sm md:text-sm">{item.Number}</td>
                                            <td className="py-2 px-4 border-b border-grey-light border-r text-[.4rem] lg:text-sm md:text-sm">{item.Area}</td>
                                            <td className="py-2 px-4 border-b border-grey-light">
                                                <button onClick={()=> deleteRent(String(item.id))} className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[.4rem] px-3 py-2 text-center inline-flex items-center  dark:bg-red-600 dark:hover:bg-red-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className=" w-4 h-4 " viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-1 bg-white'></div>
    </>
  )
}

export default RequestListAdmin