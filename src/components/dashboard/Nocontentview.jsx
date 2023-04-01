import React from 'react'
import { useState, useRef } from 'react'
import Sidebar from './components/Sidebar'
const Nocontentview = () => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileInputChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    return (

        <div class="relative">
            <Sidebar />
            <div class="mx-auto xl:ml-2 mr-2 xl:pl-4">

                <section class="overflow-hidden">
                    <div class="container mx-auto">
                        <div class="bg-white border rounded-xl">
                            <div class="flex divide-y sm:divide-y-0 sm:divide-x justify-center p-5">

                                <div class="w-full sm:w-1/2">
                                    <div class="text-center p-2 border-blue-200">
                                        <img class="mb-7 mx-auto" src="https://static.shuffle.dev/uploads/files/44/4434a55ce5c9032641506a0553453f21d76da99a/Group-1073.png" alt="" />
                                        <input type="file" id="fileInput" onChange={handleFileInputChange} ref={fileInputRef} class="mb-3 font-heading text-lg font-semibold hidden" />

                                        <button class="inline-flex flex-wrap items-center justify-center px-6 py-2.5 border hover:border-neutral-200 rounded-lg bg-purple-200 text-lg font-bold" onClick={handleButtonClick}>
                                            <svg class="mr-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.74935 2.66663C8.74935 2.25241 8.41356 1.91663 7.99935 1.91663C7.58514 1.91663 7.24935 2.25241 7.24935 2.66663H8.74935ZM7.24935 13.3333C7.24935 13.7475 7.58514 14.0833 7.99935 14.0833C8.41356 14.0833 8.74935 13.7475 8.74935 13.3333H7.24935ZM13.3327 8.74996C13.7469 8.74996 14.0827 8.41417 14.0827 7.99996C14.0827 7.58575 13.7469 7.24996 13.3327 7.24996L13.3327 8.74996ZM2.66602 7.24996C2.2518 7.24996 1.91602 7.58575 1.91602 7.99996C1.91602 8.41417 2.2518 8.74996 2.66602 8.74996L2.66602 7.24996ZM7.24935 2.66663V13.3333H8.74935V2.66663H7.24935ZM13.3327 7.24996L2.66602 7.24996L2.66602 8.74996L13.3327 8.74996L13.3327 7.24996Z" fill="#0C1523"></path>
                                            </svg><span class="font-medium">Add A Asset</span></button>
                                        {file && <p>Selected file: {file.name}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>




    )
}

export default Nocontentview