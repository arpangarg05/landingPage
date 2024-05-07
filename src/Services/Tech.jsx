import React from 'react'
import Card from './Card'

export default function Tech() {
  return (
    <div className='mx-auto max-w-screen-2xl sm:px-6 mt-10'>
        <div className='mt-5 flex flex-col lg:flex-row justify-center items-center lg:items-baseline'>
            <h1 className='text-neutral-200 text-center font-bold text-3xl md:pb-[1vw]'>
                Services We Offer
            </h1>
            <h1 className='text-neutral-500 text-center font-light text-xl mt-2 md:mt-0 md:ml-5'>
                Everything you need to build your great product on the web.
            </h1>
        </div>

        <div className='grid grid-cols-1 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 place-content-center'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}


