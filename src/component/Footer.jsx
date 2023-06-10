import React from 'react'
import { footer } from '../data'
import logo from '../assets/img/logo.svg'

const Footer = () => {
    const { copyright } = footer
    return (
        <footer>
            <div className="topSection d-flex flex-column flex-lg-row align-items-center justify-content-around py-5">
                <div className="logo mt-3">
                    <img src={logo} alt="" />
                </div>

                <div className="iconSection d-flex">
                    {footer.social.map((item, index) => {
                        return (
                            <div className="my-4 mx-2 icons" key={index}>
                                <button>{item.icon}</button>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="bottomSection text-center px-2 py-4">
                <p className='text-white'>{copyright}</p>
            </div>

        </footer>
    )
}

export default Footer