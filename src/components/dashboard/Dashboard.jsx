import React from 'react'
import './dashboard.css'
import { useState } from 'react'
import DashbordHomeview from './components/DashbordHomeview'
import Contentview from './components/Contentview'
import Userprofile from './components/Userprofile'
import LoadImages from './components/LoadImages'
import APIview from './components/APIview'
const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [open, setopen] = useState(true)
  const Menus = [
    {
      title: "Dashboard", icon: "dashy-assets/images/adjustments.svg"
    },
    { title: "API", spacing: true, icon: "dashy-assets/images/cog.svg" },
    { title: "MediaLibrary", icon: "dashy-assets/images/bell.svg", },
    { title: "User", icon: "dashy-assets/images/bell.svg" },
    { title: "Medialibrary" },
    { title: "Documentation", icon: "dashy-assets/images/question-mark-circle.svg" },
    {
      title: "Settings",
      spacing: true,
      submenuitems: [
        { title: "api" },
        { title: "users" }
      ],
      icon: "dashy-assets/images/user-circle.svg"
    }

  ]

  const handleTitleClick = (title) => {
    setActiveComponent(title);
  };




  return (

    <body class="antialiased bg-body text-body font-body">



      <section class="flex">

        <div class={` bg-gray-200 p-5 ${open ? "w-50" : "w-20"} rounded-lg duration-300 relative `}>


          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`bg-red-100 rounded-full absolute bottom-9  ${!open && "rotate-180"} -right-2 border-black-500 w-6 h-6`} onClick={() => setopen(!open)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>

          <div >
            <img src="gradia-assets/images/Logomark.png" alt="Logo" class={`w-20 duration-300 ${open && "rotate-[360deg]"}   `} />
          </div>
          <ul class="pt-2">
            {Menus.map(menu => (
              <li class="flex text-gray-500 text-sm items-center gap-x-4 cursor-pointer p-2 hover:bg-light-red" onClick={() => handleTitleClick(menu.title)}>
                <img src={menu.icon} alt="icons" class={`relative ${!open ? "w-18" : "w-50"}`} />
                <span class={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
              </li>
            ))}
          </ul>



        </div>

        {/*    <nav class="flex xl:hidden items-center justify-between py-3.5 px-7 bg-neutral-50">
            <div class="w-full xl:w-auto px-2 xl:mr-10">
              <div class="flex items-center justify-between">
                <p class="inline-flex items-center h-7">
                  <img src="gradia-assets/images/Logomark.png" alt="" />
                </p>
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
            <div class="navbar-backdrop fixed xl:hidden inset-0 bg-gray-800 opacity-10">
            </div>
            <div class="fixed inset-0 w-16 bg-white">
              <div class="flex justify-center py-4 bg-white"><img src="gradia-assets/images/Logomark.png" alt="" /></div>
              <div class="flex-1 flex flex-col justify-between pt-8 overflow-x-hidden overflow-y-auto">
                <div class="flex flex-wrap -m-4 pb-8">
                  <div class="w-full p-4"><p class="flex justify-center" href="#"><img src="dashy-assets/images/adjustments.svg" alt="" /></p></div>
                  <div class="w-full p-4"><p class="flex justify-center" href="#"><img src="dashy-assets/images/duplicate.svg" alt="" /></p></div>


                  <div class="w-full p-4"><p class="flex justify-center" ><img src="dashy-assets/images/paper-airplane.svg" alt="" /></p></div>
                  <div class="w-full p-4"><p class="relative flex justify-center" >

                    <img src="dashy-assets/images/academic-cap.svg" alt="" /></p></div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full p-4"><a class="flex justify-center" href="#"><img src="dashy-assets/images/question-mark-circle.svg" alt="" /></a></div>
                  <div class="w-full p-4"><a class="flex justify-center" href="#"><img src="dashy-assets/images/cog.svg" alt="" /></a></div>
                  <div class="w-full p-4 mt-40"><a class="flex justify-center" href="#"><img src="dashy-assets/images/avatar2.png" alt="" /></a></div>
                </div>
              </div>
            </div>
  </div> */}

        <div class="mx-auto xl:ml-16 xl:pl-4">
          <div class="container mx-auto">
            {activeComponent === 'Dashboard' && <DashbordHomeview />}
            {activeComponent === 'API' && <APIview />}
            {activeComponent === 'User' && <Userprofile />}
            {activeComponent === 'MediaLibrary' && <LoadImages />}


          </div>





















        </div>
      </section>







      {/*Pagination 

      <section class="py-3">
        <div class="container px-4 mx-auto">
          <div class="p-6">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="order-2 sm:w-auto sm:order-1 p-2">
                <a class="inline-flex group items-center text-sm font-semibold" href="#">
                  <span class="text-black-400 group-hover:text-black-300">
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33294 4.33338H2.27294L4.47294 2.14004C4.59847 2.01451 4.669 1.84424 4.669 1.66671C4.669 1.48917 4.59847 1.31891 4.47294 1.19338C4.3474 1.06784 4.17714 0.997314 3.99961 0.997314C3.82207 0.997314 3.65181 1.06784 3.52627 1.19338L0.192939 4.52671C0.132245 4.59011 0.0846683 4.66487 0.0529387 4.74671C-0.01374 4.90902 -0.01374 5.09107 0.0529387 5.25338C0.0846683 5.33521 0.132245 5.40997 0.192939 5.47338L3.52627 8.80671C3.58825 8.86919 3.66198 8.91879 3.74322 8.95264C3.82446 8.98648 3.9116 9.00391 3.99961 9.00391C4.08761 9.00391 4.17475 8.98648 4.25599 8.95264C4.33723 8.91879 4.41096 8.86919 4.47294 8.80671C4.53542 8.74473 4.58502 8.671 4.61887 8.58976C4.65271 8.50852 4.67014 8.42138 4.67014 8.33337C4.67014 8.24537 4.65271 8.15823 4.61887 8.07699C4.58502 7.99575 4.53542 7.92202 4.47294 7.86004L2.27294 5.66671H7.33294C7.50975 5.66671 7.67932 5.59647 7.80434 5.47145C7.92937 5.34642 7.99961 5.17685 7.99961 5.00004C7.99961 4.82323 7.92937 4.65366 7.80434 4.52864C7.67932 4.40361 7.50975 4.33338 7.33294 4.33338Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span class="ml-2 text-black-300 group-hover:text-black-200">Previous</span>
                </a>
              </div>
              <div class="order-1 w-full sm:w-auto p-2">
                <div class="flex items-center"><a class="inline-block px-4 text-sm font-semibold text-gray-100 hover:text-gray-200" href="#">1</a><a class="px-4 text-sm font-semibold text-gray-100 hover:text-gray-200" href="#">2</a><a class="hidden sm:inline-block px-4 text-sm font-semibold text-gray-100 hover:text-gray-200" href="#">3</a><a class="inline-block px-4 text-sm text-gray-400 hover:text-gray-300" href="#">...</a><a class="hidden sm:inline-block px-4 text-sm font-semibold text-gray-100 hover:text-gray-200" href="#">44</a><a class="inline-block px-4 text-sm font-semibold text-gray-100 hover:text-gray-200" href="#">45</a></div>
              </div>
              <div class="order-3 sm:w-auto p-2">
                <a class="inline-flex group items-center text-sm font-semibold" href="#">
                  <span class="mr-2 text-black-100 group-hover:text-black-200">Next</span>
                  <span class="text-black-400 group-hover:text-black-300">
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.667061 5.66663L5.72706 5.66662L3.52706 7.85996C3.40152 7.98549 3.331 8.15576 3.331 8.33329C3.331 8.51083 3.40152 8.68109 3.52706 8.80662C3.6526 8.93216 3.82286 9.00269 4.00039 9.00269C4.17793 9.00269 4.34819 8.93216 4.47373 8.80662L7.80706 5.47329C7.86775 5.40989 7.91533 5.33513 7.94706 5.25329C8.01374 5.09098 8.01374 4.90893 7.94706 4.74662C7.91533 4.66479 7.86775 4.59003 7.80706 4.52662L4.47373 1.19329C4.41175 1.13081 4.33802 1.08121 4.25678 1.04736C4.17554 1.01352 4.0884 0.996093 4.00039 0.996093C3.91239 0.996093 3.82525 1.01352 3.74401 1.04736C3.66277 1.08121 3.58904 1.13081 3.52706 1.19329C3.46457 1.25527 3.41498 1.329 3.38113 1.41024C3.34729 1.49148 3.32986 1.57862 3.32986 1.66663C3.32986 1.75463 3.34729 1.84177 3.38113 1.92301C3.41498 2.00425 3.46457 2.07798 3.52706 2.13996L5.72706 4.33329L0.667061 4.33329C0.49025 4.33329 0.32068 4.40353 0.195656 4.52855C0.0706316 4.65358 0.000394456 4.82315 0.000394471 4.99996C0.000394487 5.17677 0.0706317 5.34634 0.195656 5.47136C0.32068 5.59639 0.49025 5.66663 0.667061 5.66663Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
*/}




    </body>



  )
}

export default Dashboard