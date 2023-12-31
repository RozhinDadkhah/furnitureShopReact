import React from 'react'
import firstpic from '../assets/img/hero-bg.png'
import secondpic from '../assets/img/testimonial.png'
import { FaFirstdraft } from 'react-icons/fa'

const About = () => {
    return (
        <>
            <div className='about container'>
                <div className="aboutcontainer">
                    <div className="aboutImageFirst d-none d-lg-block">
                        <img src={firstpic} alt="" style={{ width: "500px" }} />
                    </div>
                    <div className="aboutBox bg-white text-dark px-4">
                        <h2 className='py-2'><FaFirstdraft style={{ color: "#E57C23" }} /> درباره ما</h2>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>
                    <div className="aboutImageSecond d-none d-lg-block">
                        <img src={secondpic} alt="" style={{ width: "450px" }} />
                    </div>

                </div>

            </div>

        </>
    )
}

export default About