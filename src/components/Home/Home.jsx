import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import CalltoAction from './CalltoAction'
import * as Sentry from '@sentry/react'
import Footer from './Footer'
import gradientbg from './svgs/dashboard_bg.svg'
import testimonialbg from './svgs/Testimonial.svg'
import testimonial2bg from './svgs/howitwork.svg'
import Seo from '../Shared/Seo'
const Home = () => {
  useEffect(() => {
    Sentry.configureScope(scope => {
      scope.setTag('Welcome to Qronos', 'Homepage');
    });
    Sentry.captureMessage('Homepage loaded successfully');
  }, []);
  const bg_gradient = {
    backgroundImage: `url(${gradientbg})`,
    backgroundSize: 'cover',



  };
  const bg_testimonial = {
    backgroundImage: `url(${testimonialbg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  };
  const bg_testimonial2 = {
    backgroundImage: `url(${testimonial2bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  };
  return (

    <div>
      <Header />
      <Seo
        title='QRONOS | The Ultimate CMS Tool'
        description='QRONOS | The Ultimate CMS Tool'
      />

      <section>
        <div style={bg_gradient} class="container px-4 mx-auto">
          <div class="relative pt-12 md:pt-16 pb-32 lg:pb-48 mb-48 lg:mb-64">
            <div class="max-w-2xl mb-16 mx-auto text-center">
              <h1 class="mb-2 text-6xl lg:text-7xl text-black font-bold font-heading">Managing Content Made</h1>
              <h2 class="text-6xl font-semibold bg-gradient-to-r from-red-500 via-pink-600 to-blue-600 bg-clip-text text-transparent">Easier,Faster,Safer</h2>
              <p class="mb-8 text-lg text-black-500">Qronos  is a user-friendly content management website that helps you to create, organize and publish content seamlessly. With Qronos, you can streamline your content creation process.</p>
              <div>
                <Link to="/" class="inline-block w-full lg:w-auto py-3 px-6 mb-3 lg:mb-0 lg:mr-3 bg-black hover:bg-gray-200 text-white font-semibold border border-white rounded transition duration-200" >Get Started</Link>
                <Link to="/about" class="inline-block w-full lg:w-auto py-3 px-6 mb-3 lg:mb-0 lg:mr-3 bg-white hover:bg-gray-200 text-black font-semibold border border-white rounded-xl transition duration-200" > Learn More</Link>
              </div>
            </div>
            <div class="relative max-w-3xl mx-auto">
              <img class="absolute top-0 left-0 mx-auto w-full rounded-xl transform hover:scale-110 transition ease-out duration-500" src="gradia-assets/images/hero/dashboard.png" alt="" />
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        </div>
      </section>



      {/* Features section*/}
      <section class="relative pt-24">
        <div class="container mx-auto px-4 mb-12">
          <h2 class="mx-auto font-heading sm:text-7xl text-gray-900 font-semibold text-center mb-6 text-10xl">Create without compromise</h2>

          <div class="flex flex-wrap -m-8">
            <div class="w-full md:w-1/3 p-8">
              <div class="group" href="#">
                <div class="mb-9 overflow-hidden rounded-2xl">
                  <img class="transform hover:scale-110 w-full transition ease-out duration-500" src="https://static.shuffle.dev/uploads/files/aa/aa76bc6a36158b7ac4204a7b269a276536be45f7/Frame-87.png" alt="" />
                </div>
                <h3 class="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline text-center">Customizable</h3>
                <p class="mb-5 text-gray-600 text-base"> We provide toolkit for creating efficient data-driven content applications.</p>
              </div><div class="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden" href="#">

                <div class="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500"></div>
              </div>

            </div>
            <div class="w-full md:w-1/3 p-8">
              <div class="group" >
                <div class="mb-9 overflow-hidden rounded-2xl">
                  <img class="transform hover:scale-110 w-full transition ease-out duration-500" src="https://static.shuffle.dev/uploads/files/aa/aa76bc6a36158b7ac4204a7b269a276536be45f7/Frame-87-1.png" alt="" />
                </div>
                <h3 class="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline text-center">API</h3>
                <p class="mb-5 text-gray-600 text-base">We provide an API-centric solution for companies to weave together external data sources .</p>
              </div><div class="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden" href="#">

                <div class="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500"></div>
              </div>

            </div>
            <div class="w-full md:w-1/3 p-8">
              <div class="group" href="#">
                <div class="mb-9 overflow-hidden rounded-2xl">
                  <img class="transform hover:scale-110 w-full transition ease-out duration-500" src="https://static.shuffle.dev/uploads/files/aa/aa76bc6a36158b7ac4204a7b269a276536be45f7/Frame-87-2.png" alt="" />
                </div>
                <h3 class="mb-4 font-heading font-bold text-gray-900 text-xl group-hover:underline text-center">Self-hosted</h3>
                <p class="mb-5 text-gray-600 text-base">Don’t give up on data privacy or lock yourself in. Keep control of your
                  data and your costs at all time</p>
              </div><div class="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden" href="#">

                <div class="w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500"></div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* How it Works section*/}
      <h5 class="mb-8 font-heading text-3xl md:text-5xl xl:text-7xl text-center font-bold">How it Works</h5>
      <section class="bg-white overflow-hidden mystyle"><div style={bg_testimonial} class="container px-4 mx-auto rounded-2xl m-5 ">
        <div class="flex flex-wrap lg:items-center">
          <div class="w-full md:w-1/2 p-8">
            <img class="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000" src="https://static.shuffle.dev/uploads/files/5f/5fa2a707d47f62fbb2f018dac31db7f8d12fbf5f/Other-01.png" alt="" /></div>
          <div class="w-full md:w-1/2 p-8">
            <h2 class="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">Effortlessly create content structures that flex to your needs.</h2>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-full p-1.5">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                    <p class="mb-4 text-base" >Once you have created your content architecture, you can start telling engaging stories.Allow cross-functional teams to deliver content faster no matter yourindustries,usecases,locations,devices, and channels.</p>

                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      </section>

      <section class="bg-white overflow-hidden mystyle"><div style={bg_testimonial2} class="container px-4 mx-auto rounded-2xl  m-5">
        <div class="flex flex-wrap lg:items-center">

          <div class="w-full md:w-1/2 p-8">
            <h2 class="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">Seamlessly write, edit and manage any content types.</h2>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-full p-1.5">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                    <p class="mb-4 text-base" >Once you have created your content architecture, you can start telling engaging stories.Allow cross-functional teams to deliver content faster no matter yourindustries,usecases,locations,devices, and channels.</p>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-8">
            <img class="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000" src="gradia-assets/images/how-it-works/02.png" alt="" />
          </div>
        </div>
      </div>
      </section>

      <section class="bg-white overflow-hidden mystyle"><div style={bg_testimonial} class="container px-4 mx-auto rounded-2xl m-5 ">
        <div class="flex flex-wrap lg:items-center">
          <div class="w-full md:w-1/2 p-8">
            <img class="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000" src="gradia-assets/images/how-it-works/03.png" alt="" /></div>
          <div class="w-full md:w-1/2 p-8">
            <h2 class="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">Easily build apps without the distraction of CMS complexities.</h2>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-full p-1.5">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                    <p class="mb-4 text-base" contenteditable="true">Focus your talent on what matters. You can integrate individual best-in-class services by third-party vendors and connect any framework of your choice.</p>

                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      </section>

      <section class="bg-white overflow-hidden mystyle"><div style={bg_testimonial2} class="container px-4 mx-auto rounded-2xl m-5 ">
        <div class="flex flex-wrap lg:items-center">

          <div class="w-full md:w-1/2 p-8">
            <h2 class="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">Consume API from any client using REST </h2>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-full p-1.5">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                    <p class="mb-4 text-base">You can use a standard RESTful API  to query your content.</p>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-8">
            <img class="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000" src="gradia-assets/images/how-it-works/04.png" alt="" />
          </div>
        </div>
      </div>
      </section>



      {/* Testimonials section*/}
      <section style={bg_testimonial} class="relative pt-24 pb-32 overflow-hidden ">
        <div class="container mx-auto px-4">
          <h2 class="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">People Are Talking..</h2>
          <p class="mb-16 text-base max-w-md mx-auto text-center text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          <div class="flex flex-wrap -m-5">
            <div class="w-full md:w-1/3 p-5">
              <div class="h-full p-0.5 transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
                <div class="h-full px-7 py-8 bg-white rounded-lg">
                  <img class="mb-8" src="gradia-assets/images/testimonials/avatar.png" alt="" />
                  <p class="mb-8 text-lg text-gray-900">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                  <h3 class="mb-1.5 font-heading font-bold text-lg text-gray-900">Ronald Richards</h3>
                  <p class="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 p-5">
              <div class="h-full p-0.5 transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
                <div class="h-full px-7 py-8 bg-white rounded-lg">
                  <img class="mb-8" src="gradia-assets/images/testimonials/avatar2.png" alt="" />
                  <p class="mb-8 text-lg text-gray-900">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                  <h3 class="mb-1.5 font-heading font-bold text-lg text-gray-900">Ronald Richards</h3>
                  <p class="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 p-5">
              <div class="h-full p-0.5 transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
                <div class="h-full px-7 py-8 bg-white rounded-lg">
                  <img class="mb-8" src="gradia-assets/images/testimonials/avatar3.png" alt="" />
                  <p class="mb-8 text-lg text-gray-900">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                  <h3 class="mb-1.5 font-heading font-bold text-lg text-gray-900">Ronald Richards</h3>
                  <p class="text-sm text-gray-600">Software Engineer</p>
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

export default Home