import UserSide from '../Components/UserSide'
import User from '../Components/User'
function PersonalInfo() {
    
    
    
    
        
        // React.useEffect(()=>UpdateInfo(getId),[])
        localStorage.setItem("Page","userInfo")
    const isLogin = localStorage.getItem("isLogin")
    if(isLogin!="true"){
        location.href="/"
    }
    return (
        <>
        <div className="flex flex-col h-screen bg-gray-100">
                <div className="bg-white w-full h-1"></div>
                <div className="flex-1 flex flex-wrap">
                    <UserSide/>
                    <div className=' flex flex-col ml-10 mt-8'>
                        <div className=' text-lg font-black mb-5'>
                            <h2>Personal information</h2>
                        </div>
                        <User/>
                    </div>
                </div>
        </div>
            <div className='h-1 bg-white'></div>
        </>
    )
}

export default PersonalInfo