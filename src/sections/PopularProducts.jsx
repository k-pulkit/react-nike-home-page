import React from 'react'
import { products } from '../constants'
import ProductCard from '../components/ProductCard'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="w-full flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          <span>Our </span>
          <span className="text-coral-red">Popular </span>
          <span>Products</span>
        </h2>
        <p className="text-lg text-slate-gray font-montserrat lg:max-w-lg"> Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-md:gap-12">
          { products.map((product, index) => (
            <div key={index}>
              <ProductCard product={product}/>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}

export default PopularProducts;