import Image from 'next/image'
import React from 'react'

interface ShoeProps {
    image: string,
    title: string,
    category: string,
    price: number
}

const GearCard: React.FC<ShoeProps> = ({
    category,
    image,
    price,
    title
}) => {
    return (
        <div className='flex flex-col gap-2 w-[300px] h-[393px]'>
            {/* Image */}
            <div className=''>
                <Image
                    alt=''
                    src={image}
                    width={300}
                    height={300}
                    className='w-[300px] h-[300px]'
                />
            </div>
            {/* Texts */}
            <div className='flex flex-col'>
                <div className='flex justify-between items-center'>
                    <div className='text-[15px] font-medium leading-[24px]'>{title}</div>
                    <div className='text-[15px] font-medium leading-[24px]'>₹{price}</div>
                </div>
                <div className='text-[15px] w-[90%] leading-[24px] text-textgray'>{category}</div>
            </div>
        </div>
    )
}

export default GearCard