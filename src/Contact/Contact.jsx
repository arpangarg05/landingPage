import React from 'react'

export default function Contact() {
  return (
    
<div class="w-full">
    <div class="h-96 ml-48"></div>
    <div class="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class=" w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center text-white">Contact me</p>
            <form action="" method="post">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">Name</label>
                        <input type="text" class="leading-none text-neutral-500 p-3 focus:outline-none  mt-4 bg-neutral-800 rounded" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none text-gray-300">Phone</label>
                        <input type="email" class="leading-none text-gray-50 p-3 focus:outline-none  mt-4 bg-neutral-800 rounded"/>
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">Subject</label>
                        <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none  mt-4 bg-neutral-800 rounded"/>
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-gray-300">Message</label>
                        <textarea type="text" class="h-20 text-base leading-none text-gray-50 p-3 focus:outline-none  mt-4 bg-neutral-800 border-0 rounded"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none  py-4 px-10 bg-neutral-200 rounded-lg sm:px-8 text-black">
                        Send message
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
