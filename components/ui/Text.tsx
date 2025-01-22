import React from 'react'
import Button from './Button'

const Text = () => {
  return (
    <div className='w-full flex justify-center items-center py-5 text-primarycolor '>
        <div className='flex flex-col items-center text-center gap-4'>
            <div className='text-[15px] leading-[24px] font-medium'>First Look</div>
            <div className='text-[56px] leading-[60px] font-medium'>NIKE AIR MAX PULSE</div>
            <div className='text-[15px] leading-[24px] font-normal md:w-[53%] w-full'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.</div>
            <div className='flex items-center gap-4'>
                <Button
                    text='Notify Me'
                 />
                <Button
                    text='Shop Air Max'
                 />
            </div>
        </div>
    </div>
  )
}

export default Text