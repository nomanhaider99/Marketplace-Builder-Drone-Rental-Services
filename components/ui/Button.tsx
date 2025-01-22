import React from 'react'

interface ButtonProps {
  text: string,
  className?: string,
  type?: 'submit' | 'button',
  onClick?: () => void,
  secondary?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, className, secondary, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${secondary ? 'bg-white text-primarycolor border-[0.5px] border-primarycolor' : 'bg-primarycolor text-white'}  text-[15px] leading-[24px] text-center px-4 py-2 rounded-full ${className}`}
    >
      {text}
    </button>
  )
}

export default Button