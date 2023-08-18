import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import imgSignIn from '../assets/SignInIcon.svg'
import FlyoutMenu from './flyoutMenu/flyoutMenu'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <Disclosure as="nav" className="bg-[#003F62] ">
            {({ open }) => (

                <>
                    <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 ">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            {/* Logo Image*/}
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>

                                {/* Itens de navegacao*/}
                                <div className="hidden sm:ml-6 sm:block">

                                    <div className="flex space-x-4">
                                        <div>
                                            <FlyoutMenu />
                                        </div>

                                        {/* Search Bar*/}
                                        <div class="flex items-center justify-center">
                                            <input type="text" placeholder="Pesquisar" className="border border-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:border-blue-500" />
                                            <button class="absolute right-0 top-0 mt-2 mr-2">
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                                <button
                                    type="button"
                                    className=" no-underline flex rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">Your Shopping Cart</span>
                                    <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                                    <a className='flex text-xs rounded-full px-2 py-1 text-sm font-medium text-white bg-yellow-600 sm:ml-2 no-underline'>0</a>
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-8 " >
                                    <div>
                                        <Menu.Button className=" flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Sign In</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={imgSignIn}
                                                alt=""
                                            />
                                            <a className='rounded-md px-3 py-2 text-xs font-medium text-white no-underline'>Sign In</a>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline ')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
