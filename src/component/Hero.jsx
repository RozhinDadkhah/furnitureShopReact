import React from 'react'
import { hero } from '../data'
import { Link } from 'react-router-dom'

const Hero = () => {
    const { title, subtitle, buttonText } = hero
    return (
        <div className='hero px-5 text-center mx-4'>
            <div className='hero__info'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <Link className='text-dark fw-bold' to="/products">{buttonText}</Link>
            </div>
        </div>
    )
}

export default Hero