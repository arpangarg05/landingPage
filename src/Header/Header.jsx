import React from 'react'

export default function Header() {
  return (
    <div className=' w-[100%]  mx-auto flex justify-start py-4 border-b-[1px] border-neutral-700'>
        <div className=' flex items-center ml-[5vw]'>
          <div className='w-16 h-16'>
            <img className='bg-cover block object-cover h-full w-full' src='https://i.ibb.co/bQqFtVr/8.png' alt="" />
          </div>
        </div>
        <div className=' flex items-center'>
            <ul className='flex ml-[1vw] '>
                <li className=' text-neutral-200 font-normal '>Work</li>
                <li className='ml-6 text-neutral-200 font-normal'>Contact Us</li>
            </ul>
        </div>

    </div>

  )
}
