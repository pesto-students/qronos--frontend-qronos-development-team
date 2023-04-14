import React from 'react'
import * as Sentry from '@sentry/react';
const MediaLoadFiles = ({
    allFiles
}) => {

    // console.log(allFiles);

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
                <div class="flex flex-wrap -m-3">
                    {
                        allFiles?.length > 0
                        && allFiles.map((item) => (
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
                                <a href={item.previewLink}>
                                    <img class="mb-4 w-full" src={item.previewLink} alt={item.Key.split('/')[1]} />
                                    <div class="flex flex-wrap items-center justify-between -m-2">
                                        <div class="w-auto p-2">
                                            <h3 class="font-heading text-sm font-semibold">{item.Key.split('/')[1].length > 17 ? `${item.Key.split('/')[1].substr(0, 17)}...` : item.Key.split('/')[1]}</h3>
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
                </div>
            </div>
        </section>
    )
}

//export default MediaLoadFiles
export default Sentry.withProfiler(MediaLoadFiles, { name: "Qronosmediaupload" });