import React from 'react'

const MediaLoadFiles = ({
    allFiles
}) => {

    console.log(allFiles);

    const formatFileSize = (bytes) => {
        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        } else if (bytes >= 1000) {
            return (bytes / 1000).toFixed(2) + ' KB';
        } else {
            return bytes + ' bytes';
        }
    }

    return (
        <section class="py-4 bg-white overflow-hidden">
            <div class="container mx-auto px-5 py-5">
                {/* <a class="group mb-2 inline-flex items-center text-sm" href="#">
                    <svg class="mr-3 text-neutral-500 group-hover:text-neutral-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.13634 13.197C6.42923 13.4899 6.9041 13.4899 7.197 13.197C7.48989 12.9041 7.48989 12.4292 7.197 12.1363L6.13634 13.197ZM2 7.99998L1.46967 7.46965C1.32902 7.6103 1.25 7.80107 1.25 7.99998C1.25 8.19889 1.32902 8.38966 1.46967 8.53031L2 7.99998ZM7.197 3.86364C7.48989 3.57075 7.48989 3.09588 7.197 2.80298C6.9041 2.51009 6.42923 2.51009 6.13634 2.80298L7.197 3.86364ZM14 8.74998C14.4142 8.74998 14.75 8.41419 14.75 7.99998C14.75 7.58577 14.4142 7.24998 14 7.24998V8.74998ZM7.197 12.1363L2.53033 7.46965L1.46967 8.53031L6.13634 13.197L7.197 12.1363ZM2.53033 8.53031L7.197 3.86364L6.13634 2.80298L1.46967 7.46965L2.53033 8.53031ZM2 8.74998L14 8.74998V7.24998L2 7.24998L2 8.74998Z" fill="currentColor"></path>
                    </svg>
                    <span class="text-neutral-500 group-hover:text-neutral-600">Back to Home</span>
                </a> */}

                <div class="flex flex-wrap -m-3">
                    {
                        allFiles?.length > 0
                        && allFiles.map((item) => (
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
                                <a href={item.previewLink}>
                                    <img class="mb-4 w-full" src={item.previewLink} alt={item.Key.split('/')[1]} />
                                    <div class="flex flex-wrap items-center justify-between -m-2">
                                        <div class="w-auto p-2">
                                            <h3 class="font-heading text-sm font-semibold">{item.Key.split('/')[1]}</h3>
                                        </div>
                                        <div class="w-auto p-2">
                                            <div class="w-auto p-2">
                                                <p class="text-xs text-neutral-400">{formatFileSize(item.Size)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                    {/* <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media2.png" alt="" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media3.png" alt="" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media4.png" alt="" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media5.png" alt="" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media6.png" alt="" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media7.png" alt="" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media8.png" alt="" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media9.png" alt="" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3"><a href="#">
                        <img class="mb-4 w-full" src="dashy-assets/images/table-grid-media10.png" alt="image" />
                        <div class="flex flex-wrap items-center justify-between -m-2">
                            <div class="w-auto p-2">
                                <h3 class="font-heading text-sm font-semibold">Image 001</h3>
                            </div>
                            <div class="w-auto p-2">
                                <p class="text-xs text-neutral-400">1.04 MB</p>
                            </div>
                        </div></a></div> */}
                </div>
            </div>
        </section>
















    )
}

export default MediaLoadFiles