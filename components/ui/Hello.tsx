import React from 'react'

const Hello = () => {
  return (
    <div className='w-full h-[58px] flex justify-center items-center bg-lightgray'>
        <div className='flex flex-col items-center gap-1'>
            <div className='text-[15px] font-medium'>Hello Nike App</div>
            <div className='text-[11px]'>Download the app to access everything Nike. <span className='underline font-medium'>Get Your Great</span></div>
        </div>
    </div>
  )
}

export default Hello