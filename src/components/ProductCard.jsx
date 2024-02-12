import React from 'react'

const ProductCard = ({ product: {imgURL, name, price} }) => {
    return (
    <div className="">
        <div className="flex flex-col">
            <div className="bg-card bg-center bg-cover rounded-xl flex flex-1 justify-center items-center">
                <img
                className='object-contain'
                src={imgURL}
                alt="Shoe collection"
                width={300}
                height={150}
                />
            </div>
            <h3 className="mt-5 font-palanquin font-semibold text-2xl leading-normal w-max">{name}</h3>
            <p className="mt-2 font-bold text-xl text-coral-red font-montserrat">{price}</p>
        </div>
    </div>
  )
};

export default ProductCard;