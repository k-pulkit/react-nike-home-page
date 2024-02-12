import React from 'react';
import { shoe8 } from '../assets/images';
import Button from '../components/Button';

const SuperQuality = () => {
  return (
    <div id="SuperQuality" className="flex flex-row justify-between max-container items-center">
      <div className="flex flex-col"> 
        <h1 className="text-4xl font-bold font-palanquin leading-tight">
          We Provide You <span className='text-coral-red'> Super </span>
          <br />
          <span className='text-coral-red'>Quality </span>
          Shoes
        </h1>
        <p className="mt-4 font-montserrat text-slate-gray text-lg md:max-w-lg leading-8">
          <span>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</span>
          <br />
          <span className="mt-4 inline-block">Our dedication to detail and excellence ensures your satisfaction</span>
        </p>
        <div className="mt-10">
          <Button label="View Details"/>
        </div>
      </div>
      <div className="flex flex-row justify-top items-start pr-10">
        <img
         className='object-contain'
         src={shoe8}
         width={580}
         >
        </img>
      </div>
    </div>
  )
}

export default SuperQuality;