import React from 'react'
import { products } from '../data'
import ProductsSlider from '../component/ProductsSlider'

const AllProducts = () => {
    const { title, subtitle } = products
    return (
        <>
            <div className="AllProducts">
                <div className="productInfo">
                    <h1>{title}</h1>
                    <p className='mt-5 text-center'>{subtitle}</p>
                </div>

                <div className="products">
                    <div className="productsItem">
                        <ProductsSlider/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts