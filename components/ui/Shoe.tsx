import Image from 'next/image'
import React from 'react'

interface ShoeProps {
    image: string,
    title: string,
    category: string,
    price: number
}

const Shoe: React.FC<ShoeProps> = ({
    category,
    image,
    price,
    title
}) => {
    return (
        <div className='flex flex-col gap-2 md:w-[400.36px] h-[510.36px]'>
            {/* Image */}
            <div className=''>
                <Image
                    alt=''
                    src={image}
                    width={400.36}
                    height={400.36}
                    className='w-[441.36px] h-[441.36px]'
                />
            </div>
            {/* Texts */}
            <div className='flex flex-col'>
                <div className='flex justify-between items-center'>
                    <div className='text-[15px] font-medium leading-[24px]'>{title}</div>
                    <div className='text-[15px] font-medium leading-[24px]'>₹{price}</div>
                </div>
                <div className='text-[15px] leading-[24px] text-textgray'>{category}</div>
            </div>
        </div>
    )
}

export default Shoe