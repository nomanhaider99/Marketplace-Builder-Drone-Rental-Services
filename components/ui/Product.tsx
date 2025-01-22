'use client';

import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { addToCart } from '@/app/actions/addToCart';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface ShoeProps {
    image: string;
    title: string;
    category: string;
    price: number;
    id: string;
    status: string
}

const Product: React.FC<ShoeProps> = ({ category, image, price, title, id, status }) => {
    const { handleSubmit } = useForm();
    const router = useRouter();

    const submitAddToCart = async () => {
        try {
            const session = await getSession();

            if (!session?.user?.name) {
                toast.error('User Not Found');
                router.push('/login')
            } else {
                const data = {
                    userId: session?.user?.name,
                    productId: id,
                    productName: title,
                    price: price,
                    category: category,
                    imageUrl: image,
                };
                await addToCart(data);
                toast.success('Product Added Into Cart!');
                router.push('/cart');
            }
        } catch (error) {
            toast.error('Failed To Add Product Into Cart!');
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <Link href={`/products/${title}`}>
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
                <Button
                    text="Add to Cart"
                    type="button"
                    onClick={handleSubmit(submitAddToCart)}
                />
            </div>
        </Link>
    );
};

export default Product;
