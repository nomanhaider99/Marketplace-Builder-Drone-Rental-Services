import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '../ui/Button';
import Image from 'next/image';
import Mobile from '@/public/images/Mobile.png';
import Message from '@/public/images/Message.png';
import Envelope from '@/public/images/Envelope.png';

const Help = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10 flex flex-col items-center gap-8">
      {/* Header */}
      <div className="text-[28px] md:text-[32px] leading-[36px] font-medium text-center">
        GET HELP
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-[457.33px] h-[46px] bg-white text-textgray text-[15px] rounded border-[0.5px] border-zinc-400 px-4 flex items-center justify-between">
        <input
          type="text"
          className="focus:outline-none w-full"
          placeholder="What can we help you with?"
        />
        <CiSearch size={24} color="#757575" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-4">
        {/* Left Content */}
        <div className="md:w-[70%] flex flex-col gap-8">
          {/* Payment Options */}
          <div className="flex flex-col gap-4">
            <div className="text-[24px] md:text-[28px] font-medium">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </div>
            <div className="flex flex-col gap-4 text-[15px]">
              <div>
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
                </div>
                <div>
                  If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
                </div>
              </div>
            </div>
            <div>
              <span className="underline font-medium">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Button text="JOIN US" />
              <Button text="SHOP NIKE" />
            </div>
          </div>

          {/* FAQs */}
          <div className="flex flex-col gap-4">
            <div className="text-[20px] font-medium">FAQs</div>
            <div className="flex flex-col gap-4 text-[16px]">
              <div className="flex flex-col gap-1">
                <div className="font-medium">Does my card need international purchases enabled?</div>
                <div className="text-[14px]">
                  Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-medium">Can I pay for my order with multiple methods?</div>
                <div className="text-[14px]">
                  No, payment for Nike orders can't be split between multiple payment methods.
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-medium">What payment method is accepted for SNKRS orders?</div>
                <div className="text-[14px]">
                  You can use any accepted credit card to pay for your SNKRS order.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-[30%] flex flex-col gap-8 px-4 md:px-10 border-t md:border-t-0 md:border-l-[0.5px] border-zinc-400">
          {/* Heading */}
          <div className="uppercase text-[24px] md:text-[28px] font-medium text-center md:text-left">
            Contact Us
          </div>

          {/* Contact Methods */}
          <div className="flex flex-col gap-6">
            {/* Mobile Section */}
            <div className="flex flex-col items-center gap-2 text-center">
              <Image alt="Mobile" src={Mobile} width={64} height={64} />
              <div className="font-medium">000 800 919 0566</div>
              <div>Products & Orders: 24 hours a day, 7 days a week</div>
            </div>

            {/* Message Section */}
            <div className="flex flex-col items-center gap-2 text-center">
              <Image alt="Message" src={Message} width={64} height={64} />
              <div className="font-medium">24 hours a day</div>
              <div>7 days a week</div>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center gap-2 text-center">
              <Image alt="Envelope" src={Envelope} width={64} height={64} />
              <div className="font-medium">We'll reply within</div>
              <div>five business days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
