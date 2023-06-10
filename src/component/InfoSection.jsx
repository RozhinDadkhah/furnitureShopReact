import React from 'react'
import { stats } from '../data'

const InfoSection = () => {
    return (
        <div className='InfoSection'>
            <div className="d-flex flex-wrap">
                {stats.map((item, index) => {
                    return (
                        <div key={index} className='InfoSectionbox'>
                            <div className='mb-4 item'>
                                <h2>{item.value}</h2>
                            </div>
                            <div>
                                <h6>{item.text}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InfoSection