import Image from 'next/image'
import React from 'react'
import HeroImage from '@/public/images/Hero.png'

const Hero = () => {
  return (
    <div className='w-full md:px-10 px-4'>
      <Image
        alt=''
        src={HeroImage}
        width={1344}
        height={700}
        className='md:h-[700px] md:w-[1344px]'
      />
    </div>
  )
}

export default Hero