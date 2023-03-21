import React from 'react'

const Userprofile = () => {
  return(

    {/*Header */}
<section class="py-4 bg-white overflow-hidden">
  <div class="container px-4 mx-auto">
    <a class="flex flex-wrap items-center mb-2 text-neutral-500 hover:text-neutral-600" href="#">
      <svg class="mr-3.5" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.13634 11.197C5.42923 11.4899 5.9041 11.4899 6.197 11.197C6.48989 10.9041 6.48989 10.4292 6.197 10.1363L5.13634 11.197ZM1 6.00001L0.46967 5.46968C0.329018 5.61033 0.25 5.8011 0.25 6.00001C0.25 6.19892 0.329018 6.38969 0.46967 6.53034L1 6.00001ZM6.197 1.86367C6.48989 1.57078 6.48989 1.09591 6.197 0.803013C5.9041 0.51012 5.42923 0.51012 5.13634 0.803013L6.197 1.86367ZM13 6.75001C13.4142 6.75001 13.75 6.41422 13.75 6.00001C13.75 5.5858 13.4142 5.25001 13 5.25001V6.75001ZM6.197 10.1363L1.53033 5.46968L0.46967 6.53034L5.13634 11.197L6.197 10.1363ZM1.53033 6.53034L6.197 1.86367L5.13634 0.803013L0.46967 5.46968L1.53033 6.53034ZM1 6.75001L13 6.75001V5.25001L1 5.25001L1 6.75001Z" fill="currentColor"></path>
      </svg><span>Back to Home</span></a>
    <h1 class="font-heading mb-1 text-2xl font-semibold">User Profile</h1>
  </div>
</section>

{/*Input View */}
<section class="py-4 overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="py-6 px-7 bg-white border rounded-xl">
      <div class="flex flex-wrap justify-between -m-2">
        <div class="w-full sm:w-1/2 p-2">
          <h3 class="font-heading mb-2.5 text-sm font-semibold">Password</h3>
          <div class="relative mb-2.5 overflow-hidden border border-neutral-200 rounded-lg focus-within:border-neutral-600">
            <input class="py-2.5 pl-3.5 pr-11 text-sm w-full hover:bg-gray-50 outline-none placeholder-neutral-400" id="inputsInput16-1" type="text" wtx-context="2C5CC951-B394-44A0-8E49-4E069424B0CA"/>
            <svg class="absolute top-1/2 right-4 transform -translate-y-1/2" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 11.0002C9.99984 12.1047 9.10441 13.0002 7.99984 13.0002C6.89527 13.0002 5.99984 12.1047 5.99984 11.0002C5.99984 9.89559 6.89527 9.00016 7.99984 9.00016C9.10441 9.00016 9.99984 9.89559 9.99984 11.0002Z" stroke="#B8C1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.63867 11.0001C2.48819 8.29541 5.01504 6.3335 8.00013 6.3335C10.9852 6.3335 13.5121 8.29544 14.3616 11.0002C13.5121 13.7049 10.9852 15.6668 8.00014 15.6668C5.01504 15.6668 2.48817 13.7049 1.63867 11.0001Z" stroke="#B8C1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="text-sm text-neutral-400">Minimum 6 characters</p>
        </div>
        <div class="w-full sm:w-1/2 p-2">
          <h3 class="font-heading mb-2.5 text-sm font-semibold">Confirm Password</h3>
          <div class="relative overflow-hidden border border-neutral-200 rounded-lg focus-within:border-neutral-600">
            <input class="py-2.5 pl-3.5 pr-11 text-sm w-full hover:bg-gray-50 outline-none placeholder-neutral-400" id="inputsInput16-2" type="text" wtx-context="03FF3F34-06BF-4BCB-A883-86EF7A46206E"/>
            <svg class="absolute top-1/2 right-4 transform -translate-y-1/2" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 11.0002C9.99984 12.1047 9.10441 13.0002 7.99984 13.0002C6.89527 13.0002 5.99984 12.1047 5.99984 11.0002C5.99984 9.89559 6.89527 9.00016 7.99984 9.00016C9.10441 9.00016 9.99984 9.89559 9.99984 11.0002Z" stroke="#B8C1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.63867 11.0001C2.48819 8.29541 5.01504 6.3335 8.00013 6.3335C10.9852 6.3335 13.5121 8.29544 14.3616 11.0002C13.5121 13.7049 10.9852 15.6668 8.00014 15.6668C5.01504 15.6668 2.48817 13.7049 1.63867 11.0001Z" stroke="#B8C1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-4 overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="py-6 px-7 bg-white border rounded-xl">
      <h3 class="font-heading mb-8 text-sm font-semibold">Alerts &amp; Notifications</h3>
      <div class="flex mb-5">
        <input class="opacity-0 absolute h-5 w-5" id="inputsCheckbox17-1" checked="" type="checkbox" wtx-context="4A76FFF3-2CA0-4ED5-9540-CBE78E438223"/>
        <div class="flex flex-shrink-0 justify-center items-center w-5 h-5 mr-3 text-neutral-200 bg-white border border-neutral-200 rounded">
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <label class="text-sm font-medium" for="inputsCheckbox17-1">Get Dashy news, announcements, and product updates</label>
      </div>
      <div class="flex mb-5">
        <input class="opacity-0 absolute h-5 w-5" id="inputsCheckbox17-2" checked="" type="checkbox" wtx-context="F52CF185-3A02-4906-895B-DE0B8524576F"/>
        <div class="flex flex-shrink-0 justify-center items-center w-5 h-5 mr-3 text-neutral-200 bg-white border border-neutral-200 rounded">
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <label class="text-sm font-medium" for="inputsCheckbox17-2">Get important notifications about you or activity you've missed</label>
      </div>
      <div class="flex">
        <input class="opacity-0 absolute h-5 w-5" id="inputsCheckbox17-3" type="checkbox" wtx-context="E28B8FC3-782E-410D-BB7A-8BB268964676"/>
        <div class="flex flex-shrink-0 justify-center items-center w-5 h-5 mr-3 text-neutral-200 bg-white border border-neutral-200 rounded">
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <label class="text-sm font-medium" for="inputsCheckbox17-3">Get an email when a Dashy Meetup is posted close to my location</label>
      </div>
    </div>
  </div>
</section>



  )
}

export default Userprofile