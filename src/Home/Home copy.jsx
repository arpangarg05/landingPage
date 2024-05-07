import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col mt-20 '>
        <div className='flex flex-col'> {/* For Text */}
            <div className='text-white flex flex-col'>
                <h1 className='mx-auto font-extralight text-gray-500 text-5xl'>Design. Innovation.</h1> 
                <h1 className='mx-auto mt-1font-extralight text-gray-300 text-5xl'>Technology. Creativity.</h1>
            </div>
            <div className='text-white flex flex-col mt-3'>
                <h1 className='mx-auto font-medium text-gray-300'>We're a innovation studio with focus in cutting-edge technology. </h1> 
                <h1 className='mx-auto w-96 text-center text-gray-500'>We develop websites for renowned brands </h1>
            </div>

                <button className='mx-auto border-2 py-1 px-4 mt-3 text-white '> 
                    View Work 
                </button>
        </div>
        <div className=''>
            <img src="./src/assets/Circle.png" className="w-[35%] mx-auto p-0 mt-32 " alt=""  />
        </div>

    </div>
  )
}
