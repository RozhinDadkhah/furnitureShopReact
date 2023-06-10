import React from 'react'
import { FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineGlobal } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import image from '../assets/img/features-2.png' 

const ContactUs = () => {
    return (
        <>
            <div className='contactUs container'>
                <div className="contactUsContainer ">
                    <div className="contactInfo border rounded-1 p-4">
                        <h1><AiOutlineGlobal className='mx-1' style={{ color: "#DC5F00" }} />ارتباط با ما</h1>
                        <h6 className='mt-4 mb-5 py-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h6>
                        <div className="contactIcon mb-3"><span></span><Link className='fs-4'><FaInstagram /></Link><p className='d-inline-block mx-5'>  ما را در اینستاگرام دنبال کنید  : TestInstagram@</p></div>
                        <div className="contactIcon mb-3"><span></span><Link className='fs-4'><FaPhone /></Link><p className='d-inline-block mx-5'>شماره تماس : 23566985</p></div>
                        <div className="contactIcon mb-3"><span></span><Link className='fs-4'><FaMapMarkerAlt /></Link><p className='d-inline-block mx-5'>آدرس : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs