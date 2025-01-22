'use client'

import { deleteCart } from '@/app/actions/deleteCart';
import Image from 'next/image';
import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';

interface CartItemProps {
    image: string;
    title: string;
    category: string;
    size: string;
    quantity: number;
    price: number;
}

const CartItem: React.FC<CartItemProps> = ({
    category,
    image,
    price,
    quantity,
    size,
    title,
}) => {
    return (
        <div className="md:w-[617.33px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 py-4 border-b-[0.5px] border-zinc-400">
            {/* Image Section */}
            <div className="md:w-[40%] w-full flex justify-center md:justify-start">
                <Image
                    alt={title}
                    src={image}
                    width={150}
                    height={150}
                    className="w-[200px] h-[150px]"
                />
            </div>

            {/* Details Section */}
            <div className="md:w-[400px] w-full flex justify-between md:gap-40 gap-4">
                <div className="w-full flex flex-col gap-2">
                    {/* Title and Category */}
                    <div className="text-[15px] font-medium">{title}</div>
                    <div className="text-textgray text-[15px]">{category}</div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-2">
                        <MdDeleteOutline
                            size={24}
                            color="#000"
                            className='cursor-pointer'
                            onClick={() => deleteCart(title)}
                        />
                    </div>
                </div>

                {/* Price Section */}
                <div className="text-right md:text-left">
                    MRP: ₹ {price}
                </div>
            </div>
        </div>
    );
};

export default CartItem;
