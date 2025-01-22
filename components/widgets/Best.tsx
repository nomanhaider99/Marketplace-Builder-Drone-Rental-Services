import React from 'react'
import LeftArrow from '@/public/images/LeftArrow.png'
import RightArrow from '@/public/images/RightArrow.png'
import Image from 'next/image'
import { bestshoes } from '@/data/bestshoes'
import Shoe from '../ui/Shoe'

const Best = () => {
  return (
    <div className='w-full flex flex-col gap-4 text-primarycolor md:px-10 px-4 py-10'>
        <div className='flex items-center justify-between w-full'>
            <div className='text-[22px] font-medium'>Best of Air Max</div>
            <div className='flex items-center gap-3'>
                <div className='text-[15px] font-medium'>Shop</div>
                <div className='flex items-center gap-1'>
                    <div className='cursor-pointer'>
                        <Image
                            alt=''
                            src={LeftArrow}
                            width={48}
                            height={48}
                            className='h-[48px] w-[48px]'
                         />
                    </div>
                    <div className='cursor-pointer'>
                        <Image
                            alt=''
                            src={RightArrow}
                            width={48}
                            height={48}
                            className='h-[48px] w-[48px]'
                         />
                    </div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                bestshoes.map((item, index) => (
                    <Shoe
                        category={item.category}
                        image={item.image as any}
                        price={item.price}
                        title={item.title}
                        key={index}
                     />
                ))
            }
        </div>
    </div>
  )
}

export default Best