import React from 'react'

const Links = () => {
  return (
    <div className='w-full md:px-10 px-4 py-10 flex justify-center items-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 md:gap-20 gap-10 md:px-10 px-4'>
            <div className='flex flex-col gap-2'>
                <div className='text-[15px] font-medium text-primarycolor'>Icons</div>
                <div className='flex flex-col gap-2 text-[15px] text-textgray'>
                    <div>Air Force 1</div>
                    <div>Hurrache</div>
                    <div>Air Max 90</div>
                    <div>Air Max 95</div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[15px] font-medium text-primarycolor'>Shoes</div>
                <div className='flex flex-col gap-2 text-[15px] text-textgray'>
                    <div>All Shoes</div>
                    <div>Custom Shoes</div>
                    <div>Jordan Shoes</div>
                    <div>Running Shoes</div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[15px] font-medium text-primarycolor'>Clothing</div>
                <div className='flex flex-col gap-2 text-[15px] text-textgray'>
                    <div>All Clothing</div>
                    <div>Modest Wear</div>
                    <div>Hoodies & Pullovers</div>
                    <div>Shirts & Tops</div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[15px] font-medium text-primarycolor'>Kids</div>
                <div className='flex flex-col gap-2 text-[15px] text-textgray'>
                    <div>Infant & Toddler Shoes</div>
                    <div>Kids' Shoes</div>
                    <div>Kids' Jordan Shoes</div>
                    <div>Kids' Basketball Shoes</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Links