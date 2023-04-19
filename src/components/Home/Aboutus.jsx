import React from 'react'
import Header from './Header'
import CalltoAction from './CalltoAction'
import Footer from './Footer'
import Seo from '../Shared/Seo'
const Aboutus = () => {
    return (
        <div>
            <Seo
                title='Learn About Us | The Ultimate Webinar Tool | QRONOS'
                description='Learn About Us | The Ultimate Webinar Tool'
            />

            <Header />

            <section class="pt-20 pb-32 overflow-hidden">
                <div class="container mx-auto px-4">
                    <div class="md:max-w-lg mb-24">
                        <h2 class="mb-4 font-heading font-semibold text-gray-900 text-6xl sm:text-7xl">About Us</h2>
                        <p class="text-lg text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                    </div>
                    <div class="flex flex-wrap -m-11">
                        <div class="w-full md:w-1/2 p-11">

                        </div>
                        <div class="w-1/2 md:w-1/2 p-11">
                            <p>
                                We are a team who believe in making things easier and achieving high performance. So this CMS is a dashboard developed by developers for developers to make their tasks much easier.
                                This CMS when integrated will make the tasks of developers and content authors much easier as in case of developers no need to design and develop separate pages for the same template design they could just develop a template for a every content type and reuse it every single time and as for content authors our dashboard is designed such that there won’t be any problem on placing content on the site.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <div class="relative z-10 container  px-4">
                <div class="flex flex-wrap justify-center items-center p-0">
                    <div class="w-auto">
                        <img class="transform hover:scale-105 transition ease-in-out duration-1000" src="gradia-assets/images/teams/aboutsus.png" alt="" />
                    </div>
                </div>
            </div>

            <section class="overflow-hidden p-12">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap items-center -m-6">
                        <div class="w-full md:w-1/2 p-6">
                            <div class="max-w-lg">
                                <p class="mb-9 max-w-max text-transparent bg-clip-text bg-gradient-cyan font-heading text-xs uppercase font-semibold tracking-px">The team that made us successful</p>
                                <h2 class="mb-7 font-heading font-semibold text-6xl sm:text-7xl text-gray-900">Our mission is making the customers lives easier now.</h2>
                                <p class="text-xl text-gray-900">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 p-6">
                            <div class="flex flex-inline justify-center -m-6">
                                <div class="w-full flex lg:w-auto p-6">
                                    <div class="max-w-max mx-auto">
                                        <div class="mb-5 bg-gradient-orange">
                                            <img src="gradia-assets/images/teams/avatar-bg.png" alt="" />
                                        </div>
                                        <h3 class="mb-1 font-heading font-bold text-xl text-gray-900">Ashwanth Kumar</h3>
                                        <p class="text-xs text-gray-600">Full Stack Developer</p>
                                    </div>

                                    <div class="max-w-max mx-auto">
                                        <div class="mb-5 bg-gradient-orange">
                                            <img src="gradia-assets/images/teams/avatar-bg2.png" alt="" />
                                        </div>
                                        <h3 class="mb-1 font-heading font-bold text-xl text-gray-900">Varanshu</h3>
                                        <p class="text-xs text-gray-600">Full Stack Developer</p>
                                    </div>






                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CalltoAction />
            <Footer />
        </div>
    )
}

export default Aboutus