import React from 'react'
import { features } from '../data'
import InfoSection from './InfoSection'

const Feature = () => {

    const { title, subtitle, image, items } = features

    return (
        <section className='text-center container'>
            <InfoSection />
            <div className="container d-lg-flex d-block align-items-center justify-content-between" style={{marginTop:"6rem"}}>
                <div className="info__side">
                    <h1 className='mt-1 text-center'>{title}</h1>
                    <p className='mt-5'>{subtitle}</p>
                    <div className="info__box">
                        {items.map((item, index) => {
                            const { icon, title, subtitle } = item
                            return (
                                <div key={index} className='mt-5'>
                                    <div className='d-flex'>
                                        <div className="icon fs-4 mx-2" style={{color:"#E57C23"}}>{icon}</div>
                                        <h2>{title}</h2>
                                    </div>
                                        <p className='mt-3 mx-5' style={{textAlign:"right"}}>{subtitle}</p>
                                </div>

                            )
                        })}
                    </div>
                </div>

                <div className="image__side  d-flex justify-content-center">
                    <img src={image.type} alt="" />
                </div>
            </div>
        </section >
    )
}

export default Feature