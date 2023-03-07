import React from 'react'
import Logo from "./svgs/canvas_details.svg";
const CalltoAction = () => {
    const myStyles = {
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    };

    return (


        <section style={myStyles} class="pt-24 pb-28 bg-white overflow-hidden">
            <div class="container mx-4 p-32">
                <div class="text-center max-w-lg mx-auto">
                    <h2 class="mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">Collaborate efficiently with the teams today</h2>
                    <p class="mb-7 text-lg text-gray-600 font-medium">Amet minim mollit non deserunt ullamco.</p>
                    <div class="mb-11 md:inline-block">
                        <button class="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Join Free for 30 Days</button>
                    </div>
                    <div class="flex flex-wrap items-center justify-center -m-1">
                        <div class="w-auto p-1">
                            <div class="flex flex-wrap">
                                <div class="w-auto">
                                    <img src="flaro-assets/images/cta/avatar-circle.png" alt="" />
                                </div>
                                <div class="w-auto -ml-3">
                                    <img src="flaro-assets/images/cta/avatar-circle2.png" alt="" />
                                </div>
                                <div class="w-auto -ml-3">
                                    <img src="flaro-assets/images/cta/avatar-circle3.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="w-auto p-1">
                            <p class="text-gray-600 font-medium">
                                <span>Join</span>
                                <span class="font-bold">250+</span>
                                <span>other startup founders</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CalltoAction