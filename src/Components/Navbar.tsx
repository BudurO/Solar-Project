import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ImgLogoNavbar from '../assets/navbarlogo.svg'
import ImgeUser from '../assets/User.svg'
function Navbar() {
    // const user = {
    //     name: 'Tom Cook',
    //     email: 'tom@example.com',
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //   }
      const navigation = [
        { name: 'Home', href: '/HomePage', current: false },
        { name: 'Our Vision', href: '#OurVision', current: false },
        { name: 'Contact us', href: '#contactUs', current: false },
        { name: 'Service', href: '#Service', current: false },
      ]
      const userNavigation = [
        // { name: 'Your Profile', href: '#' },
        // { name: 'Settings', href: '#' },
        // { name: 'Sign out', href: '#' },
        { name: 'Log In', href: '/' },
        { name: 'Sign Up', href: '/SingnUp' },

      ]
      function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }
      
  return (
    <>
      <div className="min-h-full">
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
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-bg-white text-white'
                                : 'text-gray-300 hover:bg-bg-white hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
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
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            {/* <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={ImgeUser} alt="" /> */}
                            <a className='ml-4 bg-white px-3 py-2 rounded-md' href='/'>Login</a>
                            <a className='ml-10 bg-white px-3 py-2 rounded-md' href='/SingnUp'>Sign Up</a>

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