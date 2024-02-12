import React from 'react';
import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {

  const [heroShoe, setHeroShoe] = useState(shoes[0].bigShoe)

  return (
    <section id="home" className="max-container w-full min-h-screen flex xl:flex-row flex-col justify-center gap-10">
      <div className="relative w-full xl:w-2/5 flex flex-col flex-0 justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">Our summer collection.</p>
        <h1 className="mt-10 text-8xl text-black font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:text-nowrap pr-10 z-10 relative">The New Arrival</span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span>
          <span> Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray mt-6 mb-14 leading-8 text-lg lg:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        {/* Button component */}
        <Button label="Shop now" iconurl={arrowRight} />
        {/* Stats section */}
        <section className="w-full mt-20 flex flex-wrap justify-start items-start gap-16">
          { statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-semibold font-palanquin">{stat.value}</p>
                <p className="text-md font-montserrat text-slate-gray leading-8 font-normal">{stat.label}</p>
              </div>
          )) }
        </section>
      </div>

      <div className="relative max-xl:pt-20 max-xl:pb-24 flex flex-1 justify-center items-center w-full 
                      xl:min-h-screen bg-primary bg-hero bg-cover bg-center">
          <img
           className='object-contain relative z-10'
           src={heroShoe}
           width={610}
           height={500}></img>

           <div className="w-5/2 justify-around items-center flex absolute -bottom-12 gap-10">
              {shoes.map((shoe, index) => (
                <div key={index}>
                  <ShoeCard heroShoe={heroShoe} shoe={shoe} handlerChangeShoe={(s) => setHeroShoe(s.bigShoe)} />
                </div>
              ))}
           </div>
      </div>
    </section>
  )
}

export default Hero;