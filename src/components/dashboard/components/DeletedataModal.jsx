import React from 'react'

const DeletedataModal = () => {
  return (
  
<section class="fixed inset-0 z-50 flex items-center justify-center flex-wrap py-20 bg-neutral-500 bg-opacity-80 overflow-y-auto">
  <div class="container px-4 mx-auto">
    <div class="pt-5 px-6 pb-6 max-w-lg mx-auto bg-white border rounded-xl shadow-3xl">
      <div class="flex flex-wrap justify-between -m-2">
        <div class="flex-1 sm:w-1/2 p-2">
          <h3 class="font-heading mb-2 text-lg font-semibold">Are you sure to remove this data?</h3>
          <p class="mb-12 text-neutral-500">We’re working on improvements to team insights and would love your feedback.</p>
          <div class="flex flex-wrap -m-2">
            <div class="w-auto p-2"><a class="inline-flex px-5 py-2.5 text-sm text-neutral-50 font-medium rounded-lg transition duration-300 bg-black" href="#">Yes, Remove</a></div>
            <div class="w-auto p-2"><a class="inline-flex px-5 py-2.5 text-sm font-medium border border-neutral-200 hover:border-neutral-300 rounded-lg" href="#">Cancel</a></div>
          </div>
        </div>
        <div class="w-auto p-2"><a class="text-neutral-300 hover:text-neutral-400" href="#">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.96967 12.9697C3.67678 13.2626 3.67678 13.7374 3.96967 14.0303C4.26256 14.3232 4.73744 14.3232 5.03033 14.0303L3.96967 12.9697ZM14.0303 5.03033C14.3232 4.73744 14.3232 4.26256 14.0303 3.96967C13.7374 3.67678 13.2626 3.67678 12.9697 3.96967L14.0303 5.03033ZM5.03033 3.96967C4.73744 3.67678 4.26256 3.67678 3.96967 3.96967C3.67678 4.26256 3.67678 4.73744 3.96967 5.03033L5.03033 3.96967ZM12.9697 14.0303C13.2626 14.3232 13.7374 14.3232 14.0303 14.0303C14.3232 13.7374 14.3232 13.2626 14.0303 12.9697L12.9697 14.0303ZM5.03033 14.0303L14.0303 5.03033L12.9697 3.96967L3.96967 12.9697L5.03033 14.0303ZM3.96967 5.03033L12.9697 14.0303L14.0303 12.9697L5.03033 3.96967L3.96967 5.03033Z" fill="currentColor"></path>
          </svg></a></div>
      </div>
    </div>
  </div>
</section>
  )
}

export default DeletedataModal