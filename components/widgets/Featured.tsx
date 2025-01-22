import React from 'react'
import FeaturedImage from '@/public/images/Featured.png'
import Image from 'next/image'
import Button from '../ui/Button'

const Featured = () => {
  return (
    <div className='w-full md:px-10 px-4 py-10 flex flex-col gap-4 text-primarycolor'>
        <div className='text-[23px] leading-[28px] font-medium'>Featured</div>
        <div>
            <Image
                alt=''
                src={FeaturedImage}
                width={1344}
                height={700}
                className='md:h-[700px] md:w-[1344px]'
             />
        </div>
        <div className='py-5 flex flex-col gap-6 items-center'>
            <div className='text-[56px] leading-[60px] font-medium'>STEP INTO WHAT FEELS GOOD</div>
            <div className='text-[15px] leading-[24px]'>Cause everyone should know the feeling of running in that perfect pair.</div>
            <div>
                <Button
                    text='Find Your Shoe'
                 />
            </div>
        </div>
    </div>
  )
}

export default Featured