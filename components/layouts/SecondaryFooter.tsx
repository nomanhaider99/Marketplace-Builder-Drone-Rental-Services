import React from 'react'
import India from '@/public/images/India.png'
import Image from 'next/image'

const SecondaryFooter = () => {
  return (
    <div className='w-full md:h-[62px] bg-primarycolor flex flex-col md:flex-row justify-between items-center md:px-10 px-4 gap-10 md:gap-0'>
        <div className='flex flex-col md:flex-row items-center gap-4'>
            <div>
                <Image
                    alt=''
                    src={India}
                    width={60.03}
                    height={15}
                    className='h-[15px] w-[60.03px]'
                 />
            </div>
            <div className='text-[11px] text-textgray mt-1'>© 2023 Nike, Inc. All Rights Reserved</div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] text-textgray'>
            <div>Guides</div>
            <div>Terms of sale</div>
            <div>Terms of use</div>
            <div>Nike Privacy Policy</div>
        </div>
    </div>
  )
}

export default SecondaryFooter