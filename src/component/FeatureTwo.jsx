import React from 'react'
import { features } from '../data'
import {FaRegGem} from 'react-icons/fa'

const FeatureTwo = () => {
    const {  title, subtitle, image} = features.feature2
    return (
        <section className='section text-center container'>
            <div className="container d-lg-flex d-block align-items-center justify-content-between">
                <div className="image__side  d-flex justify-content-center">
                    <img src={image.type} alt="" />
                </div>

                <div className="info__side m-5">
                    <h1 className='mt-1 text-center'><FaRegGem style={{color:"#E57C23"}}/>{title}</h1>
                    <p className='mt-5'>{subtitle}</p>
                </div>

            </div>
        </section >
    )
}

export default FeatureTwo