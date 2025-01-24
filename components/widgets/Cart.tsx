'use client'

import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import CartItem from '../ui/CartItem';
import { OrderType } from '@/types/order';
import Link from 'next/link';

const Cart = () => {
  const [data, setData] = useState<OrderType[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null | undefined>(null);
  console.log(`Data: `,data);

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUserId(data.user?.name || null);
    };
  
    fetchUserId();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, cartResponse] = await Promise.all([
          fetch('/api/user'),
          fetch('/api/getCart')
        ]);
        const userData = await userResponse.json();
        const cartData: OrderType[] = await cartResponse.json();
        
        const userId = userData.user?.name || null;
        setUserId(userId);
  
        if (userId) {
          setData(cartData);
          const calculatedSubtotal = cartData.reduce((acc, item) => acc + item.price, 0);
          setSubtotal(calculatedSubtotal);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

  if (loading) {
    return <div className='px-10'>Loading...</div>;
  }

  if (!userId) {
    return <div className='px-10'>User not authenticated</div>;
  }

  return (
    <div className="w-full md:px-10 px-4 py-10 flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-5 text-primarycolor">
        <div className="md:w-[70%] w-full flex flex-col gap-4">
          <div className="md:w-[717.33px] w-full p-2 bg-lightgray flex flex-col gap-2">
            <div className="text-[13px] leading-[14px] font-medium">Free Delivery</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[22px] leading-[33px] font-medium">Bag</div>
            <div className="flex flex-col gap-2">
              {data.length > 0 ? data.map((item, index) => (
                <CartItem
                  category={item.category}
                  image={item.imageUrl as any}
                  price={item.price}
                  id={item._id}
                  title={item.productName}
                  key={index}
                />
              )) : <div>No, Items found in cart</div>}
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-full flex flex-col gap-8">
          <div className="text-[21px] font-medium">Summary</div>
          <div className="flex flex-col gap-4">
            <div className="border-b-[0.5px] border-zinc-400 flex flex-col gap-1 text-[15px]">
              <div className="w-full flex justify-between items-center">
                <div>Subtotal</div>
                <div>₹ {subtotal}</div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div>Estimated Delivery & Handling</div>
                <div>Free</div>
              </div>
            </div>
            <div className="border-b-[0.5px] border-zinc-400 flex flex-col gap-1 text-[15px]">
              <div className="w-full flex justify-between items-center">
                <div>Total</div>
                <div>₹ {subtotal}</div>
              </div>
            </div>
          </div>
          <div>
            <Link href="/checkout">
              <Button text="Member Checkout" className="md:w-[30vw] w-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
