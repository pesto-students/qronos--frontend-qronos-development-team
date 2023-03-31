import React, { useContext } from 'react'
import './dashboard.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import { CounterContext, DatabaseContext, UserContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {

  const [open, setopen] = useState(true)
  const [databaseName, setDatabaseName] = useState('')
  const [created, setCreated] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const {
    setAllDatabases
  } = useContext(DatabaseContext)

  const { counter, setCounter } = useContext(CounterContext)

  const createDatabase = async () => {
    if (!databaseName) return
    console.log(databaseName);
    await axios.post(`http://localhost:8080/database/${databaseName}`, {
      emailId: user.email
    })
      .then((res) => {
        console.log(res);
        setAllDatabases(res)
        setCounter(counter + 1)
        setCreated(true)
        navigate('/content')
      })
  }

  return (

    <body class="antialiased bg-body text-body font-body">



      <section class="flex">


        <Sidebar />

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

        <div class={`mx-auto xl:ml-16 xl:pl-5  `}>
          <div class={`container  ${open ? "ml-30" : "ml-4"}`}>
            <section class="py-4 bg-neutral-50  ">
              <div class="container px-4 mx-auto">
                <img class="mx-auto" src="dashy-assets/images/empty.png" alt="" />
                <div class="max-w-md mx-auto text-center">
                  <h2 class="font-heading mb-3 text-2xl font-semibold">It’s a bit empty here</h2>

                  {/* <button class="bg-gradient-to-r from-purple-500 to-purple-700 inline-block text-white font-bold py-3 px-3 rounded">Click Me</button> */}


                </div>
                <div class="p-6 py-4 bg-white border rounded-xl">
                  <div class="flex flex-wrap justify-between mb-5 -m-2">
                    <div class="w-auto p-2">
                      <h3 class="font-heading text-lg font-semibold">Integrate 100+ Apps</h3>
                    </div>
                    <div class="w-auto p-2"><a class="text-xs text-transparent font-semibold uppercase bg-clip-text bg-gradient-purple-left" href="#">View all</a></div>
                  </div>
                  <div class="flex flex-wrap -m-2">
                    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
                      <div class="p-4 h-full bg-white border hover:border-neutral-200 rounded-lg cursor-pointer">
                        <div class="flex flex-wrap items-center justify-between -m-2">
                          <div class="w-auto p-2">
                            <div class="flex flex-wrap items-center -m-1.5">
                              <div class="w-auto p-1.5"><img src="dashy-assets/images/wordpress.svg" alt="" /></div>
                              <div class="flex-1 p-1.5">
                                <h3 class="font-heading mb-0.5 font-semibold">WordPress</h3>
                                <p class="text-xs text-neutral-500">CMS</p>
                              </div>
                            </div>
                          </div>
                          <div class="w-auto p-2"><a class="inline-flex flex-wrap items-center justify-center px-1.5 py-1.5 w-full font-medium text-sm text-center text-neutral-50 hover:text-neutral-100 bg-neutral-600 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400" href="#">
                            <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.35937 4C9.35937 3.58579 9.02359 3.25 8.60937 3.25C8.19516 3.25 7.85937 3.58579 7.85937 4H9.35937ZM7.85937 12C7.85937 12.4142 8.19516 12.75 8.60937 12.75C9.02359 12.75 9.35937 12.4142 9.35937 12H7.85937ZM12.6094 8.75C13.0236 8.75 13.3594 8.41421 13.3594 8C13.3594 7.58579 13.0236 7.25 12.6094 7.25V8.75ZM4.60938 7.25C4.19516 7.25 3.85938 7.58579 3.85938 8C3.85937 8.41421 4.19516 8.75 4.60937 8.75L4.60938 7.25ZM7.85937 4V8H9.35937V4H7.85937ZM7.85937 8V12H9.35937V8H7.85937ZM12.6094 7.25H8.60937V8.75H12.6094V7.25ZM8.60937 7.25L4.60938 7.25L4.60937 8.75H8.60937L8.60937 7.25Z" fill="#F9FAFB"></path>
                            </svg></a></div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
                      <div class="p-4 h-full bg-white border hover:border-neutral-200 rounded-lg cursor-pointer">
                        <div class="flex flex-wrap items-center justify-between -m-2">
                          <div class="w-auto p-2">
                            <div class="flex flex-wrap items-center -m-1.5">
                              <div class="w-auto p-1.5"><img src="dashy-assets/images/zapier.svg" alt="" /></div>
                              <div class="flex-1 p-1.5">
                                <h3 class="font-heading mb-0.5 font-semibold">Zapier</h3>
                                <p class="text-xs text-neutral-500">Automation</p>
                              </div>
                            </div>
                          </div>
                          <div class="w-auto p-2"><a class="inline-flex flex-wrap items-center justify-center px-1.5 py-1.5 w-full font-medium text-sm text-center text-neutral-50 hover:text-neutral-100 bg-neutral-600 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400" href="#">
                            <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.35937 4C9.35937 3.58579 9.02359 3.25 8.60937 3.25C8.19516 3.25 7.85937 3.58579 7.85937 4H9.35937ZM7.85937 12C7.85937 12.4142 8.19516 12.75 8.60937 12.75C9.02359 12.75 9.35937 12.4142 9.35937 12H7.85937ZM12.6094 8.75C13.0236 8.75 13.3594 8.41421 13.3594 8C13.3594 7.58579 13.0236 7.25 12.6094 7.25V8.75ZM4.60938 7.25C4.19516 7.25 3.85938 7.58579 3.85938 8C3.85937 8.41421 4.19516 8.75 4.60937 8.75L4.60938 7.25ZM7.85937 4V8H9.35937V4H7.85937ZM7.85937 8V12H9.35937V8H7.85937ZM12.6094 7.25H8.60937V8.75H12.6094V7.25ZM8.60937 7.25L4.60938 7.25L4.60937 8.75H8.60937L8.60937 7.25Z" fill="#F9FAFB"></path>
                            </svg></a></div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 p-2">
                      <div class="p-4 h-full bg-white border hover:border-neutral-200 rounded-lg cursor-pointer">
                        <div class="flex flex-wrap items-center justify-between -m-2">
                          <div class="w-auto p-2">
                            <div class="flex flex-wrap items-center -m-1.5">
                              <div class="w-auto p-1.5"><img src="dashy-assets/images/woocommerce.svg" alt="" /></div>
                              <div class="flex-1 p-1.5">
                                <h3 class="font-heading mb-0.5 font-semibold">WooCommerce</h3>
                                <p class="text-xs text-neutral-500">eCommerce Plugin</p>
                              </div>
                            </div>
                          </div>
                          <div class="w-auto p-2"><a class="inline-flex flex-wrap items-center justify-center px-1.5 py-1.5 w-full font-medium text-sm text-center text-neutral-50 hover:text-neutral-100 bg-neutral-600 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400" href="#">
                            <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.35937 4C9.35937 3.58579 9.02359 3.25 8.60937 3.25C8.19516 3.25 7.85937 3.58579 7.85937 4H9.35937ZM7.85937 12C7.85937 12.4142 8.19516 12.75 8.60937 12.75C9.02359 12.75 9.35937 12.4142 9.35937 12H7.85937ZM12.6094 8.75C13.0236 8.75 13.3594 8.41421 13.3594 8C13.3594 7.58579 13.0236 7.25 12.6094 7.25V8.75ZM4.60938 7.25C4.19516 7.25 3.85938 7.58579 3.85938 8C3.85937 8.41421 4.19516 8.75 4.60937 8.75L4.60938 7.25ZM7.85937 4V8H9.35937V4H7.85937ZM7.85937 8V12H9.35937V8H7.85937ZM12.6094 7.25H8.60937V8.75H12.6094V7.25ZM8.60937 7.25L4.60938 7.25L4.60937 8.75H8.60937L8.60937 7.25Z" fill="#F9FAFB"></path>
                            </svg></a></div>
                        </div>
                      </div>
                    </div>






                  </div>
                </div>

                <div class="p-6 py-4 bg-white border rounded-xl">
                  <div class="flex flex-wrap justify-between mb-6 -m-2">
                    <div class="w-auto p-2">
                      <h3 class="font-heading text-lg font-semibold">New apps spotlight</h3>
                    </div>
                    <div class="w-auto p-2"><a class="text-xs text-transparent font-semibold uppercase bg-clip-text bg-gradient-purple-left" href="#">View all</a></div>
                  </div>
                  <div class="flex flex-wrap -m-2.5">
                    <div class="w-full sm:w-1/2 p-2.5">
                      <div class="p-6 bg-white hover:bg-light border rounded-lg cursor-pointer">
                        <div class="flex flex-wrap -m-2">
                          <div class="w-auto p-2">
                            <div class="flex items-center justify-center w-12 h-12 bg-white rounded-full"><img src="dashy-assets/images/notion.svg" alt="" /></div>
                          </div>
                          <div class="flex-1 p-2">
                            <h3 class="font-heading mb-1 font-semibold">Notion</h3>
                            <p class="text-xs text-neutral-500">It is a long established fact that is a reader will be distracted by content of a page.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2 p-2.5">
                      <div class="p-6 bg-white hover:bg-light border rounded-lg cursor-pointer">
                        <div class="flex flex-wrap -m-2">
                          <div class="w-auto p-2">
                            <div class="flex items-center justify-center w-12 h-12 bg-white border rounded-full"><img src="dashy-assets/images/slack.svg" alt="" /></div>
                          </div>
                          <div class="flex-1 p-2">
                            <h3 class="font-heading mb-1 font-semibold">Slack</h3>
                            <p class="text-xs text-neutral-500">It is a long established fact that is a reader will be distracted by content of a page.</p>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>




                <div class="px-6 pt-10 py-4 pb-7 bg-white border rounded-xl">
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <div class="flex flex-col items-center justify-between h-full">
                        <div class="block pb-4">
                          <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full"><span class="text-lg font-semibold">1</span></div>
                        </div>
                        <div class="w-px h-full border border-dashed"></div>
                      </div>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="font-heading mb-0.5 text-lg font-semibold">To start, create your first project</h3>
                      <p class="mb-7 text-neutral-500">Projects help you organize your events</p>
                      <div class="flex flex-wrap max-w-sm pb-11 -m-1">
                        {
                          created
                            ? <></>
                            : <>
                              <div class="w-full sm:flex-1 p-1">
                                <input class="px-4 py-3.5 w-full text-sm text-neutral-400 hover:bg-gray-50 outline-none placeholder-neutral-400 border focus:border-neutral-600 border-neutral-200 rounded-lg" id="stepsInput4-1" type="text" placeholder="Type a name" onInput={e => setDatabaseName(e.target.value)} />
                              </div>
                              <div class="w-full sm:w-auto p-1"><a class="inline-flex flex-wrap items-center justify-center px-5 py-3.5 w-full text-sm text-neutral-50 hover:text-neutral-100 font-medium text-center bg-neutral-600 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400" onClick={e => createDatabase()}>Create</a></div>
                            </>
                        }
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <div class="flex flex-col items-center justify-between h-full">
                        <div class="block pb-3">
                          <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full"><span class="text-lg font-semibold">2</span></div>
                        </div>
                        <div class="w-px h-full border border-dashed"></div>
                      </div>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="font-heading mb-0.5 text-lg font-semibold">Create a channel for your project</h3>
                      <p class="pb-12 text-neutral-500">You can have many channels for your project</p>
                    </div>
                  </div>
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <div class="flex flex-col items-center justify-between h-full">
                        <div class="block pb-3">
                          <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full"><span class="text-lg font-semibold">3</span></div>
                        </div>
                        <div class="w-px h-full border border-dashed"></div>
                      </div>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="font-heading mb-0.5 text-lg font-semibold">Generate your API Token</h3>
                      <p class="pb-12 text-neutral-500">Tokens are required for publishing events</p>
                    </div>
                  </div>
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <div class="flex flex-col items-center justify-between h-full">
                        <div class="block pb-3">
                          <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full"><span class="text-lg font-semibold">4</span></div>
                        </div>
                        <div class="w-px h-full border border-dashed"></div>
                      </div>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="font-heading mb-0.5 text-lg font-semibold">Publish your first event</h3>
                      <p class="pb-12 text-neutral-500">Code or no code, we got you covered</p>
                    </div>
                  </div>
                  <div class="flex flex-wrap -m-2">
                    <div class="w-auto p-2">
                      <div class="flex flex-col items-center justify-between h-full">
                        <div class="block pb-3">
                          <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full">
                            <svg width="16" height="12" viewbox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 7L5 11L15 1" stroke="#0C1523" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </div>
                        </div>
                        <div class="w-px h-full border border-dashed"></div>
                      </div>
                    </div>
                    <div class="flex-1 p-2">
                      <h3 class="font-heading mb-0.5 text-lg font-semibold">You’re all set!</h3>
                      <p class="text-neutral-500">Happy event tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </body>



  )
}

export default Dashboard