import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col mt-20 h-[70dvh] border-b-[1px] border-neutral-900 '>
        <div className='mx-auto w-[90%]  sm:border-dashed border-0 lg:w-4/5'>
            <div className=' h-[62px] mx-auto border-b-[1px] border-dashed border-neutral-800'></div>
            <h1 className='mx-auto w-[80%] text-neutral-300 text-center p-0 m-0 font-extrabold border-b-[1px] border-dashed border-neutral-700 text-6xl md:text-7xl lg:text-[7vw] '>The Dev of the Web</h1>
            <div className=' mx-auto p-1 border-[1px] border-t-0 border-neutral-800 border-opacity-90 border-dashed'>
                <h1 className='w-[90%]  lg:w-[60%] text-center text-neutral-400 font-light mx-auto my-10 lg:text-[1.3vw] md:text-[2vw] text-[2.5vw] '>Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</h1>
            </div>

                <div className=' mx-auto flex flex-col'>
                <div className='flex mx-auto gap-4 justify-center pt-10 sm:w-full md:w-2/3 border-x-[1px] border-dashed border-neutral-800 pb-2'>
                    <button className='bg-neutral-200 rounded-lg px-4 sm:px-8 py-2 text-black'>Previous Work</button>
                    <button className='bg-black rounded-lg px-4 sm:px-8 py-2 text-white border-[1px] border-gray-800'>Contact Us</button>
                </div>

                    <h1 className='text-center pb-10 pt-2 text-neutral-400'>We'd love to hear from you</h1>
                </div>
        </div>

    </div>
  )
}
