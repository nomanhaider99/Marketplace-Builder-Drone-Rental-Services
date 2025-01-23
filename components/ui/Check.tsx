import Image from 'next/image'
import React from 'react'

interface CheckProps {
    image: string,
    title: string,
    quantity: number,
    size: string,
    price: number,
    description: string
}

const Check: React.FC<CheckProps> = ({
    image,
    price,
    quantity,
    size,
    title,
    description
}) => {
  return (
    <div className='w-full flex gap-4'>
        <div className='w-1/2'>
            <Image
                alt=''
                src={image}
                width={208}
                height={208}
                className='h-[208px] w-[208px]'
             />
        </div>
        <div className='flex flex-col gap-2 w-1/2'>
            <div className='text-2xl'>{title}</div>
            <div className='text-md'>{description.slice(0, 30)+'...'}</div>
            <div>₹ {price}</div>
        </div>
    </div>
  )
}

export default Check