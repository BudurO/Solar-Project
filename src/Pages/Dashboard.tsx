import Navbar from '../Components/Navbar';
import UserRequest from '../Components/UserRequest';
import UserSide from '../Components/UserSide';
import Footer from '../Components/Footer';

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
        <div className="flex flex-col h-screen bg-gray-100 w-full">
            <div className="bg-white w-full h-1"></div>
            <div className="flex-1 flex flex-wrap">
                <UserSide/>
                <div className="flex-1 p-4 lg:w-full md:w-1/2 ">
                    <div className=" bg-white pb-4 shadow rounded-lg lg:w-full md:w-full w-full">
                        <UserRequest/>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-1 bg-white'></div>
        <Footer/>
        </>
    )
}

export default Dashboard