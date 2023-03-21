import React from 'react'

const Contentview = () => {
  return (
    <div>
      {/* Header*/}
      <section class="py-4 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="px-8 py-6 bg-white overflow-hidden border rounded-xl">
            <a class="flex flex-wrap items-center mb-2 text-neutral-500 hover:text-neutral-600" href="#">
              <svg class="mr-3.5" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.13634 11.197C5.42923 11.4899 5.9041 11.4899 6.197 11.197C6.48989 10.9041 6.48989 10.4292 6.197 10.1363L5.13634 11.197ZM1 6.00001L0.46967 5.46968C0.329018 5.61033 0.25 5.8011 0.25 6.00001C0.25 6.19892 0.329018 6.38969 0.46967 6.53034L1 6.00001ZM6.197 1.86367C6.48989 1.57078 6.48989 1.09591 6.197 0.803013C5.9041 0.51012 5.42923 0.51012 5.13634 0.803013L6.197 1.86367ZM13 6.75001C13.4142 6.75001 13.75 6.41422 13.75 6.00001C13.75 5.5858 13.4142 5.25001 13 5.25001V6.75001ZM6.197 10.1363L1.53033 5.46968L0.46967 6.53034L5.13634 11.197L6.197 10.1363ZM1.53033 6.53034L6.197 1.86367L5.13634 0.803013L0.46967 5.46968L1.53033 6.53034ZM1 6.75001L13 6.75001V5.25001L1 5.25001L1 6.75001Z" fill="currentColor"></path></svg><span>Back to Home</span></a>
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-full md:w-1/2 p-2">
                <h3 class="font-heading mb-1.5 font-semibold text-lg text-4xl" contenteditable="false">Content</h3>

              </div>
              <div class="w-full md:w-1/2 p-2">
                <div class="flex flex-wrap md:justify-end">
                  <div class="w-auto"><a class="inline-flex flex-wrap items-center justify-center px-5 py-2.5 w-full font-medium text-sm text-center text-neutral-50 hover:text-neutral-100 bg-neutral-600 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400" href="#">+ Add Entry</a></div>
                  <div class="w-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dashboard with content*/}
      <section class="py-4 overflow-hidden"><div class="container px-4 mx-auto">
        <div class="pt-5 bg-neutral-50 border border-neutral-100 rounded-xl">
          <div class="px-6">
            <div class="w-full overflow-x-auto">
              <table class="w-full min-w-max">
                <thead><tr class="text-left">
                  <th class="p-0 border-b border-neutral-100">
                    <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium uppercase" href="#">Sapce ID</a></div>
                  </th>
                  <th class="p-0 border-b border-neutral-100">
                    <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium" href="#">API</a></div>
                  </th>
                  <th class="p-0 border-b border-neutral-100">
                    <div class="pb-3.5"><a class="text-sm text-gray-400 font-medium" href="#">Resolved</a></div>
                  </th>
                  <th class="p-0 border-b border-neutral-100">
                    <div class="pb-3.5"></div>
                  </th>
                </tr></thead>
                <tbody>
                  <tr>
                    <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">3849</span></td>
                    <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">15454556RFAGVHDSFF</span></td>
                    <td class="py-3 border-b border-neutral-100"><a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.25" fill="white" stroke="#B8C1CC" stroke-width="1.5"></circle><path d="M13.5 8.5L10 12L6.5 8.5" stroke="#B8C1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></td>
                  </tr>
                  <tr>
                    <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">3849</span></td>
                    <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">15454556RFAGVHDSFF</span></td>
                    <td class="py-3 border-b border-neutral-100"><a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.25" fill="white" stroke="#B8C1CC" stroke-width="1.5"></circle><path d="M13.5 8.5L10 12L6.5 8.5" stroke="#B8C1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></td>
                  </tr>
                  <tr>
                    <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">3849</span></td>
                    <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">15454556RFAGVHDSFF</span></td>
                    <td class="py-3 border-b border-neutral-100"><a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg></a></td>
                  </tr>
                  <tr>
                    <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">3849</span></td>
                    <td class="py-3 pr-4 border-b border-neutral-100"><span class="text-sm">15454556RFAGVHDSFF</span></td>
                    <td class="py-3 border-b border-neutral-100"><a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg></a></td>
                  </tr>
                  <tr>
                    <td class="py-3 pr-4"><span class="text-sm">3849</span></td>
                    <td class="py-3 pr-4"><span class="text-sm">15454556RFAGVHDSFF</span></td>
                    <td class="py-3"><a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.25" fill="white" stroke="#B8C1CC" stroke-width="1.5"></circle><path d="M13.5 8.5L10 12L6.5 8.5" stroke="#B8C1CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </section>

    </div>

  )
}

export default Contentview