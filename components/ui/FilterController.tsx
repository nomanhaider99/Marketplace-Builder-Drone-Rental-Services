import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

interface FilterControllerProps {
    items: string[],
    title: string
}

const FilterController: React.FC<FilterControllerProps> = ({
    items,
    title
}) => {
  return (
    <div className='flex flex-col gap-4 py-2 w-[220px] border-t-[0.5px] border-zinc-400'>
        <div className='flex justify-between items-center w-full'>
            <div className='text-[16px] font-medium'>{title}</div>
            <div><IoIosArrowDown size={14} color='#000' /></div>
        </div>
        <div>
            {
                items.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-2 text-[15px]'
                    >
                        <div><input type="checkbox" name="" id="" /></div>
                        <div>{item}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FilterController