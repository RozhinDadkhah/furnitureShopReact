import React, { useContext } from 'react'
import { products } from '../data'
import { HiPlus } from 'react-icons/hi';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Cartcontext } from '../context/Context'

const ProductsSlider = () => {
    const { pages } = products
    const GlobalState = useContext(Cartcontext)
    const dispatch = GlobalState.dispatch
    console.log(GlobalState);


    return (
        <div className='container'>
            <div className="row">
                {pages.map((page, index) => {
                    page.quantity = 1
                    const { name, image, icon, price, oldPrice } = page
                    return (
                        <div className="productSlider col-6 col-lg-3 col-md-4" key={index}>
                            <div className="productSlider2">
                                <div className="imageInfo">
                                    <img src={image?.type} alt="" />
                                </div>

                                <div className="InfoDiv">
                                    <div className="productName my-3 fs-5 fw-bold">{name}</div>
                                    <div className="productPrice d-flex p-1 rounded-2 text-center">
                                        <p className='mx-2'>
                                            <AiOutlineArrowLeft className='text-danger fs-5 mx-2' />
                                            قیمت با تخفیف
                                        </p>
                                        ${price}
                                    </div>
                                    <div className="productOldPrice d-flex  p-1 rounded-2 text-center my-3 text-muted">
                                        <p>
                                            <AiOutlineArrowLeft className='text-info fs-5 mx-2' />
                                            قیمت قبل
                                        </p>
                                        <del className='mx-3 text-muted'>${oldPrice}</del>
                                    </div>
                                    <button onClick={() => dispatch({ type: 'ADD', payload: page })} className="productAdd border-0"><HiPlus className='mx-2' />افزودن به سبد خرید</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
export default ProductsSlider