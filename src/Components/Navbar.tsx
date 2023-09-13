import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ImgLogoNavbar from '../assets/navbarlogo.svg'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    
      const nav = useNavigate();

      const userNavigation = [
        
        { name: 'Log In', href: '/' },
        { name: 'Sign Up', href: '/SingnUp' },

      ]
      function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }
      const isLogin= localStorage.getItem("isLogin")
      const isLoginAdmin = localStorage.getItem("isLoginAdmin")
      const getName= localStorage.getItem("Name")
      const LogOut=()=>{
        localStorage.setItem("isLogin","false")
        nav("/")
      }
    //   const LogOutAdmin = ()=>{
    //     localStorage.setItem("isLoginAdmin","false")
    //     nav("/")
    //   }
  return (
    <>

      <div className="min-h-full mb-4">

        <Disclosure as="nav" className="bg-[#0C0A3E]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                     <a href='/HomePage'> <img
                        className="h-11"
                        src={ImgLogoNavbar}
                        alt="Solar"
                      /></a>
                    </div>
                    
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                     

                      <Menu as="div" className="relative ml-3">
                        <div className=''>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full text-sm">
                            {/* <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={ImgeUser} alt="" /> */}
                            {isLogin=="true"?<div className='flex justify-between '>
                                <div className='ml-3'>
                                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="white"></path> <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" fill="white"></path> </svg>
                                </div>
                            <div className=' text-[#FEB221] font-medium underline underline-offset-2 ml-3'>
                                <a href="/dashboard">{getName}</a>
                            </div>
                            </div>:<a className='ml-4 bg-white px-3 py-2 rounded-md' href='/'>Login</a>}
                            {isLogin=="true"?<a className='ml-4 bg-white px-3 py-2 rounded-md' onClick={LogOut}>Logout</a>:<a className='ml-10 bg-white px-3 py-2 rounded-md' href='/SingnUp'>Sign Up</a>}
                            {/* {isLoginAdmin=="true"?<div className='flex justify-between '>
                                <div className='ml-3'>
                                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="white"></path> <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" fill="white"></path> </svg>
                                </div>
                            <div className=' text-[#FEB221] font-medium underline underline-offset-2 ml-3'>
                                <a href="/RequestListAdmin">{getName}</a>
                            </div>
                            </div>:<a className='ml-4 bg-white px-3 py-2 rounded-md' href='/'>Login</a>}
                            {isLoginAdmin=="true"?<a className='ml-4 bg-white px-3 py-2 rounded-md' onClick={LogOutAdmin}>Logout</a>:<a className='ml-10 bg-white px-3 py-2 rounded-md' href='/SingnUp'>Sign Up</a>}
                             */}

                          </Menu.Button>
                        </div>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    {/* <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full" src={ImgeUser} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div> */}
                    <div>
                      <a className='relative ml-auto flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white' href='/SingnUp'>Sign Up</a>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                    </button>
                  </div>
                  
                  {/* <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div> */}
                </div>

                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    {/* <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full" src={ImgeUser} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div> */}
                    <div>
                      <a className='relative ml-auto flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white' href='/'>Login</a>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                    </button>
                  </div>
                  
                  {/* <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
       
      </div>
    </>
  )
}
export default Navbar