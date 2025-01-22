import Image from 'next/image'
import React from 'react'
import Facebook from '@/public/images/Facebook.png'
import Youtube from '@/public/images/Youtube.png'
import Instagram from '@/public/images/Instagram.png'
import Twitter from '@/public/images/Twitter.png'

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between bg-primarycolor md:px-10 px-4 py-10 gap-10 md:gap-0'>
        <div className='flex md:flex-row flex-col gap-20'>
            <div className='flex flex-col gap-2 uppercase text-[10px] text-white'>
                <div>find a store</div>
                <div>become a member</div>
                <div>signup for email</div>
                <div>send us facebook</div>
                <div>student discounts</div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[10px] text-white'>GET HELP</div>
                <div className='flex flex-col gap-2 text-[12px] text-textgray'>
                    <div>Order Status</div>
                    <div>Delivery</div>
                    <div>Returns</div>
                    <div>Payment Options</div>
                    <div>Contact Us On Nike.com Inquiries</div>
                    <div>Contact Us On All Other Inquiries</div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-[10px] text-white'>ABOUT NIKE</div>
                <div className='flex flex-col gap-2 text-[12px] text-textgray'>
                    <div>News</div>
                    <div>Careers</div>
                    <div>Investors</div>
                    <div>Sustainability</div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-start gap-2'>
            <Image
                alt=''
                src={Twitter}
                width={30}
                height={30}
                className='w-[30px] h-[30px]'
             />
            <Image
                alt=''
                src={Facebook}
                width={30}
                height={30}
                className='w-[30px] h-[30px]'
             />
            <Image
                alt=''
                src={Youtube}
                width={30}
                height={30}
                className='w-[30px] h-[30px]'
             />
            <Image
                alt=''
                src={Instagram}
                width={30}
                height={30}
                className='w-[30px] h-[30px]'
             />
        </div>
    </div>
  )
}

export default Footer