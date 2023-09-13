import { Disclosure, Menu} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ImgLogoNavbar from '../assets/navbarlogo.svg'
import { useNavigate } from 'react-router-dom'
function NavbarHome() {
    // const user = {
    //     name: 'Tom Cook',
    //     email: 'tom@example.com',
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //   }
      const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Our Vision', href: '#OurVision', current: false },
        { name: 'Contact us', href: '#contactUs', current: false },
        { name: 'Service', href: '#Service', current: false },
      ]
      // const userNavigation = [
      //   // { name: 'Your Profile', href: '#' },
      //   // { name: 'Settings', href: '#' },
      //   // { name: 'Sign out', href: '#' },
      //   { name: 'Log In', href: '/' },
      //   { name: 'Sign Up', href: '/SingnUp' },

      // ]
      function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }
      const nav = useNavigate();

      const isLogin= localStorage.getItem("isLogin")
      // const isLoginAdmin = localStorage.getItem("isLoginAdmin")
      const getName= localStorage.getItem("Name")
      const LogOut=()=>{
        localStorage.setItem("isLogin","false")
        nav("/login")
      }
      // const LogOutAdmin = ()=>{
      //   localStorage.setItem("isLoginAdmin","false")
      //   nav("/")
      // }
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#0C0A3E] lg:h-20 lg:pt-2">
          {({ open }) => (
            <>
              <div className="mx-auto  px-4 sm:px-6 lg:px-4 xl:px-4 md:px-4">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                     <a href='/'> <img
                        className="h-11"
                        src={ImgLogoNavbar}
                        alt="Solar"
                      /></a>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-bg-white text-white text-sm font-medium lg:text-lg xl:text-lg md:text-sm'
                                : 'text-gray-300 hover:bg-bg-white hover:text-white text-sm font-medium lg:text-lg xl:text-lg md:text-sm sm:text-sm',
                              'rounded-md px-3 py-2'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                     

                      {/* Profile dropdown */}
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
                            </div>:<a className='ml-4 bg-white px-3 py-2 rounded-md text-sm lg:text-lg xl:text-lg md:text-sm' href='/login'>Login</a>}
                            {isLogin=="true"?<a className='ml-6 bg-white px-3 py-2 rounded-md text-sm lg:text-lg xl:text-lg md:text-sm' onClick={LogOut}>Logout</a>:<a className='ml-10 bg-white px-3 py-2 rounded-md' href='/SingnUp'>Sign Up</a>}
                            {/* {isLoginAdmin=="true"?<div className='flex justify-between '>
                                <div className='ml-3'>
                                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="white"></path> <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" fill="white"></path> </svg>
                                </div>
                            <div className=' text-[#FEB221] font-medium underline underline-offset-2 ml-3'>
                                <a href="/RequestListAdmin">{getName}</a>
                            </div>
                            </div>:<a className='ml-4 bg-white px-3 py-2 rounded-md' href='/'>Login</a>}
                            {isLoginAdmin=="true"?<a className='ml-4 bg-white px-3 py-2 rounded-md' onClick={LogOutAdmin}>Logout</a>:<a className='ml-10 bg-white px-3 py-2 rounded-md' href='/SingnUp'>Sign Up</a>} */}
                          </Menu.Button>
                        </div>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden z-50">
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

              <Disclosure.Panel className="md:hidden bg-[#0C0A3E]">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-white text-[#0C0A3E]' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    
                  {isLogin=="true"?<div className='flex justify-between '>
                                <div className=''>
                                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="white"></path> <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" fill="white"></path> </svg>
                                </div>
                            <div className=' text-[#FEB221] font-medium underline underline-offset-2 ml-3'>
                              <a href="/dashboard">{getName}</a>
                            </div>
                            </div>:<a className='relative flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white' href='/SingnUp'>Sign Up</a>}
                    
                    
                  </div>
                  
                  
                </div>

                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">

                  {isLogin=="true"?<a className='relative  flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white' onClick={LogOut}>Logout</a>:<a className='relative flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white' href='/login'>Login</a>}

                    {/* <div>
                      <a className='relative ml-auto flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white' href='/'>Login</a>
                    </div> */}
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
       
      </div>
    </>
  )
}
export default NavbarHome