import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Input = () => {
  return (
    <div className='w-[180px] flex justify-between items-center bg-lightgray text-primarycolor h-[40px] px-4 rounded-full gap-6'>
        <div>
            <CiSearch
                size={24}
                color='#000'
             />
        </div>
        <div>
            <input 
                type="text" 
                className='bg-transparent text-[16px] font-medium text-primarycolor focus:outline-none placeholder:text-primarycolor' 
                placeholder='Search'
            />
        </div>
    </div>
  )
}

export default Input