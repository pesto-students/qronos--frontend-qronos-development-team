import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (

        <section class="relative py-24 overflow-hidden">
            <img class="absolute bottom-0 left-0" src="gradia-assets/elements/footers/radial.svg" alt="" />
            <div class="relative z-10 container mx-auto px-4">
                <div class="flex flex-wrap -m-6">

                    <div class="w-full md:w-1/2 lg:w-3/12 p-6">
                        <div class="h-full">
                            <h3 class="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">Company</h3>
                            <ul>
                                <li class="mb-4"><Link to="/about"><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700">Aboutus</a></Link></li>
                                <li class="mb-4"><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/12 p-6">
                        <div class="h-full">
                            <h3 class="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">Support</h3>
                            <ul>
                                <li class="mb-4"><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Account</a></li>
                                <li class="mb-4"><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Help</a></li>
                                <li class="mb-4"><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Contact Us</a></li>
                                <li><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Customer Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/12 p-6">
                        <div class="h-full">
                            <h3 class="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">Legals</h3>
                            <ul>
                                <li class="mb-4"><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Terms &amp; Conditions</a></li>
                                <li class="mb-4"><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Privacy Policy</a></li>
                                <li><a class="font-heading font-medium text-base text-gray-900 hover:text-gray-700" href="#">Licensing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:w-3/12 p-6">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <img class="mb-16" src="gradia-assets/images/Logomark.png" alt="" />
                            </div>
                            <div>
                                <p class="mb-4 font-heading font-medium text-base">Making Managing Content Easier,Simpler,Faster.</p>
                                <p class="text-gray-600 text-sm">&copy; Copyright 2022. All Rights Reserved by Qronos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>











    )
}

export default Footer