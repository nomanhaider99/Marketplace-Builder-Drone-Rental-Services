import Image from 'next/image'
import React from 'react'
import DontImage from '@/public/images/Dont.png'
import Button from '../ui/Button'

const Dont = () => {
  return (
    <div className='w-full flex flex-col gap-4 text-primarycolor md:px-10 px-4 py-10'>
        <div className='text-[23px] leading-[28px] font-medium'>Don't Miss</div>
        <div>
            <Image
                alt=''
                src={DontImage}
                width={1344}
                height={700}
                className='h-[700px] w-[1344px]'
             />
        </div>
        <div className='py-5 flex flex-col gap-6 items-center text-center'>
            <div className='text-[56px] leading-[60px] font-medium'>FLIGHT ESSENTIALS</div>
            <div className='text-[15px] leading-[24px]'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</div>
            <div>
                <Button
                    text='Shop'
                 />
            </div>
        </div>
    </div>
  )
}

export default Dont