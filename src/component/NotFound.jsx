import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='text-center'>
                <div className=''>
                    <h1>صفحه موردنظر یافت نشد</h1>
                    <Link to='/' className='d-inline-block mt-5 btn btn-warning mt-5 px-3 py-4 rounded-3 fw-bold'>
                        <span className="spinner-grow spinner-grow-sm mx-2" role="status" aria-hidden="true"></span>
                        بازگشت به صفحه اصلی
                        <span class="spinner-grow spinner-grow-sm mx-2" role="status" aria-hidden="true"></span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default NotFound