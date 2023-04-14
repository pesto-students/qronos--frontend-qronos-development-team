import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import { DatabaseContext, UserContext } from '../../context/context'
import * as Sentry from '@sentry/react'
import { useLocation, useNavigate } from "react-router-dom"
import Seo from '../Shared/Seo'
import { Link } from '@sentry/react'
const ContentEntry = () => {

    let navigate = useNavigate();

    const { database } = useContext(DatabaseContext)
    const { user } = useContext(UserContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [thumbnailTitle, setThumbnailTitle] = useState('')
    const [seoTitle, setSeoTitle] = useState('')
    const [seoDescription, setSeoDescription] = useState('')
    const [price, setPrice] = useState('')
    const [sku, setSku] = useState('')
    const [countryCode, setCountryCode] = useState('')

    const publishData = async () => {
        const databaseId = database._id
        if (routeParams) {
            if (!title) return
            const url = `${process.env.REACT_APP_API_URL}/product/${databaseId}/${routeParams}`
            await axios.patch(url, {
                product: {
                    title,
                    description,
                    thumbnailTitle,
                    seoTitle,
                    seoDescription,
                    price,
                    sku,
                    countryCode
                },
                emailId: user.email
            })
                .then(function (response) {
                    // redirectToContentView()
                    navigate('/content')
                    // console.log(JSON.stringify(response.data));
                })
        } else {
            if (!title) return
            const url = `${process.env.REACT_APP_API_URL}/product/${databaseId}`
            await axios.post(url, {
                product: {
                    title,
                    description,
                    thumbnailTitle,
                    seoTitle,
                    seoDescription,
                    price,
                    sku,
                    countryCode
                },
                emailId: user.email
            })
                .then(function (response) {
                    // redirectToContentView()
                    navigate('/content')
                    // console.log(JSON.stringify(response.data));
                })
        }
    }

    const location = useLocation()
    // console.log(location);

    const routeParams = new URLSearchParams(location.search).get('entry');
    // console.log("routeParams", routeParams);

    const getValues = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/product/${routeParams}`, {
                params: {
                    email: user.email,
                    databaseId: database._id
                }
            })
            const data = result.data
            setTitle(data.title)
            setDescription(data.description)
            setThumbnailTitle(data.thumbnailTitle)
            setSeoTitle(data.seoTitle)
            setSeoDescription(data.seoDescription)
            setPrice(data.price)
            setSku(data.sku)
            setCountryCode(data.countryCode)
        } catch (error) {

        }
    }

    useEffect(() => {
        if (routeParams) {
            getValues()
        }
    }, [routeParams])

    useEffect(() => {
        // console.log(database);
    }, [database])

    return (
        <body>

            <div class="relative">
                <Seo
                    title='Edit Product Entry | The Ultimate Webinar Tool | QRONOS'
                    description='Edit Product Entry | The Ultimate Webinar Tool'
                />
                <Sidebar />
                <div class="mx-auto xl:ml-16 xl:pl-4">

                    <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
                        <div class="px-8 py-6 bg-white overflow-hidden border rounded-xl">
                            <a class="flex flex-wrap items-center mb-2 text-neutral-500 hover:text-neutral-600" onClick={() => window.history.back()}>
                                <svg class="mr-3.5" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.13634 11.197C5.42923 11.4899 5.9041 11.4899 6.197 11.197C6.48989 10.9041 6.48989 10.4292 6.197 10.1363L5.13634 11.197ZM1 6.00001L0.46967 5.46968C0.329018 5.61033 0.25 5.8011 0.25 6.00001C0.25 6.19892 0.329018 6.38969 0.46967 6.53034L1 6.00001ZM6.197 1.86367C6.48989 1.57078 6.48989 1.09591 6.197 0.803013C5.9041 0.51012 5.42923 0.51012 5.13634 0.803013L6.197 1.86367ZM13 6.75001C13.4142 6.75001 13.75 6.41422 13.75 6.00001C13.75 5.5858 13.4142 5.25001 13 5.25001V6.75001ZM6.197 10.1363L1.53033 5.46968L0.46967 6.53034L5.13634 11.197L6.197 10.1363ZM1.53033 6.53034L6.197 1.86367L5.13634 0.803013L0.46967 5.46968L1.53033 6.53034ZM1 6.75001L13 6.75001V5.25001L1 5.25001L1 6.75001Z" fill="currentColor"></path></svg><span>Back to Home</span>
                            </a>
                            <div class="flex flex-wrap items-center -m-2">
                                <div class="w-full md:w-1/2 p-2">
                                    <h3 class="font-heading mb-1.5 text-lg font-semibold" contenteditable="false">Enter the Content</h3>

                                </div>
                                <div class="w-full md:w-1/2 p-2">
                                    <div class="flex flex-wrap md:justify-end">
                                        <div class="w-auto"><a class="inline-flex flex-wrap items-center justify-center px-5 py-2.5 w-full font-medium text-sm text-center text-neutral-50 hover:text-neutral-100 bg-neutral-600 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400" href="#">Change Plans</a></div>
                                        <div class="w-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
                        <form class="py-6 px-7 bg-white border rounded-xl" >
                            <div class="flex flex-wrap justify-between -m-2">


                                <div class="w-full mx-auto">
                                    <form wtx-context="B2AA524A-3F11-4A0A-BEFF-1067905C74A8">
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Title</label>
                                        <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Please enter title" wtx-context="EC02D531-93E4-4784-8CF9-FAA1DC462EDC"
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                        />
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Description</label>
                                        <textarea class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write something..." rows="5"
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}></textarea>
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Thumbnail Title</label>
                                        <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Please enter " wtx-context="EC02D531-93E4-4784-8CF9-FAA1DC462EDC"
                                            value={thumbnailTitle}
                                            onChange={e => setThumbnailTitle(e.target.value)} />
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">SEO Title</label>
                                        <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Please enter " wtx-context="EC02D531-93E4-4784-8CF9-FAA1DC462EDC"
                                            value={seoTitle}
                                            onChange={e => setSeoTitle(e.target.value)} />
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">SEO Description</label>
                                        <textarea class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write something..." rows="5"
                                            value={seoDescription}
                                            onChange={e => setSeoDescription(e.target.value)}></textarea>
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Price</label>
                                        <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Please enter " wtx-context="EC02D531-93E4-4784-8CF9-FAA1DC462EDC"
                                            value={price}
                                            onChange={e => setPrice(e.target.value)} />
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">SKU</label>
                                        <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Please enter " wtx-context="EC02D531-93E4-4784-8CF9-FAA1DC462EDC"
                                            value={sku}
                                            onChange={e => setSku(e.target.value)} />
                                        <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Price Country Code</label>
                                        <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Please enter " wtx-context="EC02D531-93E4-4784-8CF9-FAA1DC462EDC"
                                            value={countryCode}
                                            onChange={e => setCountryCode(e.target.value)} />
                                        <div class="mb-4">
                                            <button type='button' class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" onClick={() => publishData()}>Publish</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </form>
                    </div>
                    </section>




                </div>



            </div>
        </body>











    )
}

export default Sentry.withProfiler(ContentEntry)