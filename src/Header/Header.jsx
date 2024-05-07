import React from 'react'

export default function Header() {
  return (
    <div className=' w-[100%]  mx-auto flex justify-start py-4 border-b-[1px] border-neutral-700'>
        <div class=' flex items-center ml-36'>
          <div className='w-7 h-6'>
            <img class='bg-cover block object-cover h-full w-full' src='./src/assets/Circle.png' alt="" />
          </div>
          <h1 className='ml-5 text-white font-thin text-2xl'>Broke</h1>
        </div>
        <div className=' flex items-center'>
            <ul className='flex ml-16 '>
                <li className=' text-neutral-200 font-normal '>Menu</li>
                <li className='ml-6 text-neutral-200 font-normal'>Location</li>
            </ul>
        </div>

    </div>

  )
}
