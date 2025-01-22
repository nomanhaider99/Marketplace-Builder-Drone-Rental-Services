'use client';

import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FiPackage } from 'react-icons/fi';
import Check from '../ui/Check';
import Button from '../ui/Button';
import { OrderType } from '@/types/order';
import { client } from '@/sanity/lib/client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState<OrderType[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null | undefined>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/user');
      const userData = await response.json();
      setUserId(userData.user?.name || null);

      if (!userId) {
        setLoading(false);
        return;
      }

      const query = `*[_type == "order" && userId == $userId] {
        _id,
        productId,
        productName,
        price,
        category,
        imageUrl {
          asset {
            url
          }
        }
      }`;

      const orders: OrderType[] = await client.fetch(query, { userId });
      setData(orders);

      const calculatedSubtotal = orders.reduce((acc, item) => acc + item.price, 0);
      setSubtotal(calculatedSubtotal);

      setLoading(false);
    };

    fetchData();
  }, [userId]);

  const onSubmit = async (formData: FieldValues) => {
    try {
      const response = await fetch('/api/label', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          address: formData.address,
          postalCode: formData.postalCode,
          locality: formData.locality,
          state: formData.state,
          country: formData.country,
          phoneNumber: formData.phone,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to place order.',);
      }

      const result: ShipmentType = await response.json();
      console.log('Order placed successfully:', result);
      toast.success('Order placed successfully!');
      router.push(`/success/${result.label_id}`);
    } catch (error: any) {
      console.error(error);
      toast.error('An error occurred while placing your order. Please try again.');
    }
  };

  if (loading) {
    return <div className='px-10'>Loading...</div>;
  }

  if (!userId) {
    return <div className='px-10'>User not authenticated</div>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex justify-center items-center px-4 py-8"
    >
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-medium">
              How would you like to get your order?
            </div>
            <div className="text-sm text-gray-600">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. Learn More
            </div>
            <div className="w-full h-[82px] px-4 rounded-xl border-2 border-black flex items-center gap-4">
              <FiPackage size={24} color="#000" />
              <div className="text-sm font-medium">Deliver It</div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <div className="text-xl font-medium">Enter your name and address:</div>
            <div className="flex flex-col gap-4 mt-4">
              <input
                {...register('fullName')}
                type="text"
                className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                placeholder="Full Name"
              />
              <input
                {...register('address')}
                type="text"
                className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                placeholder="Shipping Address"
              />
              <div className="flex flex-wrap gap-4">
                <input
                  {...register('postalCode')}
                  type="text"
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 text-sm placeholder-gray-500 rounded"
                  placeholder="Postal Code"
                />
                <input
                  {...register('locality')}
                  type="text"
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 text-sm placeholder-gray-500 rounded"
                  placeholder="Locality"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <input
                  {...register('state')}
                  type="text"
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 text-sm placeholder-gray-500 rounded"
                  placeholder="State / Province"
                />
                <input
                  {...register('country')}
                  type="text"
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 text-sm placeholder-gray-500 rounded"
                  placeholder="Country Name"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-xl font-medium">What's your contact information?</div>
            <div className="flex flex-col gap-4 mt-4">
              <input
                {...register('phone')}
                type="tel"
                className="px-4 py-2 bg-white border border-gray-300 text-sm w-full placeholder-gray-500 rounded"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-4">
            <Button
              text="Place Order"
              type="submit"
              className="bg-lightgray w-full mt-4 py-2 rounded"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex flex-col gap-8">
          <div className="text-xl font-medium">Order Summary</div>
          <div className="flex flex-col gap-4">
            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
            </div>
            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span>₹ {subtotal}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 h-[40vw] overflow-y-scroll">
            {data.map((item, index) => (
              <Check
                image={''}
                price={item.price}
                quantity={2}
                size="L"
                title={item.productName}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
