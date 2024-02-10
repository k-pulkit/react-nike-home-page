import React from 'react'

const ShoeCard = ({ heroShoe, shoe, handlerChangeShoe }) => {
    console.log(shoe.bigShoe)
    return (
    <div className={`cursor-pointer border-2 rounded-xl h-full w-full justify-center items-center flex max-sm:flex-1 ${heroShoe === shoe.bigShoe ? "border-coral-red" : "border-transparent"}`}>
        <div 
        className=" w-full bg-card bg-center bg-cover rounded-xl flex items-center justify-center"
        onClick={() => {
            if (heroShoe !== shoe.bigShoe) {
                handlerChangeShoe(shoe)
            }
        }}
        >
            <img
             className='object-contain'
             src={shoe.thumbnail}
             alt="Shoe collection"
             width={127}
             height={103}
            />
        </div>
    </div>
  )
};

export default ShoeCard;