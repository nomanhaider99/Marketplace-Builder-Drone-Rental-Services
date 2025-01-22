import Image from 'next/image'
import React from 'react'
import Frame1 from '@/public/images/Frame1.png'
import Frame2 from '@/public/images/Frame2.png'
import Frame3 from '@/public/images/Frame3.png'

const Essentials = () => {
  return (
    <div className='w-full flex flex-col gap-2 md:px-10 px-4 py-10'>
        <div className='text-[23px] leading-[28px] font-medium'>The Essentials</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            <Image
                alt=''
                src={Frame1}
                width={440}
                height={540}
                className='h-[540px] w-[440px]'
             />
            <Image
                alt=''
                src={Frame2}
                width={440}
                height={540}
                className='h-[540px] w-[440px]'
             />
            <Image
                alt=''
                src={Frame3}
                width={440}
                height={540}
                className='h-[540px] w-[440px]'
             />
        </div>
    </div>
  )
}

export default Essentials