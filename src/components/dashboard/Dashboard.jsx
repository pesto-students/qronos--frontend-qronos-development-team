import React, { useContext } from 'react'
import './dashboard.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import { CounterContext, DatabaseContext, s3, UserContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { useConsistObject } from '../../hooks/function/useConsistObject'
import { useCreateAnObject } from '../../hooks/function/useCreateAnObject'
import Seo from '../Shared/Seo'
import { Link } from 'react-router-dom'
const Dashboard = () => {

  const [open, setopen] = useState(true)
  const [databaseName, setDatabaseName] = useState('')
  const [created, setCreated] = useState(false)
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const {
    setAllDatabases,
    setFolderKey
  } = useContext(DatabaseContext)

  const consistObject = useConsistObject()
  const createAnObject = useCreateAnObject()

  const { counter, setCounter } = useContext(CounterContext)
  const createDatabase = async () => {
    if (!databaseName) return
    await axios.post(`${process.env.REACT_APP_API_URL}/database/${databaseName}`, {
      emailId: user.email
    })
      .then(async (res) => {
        const id = res.data.database.find(({ name }) => name === databaseName)
        const folderExists = await consistObject(id._id)
        if (folderExists) {
          // console.log("folderExists", folderExists, id._id);
          setFolderKey(id._id)
        } else {
          // console.log("create a new object");
          createAnObject(id._id)
        }
        setAllDatabases(res)
        setCounter(counter + 1)
        setCreated(true)
        navigate('/content')
      })
  }


  return (

    <body class="antialiased bg-body text-body font-body">


      <Seo
        title='Dashboard | The Ultimate Webinar Tool | QRONOS'
        description='Dashboard | The Ultimate Webinar Tool'
      />

      <section class="flex">


        <Sidebar />


        <div class={`mx-auto xl:ml-16 xl:pl-5  `}>
          <div class={`container  ${open ? "ml-30" : "ml-4"}`}>
            <section class="py-4 bg-neutral-50  ">
              <div class="container px-4 mx-auto">
                <img class="mx-auto" src="dashy-assets/images/empty.png" alt="" />
                <div class="py-20">
                  <div class="container px-4 mx-auto">
                    <div class="max-w-3xl mx-auto text-center">
                      <img class="mx-auto object-cover rounded-lg" src="gradia-assets/images/dashboard.svg" alt="" />
                      <h2 class="mt-[-180px] mb-4 text-4xl lg:text-5xl font-bold font-heading">Dive into the Innovative Potential of Your Unique CMS Dashboard!</h2>
                      <p class="mb-6 text-lg text-gray-500 leading-loose">The CMS Dashboard is your one-stop destination for managing and monitoring your website content. It provides an easy-to-use interface with tools to help you quickly and accurately create, edit, publish, and analyze content. Get started now and take control of your online presence!</p>
                      <div class="mb-12">
                        <Link to="/content"><a class="inline-block w-full sm:w-auto px-6 py-2 text-sm text-white font-bold leading-loose bg-black hover:bg-gray-600 rounded transition duration-200" >Get Started</a>
                        </Link>  </div>
                    </div>
                  </div>
                </div>





                <div class="px-6 pt-10 py-4 pb-7 bg-white border rounded-xl justify-center">
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





































                <div class="p-6 py-4 bg-white ">

                  <div class="flex flex-wrap -m-2.5">
                    <div class="w-full sm:w-1/2 p-3  border rounded-xl">
                      <div class="p-6 bg-white hover:bg-light cursor-pointer">
                        <div class="flex flex-wrap -m-2">
                          <div class="w-auto p-2">
                            <div class="flex items-center justify-center w-12 h-12 bg-white "><img src="gradia-assets/images/InformationSquare.png" alt="" /></div>
                          </div>
                          <div class="flex-1 p-2">
                            <h3 class="font-heading mb-1 font-semibold">Read The Documentation</h3>
                            <p class="text-xs text-neutral-500">Discover the concepts, reference, guides and tutorials.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="w-full sm:w-1/2 p-3 border  rounded-xl">
                      <div class="p-6 bg-white hover:bg-light  cursor-pointer">
                        <div class="flex flex-wrap -m-2">
                          <div class="w-auto p-2">
                            <div class="flex items-center justify-center w-12 h-12 bg-white"><img src="gradia-assets/images/CodeSquare.png" alt="" /></div>
                          </div>
                          <div class="flex-1 p-2">
                            <h3 class="font-heading mb-1 font-semibold">Code example</h3>
                            <p class="text-xs text-neutral-500">Learn by testing real project developed by the community and help over other developers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="w-full sm:w-1/2 p-2.5 border rounded-xl m-10">

                    <div class="p-6 bg-white hover:bg-light  cursor-pointer">
                      <h3 class="font-heading mb-1 font-semibold">Join The Community</h3>
                      <p class="text-xs text-neutral-500">Discuss with team members, contributors and developers on different channels.</p>

                      <div class="flex flex-wrap m-2 justify-center">
                        <div class="inline-block p-2">
                          <img src="gradia-assets/images/Discord.png" alt="" />
                          <Link to="https://discord.com"><p>Discord</p></Link>
                        </div>
                        <div class="inline-block p-2" >
                          <img src="gradia-assets/images/Github.png" alt="" />
                          <Link to="https://github.com"><p>Github</p></Link>
                        </div>
                      </div>

                      <div class="flex flex-wrap justify-center m-2">
                        <div class="inline-block p-2">
                          <img src="gradia-assets/images/Reddit.png" alt="" />
                          <Link to="https://reddit.com"><p>Reddit</p></Link>
                        </div>
                        <div class="inline-block p-2">
                          <img src="gradia-assets/images/Twitter.png" alt="" />
                          <Link to="https://twitter.com"><p>Twitter</p></Link>
                        </div>
                      </div>
                    </div>
                  </div>





















                </div>















              </div>
            </section>
          </div>
        </div >
      </section >
    </body >

  )
}

export default Dashboard