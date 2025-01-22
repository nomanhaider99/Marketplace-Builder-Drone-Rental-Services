import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { GoDotFill } from 'react-icons/go'

interface DetailProps {
    image: string,
    title: string,
    description: string,
    price: number,
    inventory: number,
    colors: string[]
}

const Detail: React.FC<DetailProps> = ({
    description,
    image,
    price,
    title,
    inventory,
    colors
}) => {
    return (
        <div className='w-full flex flex-col md:flex-row justify-between gap-10'>
            <div className='md:w-1/2'>
                <Image
                    alt=''
                    src={image}
                    width={653}
                    height={653}
                    className='md:w-[653px] w-full md:h-[653px]'
                />
            </div>
            <div className='md:w-1/2 w-full flex flex-col gap-3 text-primarycolor'>
                <div className='text-[48px] leading-[48px] font-medium'>{title}</div>
                <div className='text-[15px] leading-[28px]'>{description}</div>
                <div className='flex flex-col gap-2'>
                    <div className='font-medium'>Available Colors</div>
                    <div className='flex flex-col gap-1'>
                        {
                            colors.map((item, index) => (
                                <div 
                                    className='flex items-center gap-2'
                                    key={index}
                                >
                                    <div><GoDotFill size={30} /></div>
                                    <div>{item}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full flex items-center gap-8'>
                    <div className='text-[36px] font-medium'>₹ {price}</div>
                    <div className='text-xl '>Stock: {inventory}</div>
                </div>
                <div>
                    <Button
                        text='Add to Cart'
                        className='w-full md:w-[15vw]'
                    />
                </div>
            </div>
        </div>
    )
}

export default Detail