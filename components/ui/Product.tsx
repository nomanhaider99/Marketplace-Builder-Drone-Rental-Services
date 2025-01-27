'use client';

import Image from 'next/image';
import React from 'react';
import Button from './Button';
import Link from 'next/link';

interface ShoeProps {
    image: string;
    title: string;
    category: string;
    price: number;
    id: string;
    status: string
    description: string;
}

const Product: React.FC<ShoeProps> = ({ category, image, price, title, id, status, description }) => {
    return (
        <div className="flex flex-col gap-2 w-[300px] h-[533px]">
            {/* Image */}
            <div>
                <Image
                    alt={title}
                    src={image}
                    width={300}
                    height={300}
                    className="w-[300px] h-[300px]"
                />
            </div>
            {/* Texts */}
            <div className="flex flex-col">
                <div className="text-[15px] font-medium text-crimson">{status}</div>
                <div className="flex justify-between items-center">
                    <div className="text-[15px] font-medium leading-[24px]">{title}</div>
                    <div className="text-[15px] font-medium leading-[24px]">₹{price}</div>
                </div>
                <div className="text-[15px] leading-[24px] text-textgray">{category}</div>
            </div>
            <Link href={`/products/${title}`}>
                <Button
                    text="View Details"
                    type="button"
                />
            </Link>
        </div>
    );
};

export default Product;
