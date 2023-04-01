import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { DatabaseContext, UserContext } from '../../context/context'
import axios from 'axios'
import { Link, useNavigate, useParams } from "react-router-dom"
// import { useParams } from "react-router-dom";
import Nocontentview from './Nocontentview'
const Contentview = () => {

  const { database } = useContext(DatabaseContext)
  const { user } = useContext(UserContext)
  const [entries, setEntries] = useState([])
  const [deletedEntriesProduct, setDeletedEntriesProduct] = useState([])
  const [deletedEntriesBlog, setDeletedEntriesBlog] = useState([])
  const [counter, setCounter] = useState(0)
  const selectedEntries = (entryId, value, type) => {
    if (type === 'productType') {
      if (value) {
        setDeletedEntriesProduct([...deletedEntriesProduct, entryId])
      } else {
        const newArray = deletedEntriesProduct.filter((id) => id !== entryId)
        setDeletedEntriesProduct(newArray)
      }
    } else if (type === 'blogType') {

      if (value) {
        setDeletedEntriesBlog([...deletedEntriesBlog, entryId])
      } else {
        const newArray = deletedEntriesBlog.filter((id) => id !== entryId)
        setDeletedEntriesBlog(newArray)
      }
    }
  }

  console.log(deletedEntriesBlog, deletedEntriesProduct);

  const deleteEntries = async () => {
    await axios.delete(`http://localhost:8080/database/${database._id}`, {
      data: {
        productIds: deletedEntriesProduct,
        blogIds: deletedEntriesBlog,
        email: user.email,
      }
    })
      .then(() => {
        setCounter(counter + 1)
      })
  }

  const getEntries = async () => {
    const data = await axios.get(`http://localhost:8080/database/${database._id}`, {
      params: {
        emailId: user.email
      }
    })
    console.log(data);
    setEntries(data.data)
  }

  useEffect(() => {
    getEntries()
  }, [database, counter])

  const navigate = useNavigate()

  const deleteEntry = async (entry) => {
    console.log(entry);
    const type = entry.type.replace('Type', '')
    console.log(type);
    const result = await axios.delete(`http://localhost:8080/${type}/${entry._id}`, {
      data: {
        email: user.email,
        database: database._id
      }
    })
    console.log(result);
    getEntries()
  }

  const shortenContent = (string, length) => {
    if (string.length < length) {
      return string
    } else {
      return `${string.substr(0, length)}...`
    }
  }

  return (

    <div class="relative">
      <Sidebar />


      <div class="mx-auto xl:ml-16 xl:pl-4">
        {/* Header*/}
        <section class="py-4 overflow-hidden">
          <div class="container px-4 mx-auto">
            <div class="px-8 py-6 bg-white overflow-hidden border rounded-xl">
              <a class="flex flex-wrap items-center mb-2 text-neutral-500 hover:text-neutral-600" onClick={() => navigate('/')}>
                <svg class="mr-3.5" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.13634 11.197C5.42923 11.4899 5.9041 11.4899 6.197 11.197C6.48989 10.9041 6.48989 10.4292 6.197 10.1363L5.13634 11.197ZM1 6.00001L0.46967 5.46968C0.329018 5.61033 0.25 5.8011 0.25 6.00001C0.25 6.19892 0.329018 6.38969 0.46967 6.53034L1 6.00001ZM6.197 1.86367C6.48989 1.57078 6.48989 1.09591 6.197 0.803013C5.9041 0.51012 5.42923 0.51012 5.13634 0.803013L6.197 1.86367ZM13 6.75001C13.4142 6.75001 13.75 6.41422 13.75 6.00001C13.75 5.5858 13.4142 5.25001 13 5.25001V6.75001ZM6.197 10.1363L1.53033 5.46968L0.46967 6.53034L5.13634 11.197L6.197 10.1363ZM1.53033 6.53034L6.197 1.86367L5.13634 0.803013L0.46967 5.46968L1.53033 6.53034ZM1 6.75001L13 6.75001V5.25001L1 5.25001L1 6.75001Z" fill="currentColor"></path></svg><span>Back to Home</span>
              </a>
              <div class="flex flex-wrap items-center -m-2">
                <div class="w-full md:w-1/2 p-2">
                  <h3 class="font-heading mb-1.5 font-semibold text-4xl">Content  View</h3>
                </div>
                <div class="w-full md:w-1/2 p-2">
                  <div class="flex flex-wrap md:justify-end">
                    {
                      (deletedEntriesProduct.length > 0 || deletedEntriesBlog.length > 0)
                      && <button class="w-auto p-2" onClick={() => deleteEntries()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    }
                    <div class="w-auto p-2">
                      <div class="mb-6">
                        <label class="block font-heading mb-2.5 text-sm font-semibold">Add an Entry</label>
                        <div class="relative h-full sm:max-w-md">
                          <select
                            class="appearance-none py-2 pl-3.5 pr-10 text-sm w-full h-full bg-white hover:bg-gray-50 outline-none border border-neutral-200 focus:border-neutral-600 cursor-pointer rounded-lg"
                            wtx-context="AB9056F5-8C50-41DC-8E52-487651AC62B4"
                            onChange={e => {
                              if (e.target.value === "productEntry")
                                navigate('/content/product/')
                              else if (e.target.value === "blogEntry")
                                navigate('/content/blog/')
                            }}
                          >
                            <option value="" disabled selected>Select an Entry Type</option>
                            <option value="productEntry">Add a Product Entry</option>
                            <option value="blogEntry">Add a Blog Entry</option>
                          </select><svg class="absolute top-1/2 right-4 transform -translate-y-1/2" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6673 9L8.00065 13.6667L3.33398 9" stroke="#0C1523" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                      </div>









                    </div>
                    <div class="w-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Dashboard with content*/}
        <section class="py-4 overflow-hidden">
          <div class="container px-4 mx-auto">
            <div class="pt-5 bg-neutral-50 border border-neutral-100 rounded-xl">
              <div class="px-6">
                <div class="w-full overflow-x-auto">
                  <table class="w-full min-w-max">
                    <thead><tr class="text-left">
                      <th class="p-0 border-b border-neutral-100">
                        <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium uppercase" href="#">Select</a></div>
                      </th>
                      <th class="p-0 border-b border-neutral-100">
                        <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium" href="#">Name</a></div>
                      </th>
                      <th class="p-0 border-b border-neutral-100">
                        <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium" href="#">Description</a></div>
                      </th>
                      <th class="p-0 border-b border-neutral-100">
                        <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium" href="#">Type</a></div>
                      </th>
                      <th class="p-0 border-b border-neutral-100" colSpan="2">
                        <div class="pb-3.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>

                        </div>
                      </th>
                    </tr></thead>
                    <tbody>
                      {
                        entries.length > 0 ?
                          entries.map((entry, index) => {
                            // console.log(entry);
                            return (
                              <tr key={index}>
                                <td class="py-3 pr-4 border-b border-neutral-100"><input type="checkbox" checked={deletedEntriesProduct.includes(entry._id) || deletedEntriesBlog.includes(entry._id)} onChange={e => selectedEntries(entry._id, e.target.checked, entry.type)} /></td>
                                <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">{shortenContent(entry.title, 10)}</span></td>
                                <td class="py-3 pr-4 border-b border-neutral-100" >{shortenContent(entry.description, 40)}</td>
                                <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">{entry.type}</span></td>
                                <td class="py-3 border-b border-neutral-100">
                                  <Link to={`/content/${entry.type.replace('Type', '')}?entry=${entry._id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>
                                  </Link>
                                </td>
                                <td class="py-3 pr-4 border-b border-neutral-100" onClick={e => deleteEntry(entry)} >
                                  <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                  </button>
                                </td>
                              </tr>
                            )
                          })
                          : <div class="w-full p-2">
                            <div class="flex flex-wrap md:justify-evenly">
                              <div class="w-auto p-2">
                                <button class="inline-flex flex-wrap items-center justify-center px-5 py-2.5 w-full font-medium text-sm text-center bg-black text-white rounded-xl" onClick={() => navigate('/content/product/')}>+ Add Product Entry</button>
                              </div>
                              <div class="w-auto p-2">
                                <button class="inline-flex flex-wrap items-center justify-center px-5 py-2.5 w-full font-medium text-sm text-center bg-black text-white rounded-xl" onClick={() => navigate('/content/blog/')}>+ Add Blog Entry</button>
                              </div>
                              <div class="w-auto"></div>
                            </div>
                          </div>

                      }


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Nocontentview />
      </div>
    </div>




















  )
}

export default Contentview