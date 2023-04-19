import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { LocalStorage, LocalStorageKeys } from '../../utils/LocalStorage';
const Header = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const [open, setopen] = useState(false);

    const logoutFun = () => {
        logout({ logoutParams: { returnTo: window.location.origin } })
            .then(() => {
                LocalStorage.clear()
            })
    }

    return (
        <header>



            <nav class="px-10 py-8 bg-transparent">
                <div class="flex justify-between items-center">
                    <Link to="/">  <div class="text-gray-600 text-2xl leading-none" >
                        <img class="h-8" src="https://static.shuffle.dev/uploads/files/aa/aa76bc6a36158b7ac4204a7b269a276536be45f7/Logomark.png" alt="" width="auto" contenteditable="false" />
                    </div> </Link>
                    <div class="lg:hidden">
                        <button class="block navbar-burger text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => setopen(true)}>
                            <svg class="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul class="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">

                        <Link to="/">  <li><p class="text-sm text-black hover:text-gray-700" >Home</p></li></Link>
                        <Link to="/about"><li><p class="text-sm text-black hover:text-gray-700" >About</p></li></Link>
                    </ul>
                    {
                        (isAuthenticated || LocalStorage.get(LocalStorageKeys.USER_DETAILS)) ?
                            (<div class="flex">
                                <button class="hidden mr-2 bg-black text-white font-bold text-sm lg:block px-6 py-3" onClick={() => logoutFun()}>Logout</button>
                                <Link to="/dashboard"> <button class="hidden bg-black text-white font-bold text-sm lg:block px-6 py-3">Dashboard</button></Link>
                            </div>
                            ) :
                            (<button class="hidden bg-black text-white font-bold text-sm lg:block px-6 py-3" onClick={() => loginWithRedirect()}>Login</button>)
                    }
                    {/* <button class="hidden lg:block px-6 py-3 text-sm text-white hover:text-gray-700 font-bold border border-gray-100 rounded bg-black" contenteditable="false">Sign up</button> */}
                </div>
                <div class={`navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${open ? "absolute" : "hidden"}`}>
                    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
                        <div class="flex items-center mb-8">
                            <Link to="/" class="mr-auto text-2xl font-semibold leading-none" >
                                <img class="h-8" src="https://static.shuffle.dev/uploads/files/aa/aa76bc6a36158b7ac4204a7b269a276536be45f7/Logomark.png" alt="" width="auto" />
                            </Link>
                            <button class="navbar-close" onClick={() => setopen(false)}  >
                                <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <Link><li class="mb-1"><p class="block p-4 text-sm font-semibold bg-white text-red-900 hover:bg-gray-50 rounded" >Home</p></li></Link>
                                <Link><li class="mb-1"><p class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" >About</p></li></Link>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <div class="pt-6">
                                <button onClick={() => loginWithRedirect()}>  <a class="block px-6 py-2 mb-3 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" >Sign In</a></button>
                                <button onClick={() => logoutFun()}>  <a class="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded" href="#">Sign up</a></button></div>
                            <p class="mt-6 mb-4 text-sm text-center text-gray-400">
                                <span>© 2021 All rights reserved.</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </nav >













        </header >







    )
}

export default Header