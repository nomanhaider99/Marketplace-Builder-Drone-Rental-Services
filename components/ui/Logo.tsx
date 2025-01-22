import Image from 'next/image'
import React from 'react'
import LogoImage from '@/public/images/Logo.png'

const Logo = () => {
  return (
    <Image
        alt=''
        src={LogoImage}
        width={78.47}
        height={78.47}
        className='h-[78.47] w-[78.47]'
     />
  )
}

export default Logo