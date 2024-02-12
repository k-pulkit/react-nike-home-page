import React from 'react'

const Button = ({label, iconurl}) => {
  return (
    <button 
    className="border border-coral-red font-montserrat text-white bg-coral-red text-lg leading-none
               flex justify-center items-center gap-2 px-7 py-4 rounded-full
               hover:border-red-800">
        {label}
        {
          iconurl &&
          <img src={iconurl}
            className='ml-2 w-5 h-5 rounded-full'
          ></img>
        }
    </button>
  )
}

export default Button;