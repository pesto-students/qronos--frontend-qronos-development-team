import React, { useContext, useEffect } from 'react'
import './dashboard.css'
import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import { DatabaseContext } from '../../context/context'
import Copy_Icon from '../../images/copy.png'
import * as Sentry from '@sentry/react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'

const Api = () => {
  const [open, setopen] = useState(true)
  useEffect(() => {
    Sentry.configureScope(scope => {
      scope.setTag('pageapi', 'Api_page');
    });
    Sentry.captureMessage('Api page was loaded successfully');
  }, []);
  const { database } = useContext(DatabaseContext)

  const copyItem = async (value) => {
    await navigator.clipboard.writeText(value)
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (!database) navigate('/')
  }, [database])

  return (

    <body class="antialiased bg-body text-body font-body">
      <div class="">
        <Sidebar />
        <section class="relative">

          <div class="mx-auto xl:ml-16 xl:pl-4">
            <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
              <div class="px-8 py-6 bg-white overflow-hidden border rounded-xl">
                <a class="flex flex-wrap items-center mb-2 text-neutral-500 hover:text-neutral-600" onClick={() => navigate('/')}>
                  <svg class="mr-3.5" width="14" height="12" viewbox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.13634 11.197C5.42923 11.4899 5.9041 11.4899 6.197 11.197C6.48989 10.9041 6.48989 10.4292 6.197 10.1363L5.13634 11.197ZM1 6.00001L0.46967 5.46968C0.329018 5.61033 0.25 5.8011 0.25 6.00001C0.25 6.19892 0.329018 6.38969 0.46967 6.53034L1 6.00001ZM6.197 1.86367C6.48989 1.57078 6.48989 1.09591 6.197 0.803013C5.9041 0.51012 5.42923 0.51012 5.13634 0.803013L6.197 1.86367ZM13 6.75001C13.4142 6.75001 13.75 6.41422 13.75 6.00001C13.75 5.5858 13.4142 5.25001 13 5.25001V6.75001ZM6.197 10.1363L1.53033 5.46968L0.46967 6.53034L5.13634 11.197L6.197 10.1363ZM1.53033 6.53034L6.197 1.86367L5.13634 0.803013L0.46967 5.46968L1.53033 6.53034ZM1 6.75001L13 6.75001V5.25001L1 5.25001L1 6.75001Z" fill="currentColor"></path></svg><span>Back to Home</span></a>
                <div class="flex flex-wrap items-center -m-2">
                  <div class="w-full md:w-1/2 p-2">
                    <h3 class="font-heading mb-1.5 font-semibold text-lg text-4xl">API Detail Page</h3>
                  </div>

                </div>
              </div>
            </div>
            </section>

            <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
              <div class="pt-5 bg-neutral-50 border border-neutral-100 rounded-xl">
                <div class="px-6">
                  <h3 class="font-heading mb-1.5 pt-4 font-semibold text-lg text-4xl">How to use API</h3>
                  <p class="font-heading mb-1.5 py-4 font-semibold text-gray-400 text-md border-b">In Header Pass: 'Authorization': 'Bearer &#10100;Access Token&#10101;'</p>
                  <div class="w-full overflow-x-auto">
                    <table class="w-full min-w-max">
                      <thead><tr class="text-left">
                        <th class="p-0 border-b border-neutral-100">
                          <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium uppercase" href="#">Type</a></div>
                        </th>
                        <th class="p-0 border-b border-neutral-100">
                          <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium" href="#">API Call Method</a></div>
                        </th>

                        <th class="p-0 border-b border-neutral-100">
                          <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium" href="#"></a></div>
                        </th>
                        <th class="p-0 border-b border-neutral-100">
                          <div class="pb-3.5"></div>
                        </th>
                      </tr></thead>
                      <tbody>
                        <tr>
                          <td class="py-3 pr-4 border-b border-neutral-100">
                            <Table_Row class="text-sm">
                              Get All Entries
                            </Table_Row>
                          </td>
                          <td class="py-3 pr-4 border-b border-neutral-100">
                            <Table_Row class="text-sm">
                              https://backend-qronos.onrender.com/api/v1/all?database_id=&#10100;databaseID&#10101;
                            </Table_Row>
                          </td>
                        </tr>
                        <tr>
                          <td class="py-3 pr-4 border-b border-neutral-100">
                            <Table_Row class="text-sm">
                              Get All Product Entries
                            </Table_Row>
                          </td>
                          <td class="py-3 pr-4 border-b border-neutral-100">
                            <Table_Row class="text-sm">
                              https://backend-qronos.onrender.com/api/v1/product?database_id=&#10100;databaseID&#10101;
                            </Table_Row>
                          </td>
                        </tr>
                        <tr>
                          <td class="py-3 pr-4 border-b border-neutral-100">
                            <Table_Row class="text-sm">
                              Get All Blog Entries
                            </Table_Row>
                          </td>
                          <td class="py-3 pr-4 border-b border-neutral-100">
                            <Table_Row class="text-sm">
                              https://backend-qronos.onrender.com/api/v1/blog?database_id=&#10100;databaseID&#10101;
                            </Table_Row>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </section>

            <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
              <div class="pt-5 bg-neutral-50 border border-neutral-100 rounded-xl">
                <div class="px-6">
                  <h3 class="font-heading mb-1.5 py-4 font-semibold text-lg text-4xl border-b">Private Keys</h3>
                  <div class="w-full overflow-x-auto">
                    <table class="w-full min-w-max">
                      <thead><tr class="text-left">
                        <th class="p-0 border-b border-neutral-100">
                          <div class="pb-3.5"><p class="text-sm text-gray-400 font-medium uppercase" >Database ID</p></div>
                        </th>
                        <th class="p-0 border-b border-neutral-100">
                          <div class="pb-3.5"><p class="text-sm text-gray-400 font-medium">Access Token</p></div>
                        </th>
                        <th class="p-0 border-b border-neutral-100">
                          <div class="pb-3.5"></div>
                        </th>
                        <th class="p-0 border-b border-neutral-100">
                          <div class="pb-3.5"></div>
                        </th>
                      </tr></thead>
                      <tbody>
                        {
                          database
                            ? <tr>
                              <td class="py-3 pr-4 border-b border-neutral-100">
                                <Table_Row class="text-sm">
                                  {database._id}
                                  <span onClick={() => copyItem(database._id)}>
                                    <Copy_Img src={Copy_Icon} />
                                  </span>
                                </Table_Row>
                              </td>
                              <td class="py-3 pr-4 border-b border-neutral-100">
                                <Table_Row class="text-sm">
                                  {database.jwt.length > 24 ? `${database.jwt.substr(0, 24)}...` : database.jwt}
                                  <span onClick={() => copyItem(database.jwt)}>
                                    <Copy_Img src={Copy_Icon} className="copy-icon" />
                                  </span>
                                </Table_Row>
                              </td>
                            </tr>
                            : null
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </section>
          </div>
        </section>
      </div>
    </body>
  )
}
const Table_Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Copy_Img = styled.img`
  width: 20px;
  display: inline-block;
`

export default Api