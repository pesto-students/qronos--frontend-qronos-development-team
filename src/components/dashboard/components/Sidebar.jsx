import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div>
            <nav class="flex xl:hidden items-center justify-between py-3.5 px-7 bg-neutral-50">
                <div class="w-full xl:w-auto px-2 xl:mr-10">
                    <div class="flex items-center justify-between"><a class="inline-flex items-center h-7" href="#"><img src="gradia-assets/images/Logomark.png" alt="" /></a>
                        <div class="xl:hidden">
                            <button class="navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none">
                                <svg width="20" height="12" viewbox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="navbar-menu relative z-50 hidden xl:flex xl:flex-col">
                <div class="navbar-backdrop fixed xl:hidden inset-0 bg-gray-800 opacity-10"></div>
                <div class="fixed inset-0 w-16 bg-white">
                    <div class="flex justify-center py-4 bg-white"><img src="gradia-assets/images/Logomark.png" alt="Logo " /></div>
                    <div class="flex-1 flex flex-col justify-between pt-8 overflow-x-hidden overflow-y-auto">
                        <div class="flex flex-wrap -m-4 pb-8">
                            <div class="w-full p-4"><a class="relative flex justify-center" href="#"><img src="dashy-assets/images/check.svg" alt="" /></a></div>
                            <div class="w-full p-4"><a class="flex justify-center" href="#"><img src="dashy-assets/images/inbox.svg" alt="" /></a></div>
                            <div class="w-full p-4"><a class="flex justify-center" href="#"><img src="dashy-assets/images/paper-airplane.svg" alt="" /></a></div>
                            <div class="w-full p-4"><a class="relative flex justify-center" href="#">

                                <img src="dashy-assets/images/academic-cap.svg" alt="" /></a></div>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-full p-4"><a class="flex justify-center" href="#"><img src="dashy-assets/images/question-mark-circle.svg" alt="" /></a></div>
                            <div class="w-full p-4"><a class="flex justify-center" href="#"><img src="dashy-assets/images/cog.svg" alt="" /></a></div>
                            <div class="w-full mt-36"><a class="flex justify-center" href="#">
                                <img src="dashy-assets/images/avatar2.png" alt="" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar