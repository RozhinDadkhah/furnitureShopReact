import React from 'react'
import { newInStore } from '../data'
import NewItemsSlider from './NewItemSlider'
import { Link } from 'react-router-dom'

const NewItem = () => {
    const { title, subtitle, link, icon } = newInStore
    return (
        <div className='NewItem bg-light section d-lg-flex d-block container py-5 rounded-3 w-100'>

            <div className="newItem__slider w-75 px-4">
                <NewItemsSlider />
            </div>
            <div className="newItem__info text-dark">
                <div className='newItem__info__box d-flex align-items-center flex-column'>
                    <h2 className='my-5 mx-2'>{title}</h2>
                    <p className='my-3'>{subtitle}</p>
                    <Link className='my-3' to="/products">{icon}{link}</Link>
                </div>
            </div>
        </div>
    )
}

export default NewItem