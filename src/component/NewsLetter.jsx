import React from 'react'
import { newInStore } from '../data'

const NewsLetter = () => {
    const { title, subtitle, placeholder } = newInStore
    return (
        <div className='newsletter section text-center d-flex align-items-center justify-content-center d-lg-block'>
            <div className="newsletter__info">
                <h1>{title}</h1>
                <p className='mt-5'>{subtitle}</p>
                <div className='mt-5 inputSection'>
                    <form action="" autoComplete="off">
                        <input type="email" name="email" id="email" placeholder="آدرس ایمیل" />
                        <button>خرید</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter