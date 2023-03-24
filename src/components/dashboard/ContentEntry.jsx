import React from 'react'
import Sidebar from './components/Sidebar'
const ContentEntry = () => {
    return (
        <body>

            <div class="relative">
                <Sidebar />
                <div class="mx-auto xl:ml-16 xl:pl-4">

                    <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
                        <div class="px-8 py-6 bg-white overflow-hidden border rounded-xl">
                            <a class="flex flex-wrap items-center mb-2 text-neutral-500 hover:text-neutral-600" href="#">
                                <svg class="mr-3.5" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.13634 11.197C5.42923 11.4899 5.9041 11.4899 6.197 11.197C6.48989 10.9041 6.48989 10.4292 6.197 10.1363L5.13634 11.197ZM1 6.00001L0.46967 5.46968C0.329018 5.61033 0.25 5.8011 0.25 6.00001C0.25 6.19892 0.329018 6.38969 0.46967 6.53034L1 6.00001ZM6.197 1.86367C6.48989 1.57078 6.48989 1.09591 6.197 0.803013C5.9041 0.51012 5.42923 0.51012 5.13634 0.803013L6.197 1.86367ZM13 6.75001C13.4142 6.75001 13.75 6.41422 13.75 6.00001C13.75 5.5858 13.4142 5.25001 13 5.25001V6.75001ZM6.197 10.1363L1.53033 5.46968L0.46967 6.53034L5.13634 11.197L6.197 10.1363ZM1.53033 6.53034L6.197 1.86367L5.13634 0.803013L0.46967 5.46968L1.53033 6.53034ZM1 6.75001L13 6.75001V5.25001L1 5.25001L1 6.75001Z" fill="currentColor"></path></svg><span>Back to Home</span></a>
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-full md:w-1/2 p-2">
                                    <h3 class="font-heading mb-1.5 text-lg font-semibold" contenteditable="false">Enter the Content</h3>

                                </div>
                                <div class="w-full md:w-1/2 p-2">
                                    <div class="flex flex-wrap md:justify-end">
                                        <div class="w-auto"><a class="inline-flex flex-wrap items-center justify-center px-5 py-2.5 w-full font-medium text-sm text-center text-neutral-50 hover:text-neutral-100 bg-neutral-600 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400" href="#">Change Plans</a></div>
                                        <div class="w-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
                        <div class="py-6 px-7 bg-white border rounded-xl">
                            <div class="flex flex-wrap justify-between -m-2">


                                <div class="w-full mx-auto">
                                    <form wtx-context="B2AA524A-3F11-4A0A-BEFF-1067905C74A8">
                                        <div class="mb-4">
                                            <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Email" wtx-context="52004ED7-20BD-498D-BBEB-69EA2861AA46" /></div>
                                        <div class="mb-4">
                                            <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="password" placeholder="Password" wtx-context="913BE545-016D-4F6D-8141-647B5DC92F84" /></div>
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Text input</label>
                                        <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Enter text" wtx-context="EC02D531-93E4-4784-8CF9-FAA1DC462EDC" />
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Example textarea</label>
                                        <textarea class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write something..." rows="5"></textarea>
                                        <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="file" placeholder="Upload File" wtx-context="E70964FE-6D19-45CC-9BC2-2C6FE4EEA083" />
                                        <div class="mb-4">
                                            <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">Submit</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    </section>




                </div>



            </div>
        </body>











    )
}

export default ContentEntry