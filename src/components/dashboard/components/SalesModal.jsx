import React from 'react'

const SalesModal = () => {
  return (

    <section class="fixed inset-0 z-50 flex items-center justify-center flex-wrap py-20 bg-neutral-100 bg-opacity-80 overflow-y-auto"><div class="container px-4 mx-auto">
      <div class="pt-5 max-w-sm mx-auto bg-neutral-50 border border-neutral-100 rounded-xl">

        <h1 class="text-5xl mt-2 mb-6 leading-tight text-center font-heading">Heading 1</h1>

        <p class="mb-2 text-sm text-gray-500 flex justify-content-center text-center leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi suscipit nisi obcaecati quia pariatur enim.
        </p>

        <div class="w-full  px-4 mx-auto">
          <form>
            <div class="mb-4">
              <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Email" /></div>
            <div class="mb-4">
              <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="password" placeholder="Password" /></div>
            <div class="mb-4">
              <label class="text-gray-500">
                <input class="mr-2 leading-tight" type="checkbox" /><span class="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Text input</label>
            <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Enter text"><label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Text input</label>
              <input class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Enter text"><label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Example select</label>
                <select class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"><option>-- Select product --</option><option>Product 1</option><option>Product 2</option><option>Product 3</option></select><label class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold">Example textarea</label>
                <textarea class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write something..." rows="5" /></textarea><div class="mb-4">
                <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">Send now</button>
              </div>
          </form>
        </div>




      </div>
    </div>
    </section>



  )
}

export default SalesModal