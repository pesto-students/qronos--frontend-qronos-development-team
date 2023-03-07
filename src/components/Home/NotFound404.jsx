import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
const NotFound404 = () => {
    return (
        <div>
            <Header />

            <section class="relative lg:py-20">
                <img class="lg:absolute lg:top-0 lg:right-0 h-112 w-full lg:w-5/12 mb-12 lg:mb-0 object-cover" src="gradia-assets/images/Saly-16.png" alt="" />
                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full lg:w-7/12 my-12 text-center">
                            <span class="text-xs font-bold text-gray-200 uppercase">Error 404</span>
                            <h2 class="mb-2 text-4xl lg:text-8xl font-bold font-heading">Whoops Page is Gone !:</h2>
                            <p class="mb-6 text-lg text-gray-500 leading-loose">Sorry! We are unable to find the page you are looking for</p>
                            <div class="flex flex-wrap justify-center">

                                <Link><button class="px-6 py-2 mr-4 bg-black hover:bg-gray-600 text-sm leading-loose text-white font-semibold rounded" >Go Back</button></Link>
                                <Link><button class="px-6 py-2 border hover:border-gray-400 text-sm font-semibold leading-loose rounded">Contat Us</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>



    )
}

export default NotFound404