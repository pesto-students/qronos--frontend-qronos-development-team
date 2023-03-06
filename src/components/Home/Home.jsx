import React from 'react'

import Header from './Header'
import CalltoAction from './CalltoAction'
import Footer from './Footer'
import gradientbg from './svgs/gradient.svg'
import testimonialbg from './svgs/Testimonial.svg'
import testimonial2bg from './svgs/howitwork.svg'
const Home = () => {
  const bg_gradient = {
    backgroundImage: `url(${gradientbg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',


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
      {/* Hero section*/}

      <section style={bg_gradient} class="relative overflow-hidden">

        <div class="relative z-10  pt-16">
          <div class="container px-4 mx-auto">
            <div class="text-center">
              <p class="mb-5 text-sm text-indigo-600 font-semibold uppercase tracking-px">👋 Meet new Flaro</p>
              <h1 class="mb-9 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">The Ultimate Webinar Tool</h1>
              <div class="mb-7 md:inline-block">
                <button class="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Start 14 Days Free Trial</button>
              </div>
              <div class="mb-16 block">
                <div class="inline-block text-black hover:text-gray-800" href="#">
                  <div class="flex flex-wrap items-center -m-1.5">
                    <div class="w-auto p-1.5">
                      <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.18003 11.4261C2.8586 12.3918 1 11.448 1 9.81135V3.43865C1 1.80198 2.8586 0.858209 4.18003 1.82387L8.5403 5.01022C9.63359 5.80916 9.63359 7.44084 8.5403 8.23978L4.18003 11.4261Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div class="w-auto p-1.5">
                      <p class="font-medium">See how the magic happens</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative max-w-max mx-auto">
                <img class="mx-auto transform hover:scale-105 transition ease-in-out duration-1000" src="https://static.shuffle.dev/uploads/files/aa/aa76bc6a36158b7ac4204a7b269a276536be45f7/hero-image.png" alt="" />

              </div>
            </div>
          </div>
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
            <h2 class="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">How Flaro helps you to launch your business in no time and grow.</h2>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-full p-1.5">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                    <p class="mb-4 text-base" contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit eaque totam aliquid veritatis assumenda temporibus harum unde!</p>

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
            <h2 class="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">How Flaro helps you to launch your business in no time and grow.</h2>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-full p-1.5">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                    <p class="mb-4 text-base" contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit eaque totam aliquid veritatis assumenda temporibus harum unde!</p>

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
            <h2 class="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">How Flaro helps you to launch your business in no time and grow.</h2>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-full p-1.5">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                    <p class="mb-4 text-base" contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit eaque totam aliquid veritatis assumenda temporibus harum unde!</p>

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
            <h2 class="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">How Flaro helps you to launch your business in no time and grow.</h2>
            <div class="flex flex-wrap -m-1.5">
              <div class="w-full p-1.5">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                    <p class="mb-4 text-base" contenteditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit eaque totam aliquid veritatis assumenda temporibus harum unde!</p>

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