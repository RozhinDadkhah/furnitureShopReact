import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
} from 'react-icons/io';


import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';





export const hero = {
    title: 'با مبلمان ساده و خلاقانه خانه خود را متفاوت کنید',
    subtitle:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    buttonText: 'خرید',
};

export const stats = [
    {
        value: '7',
        text: 'سال تجربه',
    },
    {
        value: '2',
        text: 'شعبه در کشور',
    },
    {
        value: '10k+',
        text: 'فروش',
    },
    {
        value: '260+',
        text: 'تنوع محصولات',
    },
];

export const features = {
    image: <Features1Img />,
    title: 'ما خانه شما را زیباتر می سازیم',
    subtitle:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    buttonText: 'خرید',
    items: [
        {
            icon: <IoIosCheckmarkCircle />,
            title: 'خدمات ارزش گذاری',
            subtitle:
                'گاهی اوقات ویژگی ها نیاز به توضیح کوتاه دارند. این می تواند شرح مفصلی باشد',
        },
        {
            icon: <IoIosCheckmarkCircle />,
            title: 'توسعه مدل های مبلمان',
            subtitle:
                'گاهی اوقات ویژگی ها نیاز به توضیح کوتاه دارند. این می تواند شرح مفصلی باشد',
        },
    ],
    feature2: {
        image: <Features2Img />,
        title: 'بهترین تولید کننده مبلمان به انتخاب شما',
        subtitle:
            'گاهی اوقات ویژگی ها نیاز به توضیح کوتاه دارند. این می تواند شرح مفصلی باشد',
    },
};

export const newInStore = {
    title: 'جدیدترین محصولات',
    subtitle: 'اطلاع از جدیدترین محصولات با بهترین قیمت',
    link: 'مشاهده همه',
    icon: <IoIosArrowRoundForward />,
    products: [
        {
            name: 'صندلی',
            image: <ChairImg />,
        },
        {
            name: 'تخت',
            image: <BedImg />,
        },
        {
            name: 'کمد',
            image: <CupboardImg />,
        },
        {
            name: 'چراغ',
            image: <LightingImg />,
        },
    ],
};

export const products = {
    title: 'تمام محصولات',
    subtitle:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ',
    pages: [
        {
            id: 1,
            image: < Product1Img />,
            icon: <IoMdAddCircle />,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
        },
        {
            id: 2,
            image: < Product2Img />,
            icon: <IoMdAddCircle />,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
        },
        {
            id: 3,
            image: < Product3Img />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
        },
        {
            id: 4,
            image: <Product4Img />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
        },
        {
            id: 5,
            image: <Product5Img />,
            icon: <IoMdAddCircle />,
            name: 'Treos Seroes 911',
            price: 200,
            oldPrice: 210,
        },
        {
            id: 6,
            image: <Product6Img />,
            icon: <IoMdAddCircle />,
            name: 'Multi bilderman slibber',
            price: 45,
            oldPrice: 50,
        },
        {
            id: 7,
            image: < Product7Img />,
            icon: <IoMdAddCircle />,
            name: 'XORA corner desk',
            price: 320,
            oldPrice: 325,
        },
        {
            id: 8,
            image: <Product8Img />,
            icon: <IoMdAddCircle />,
            name: 'Black Forest Series Wood',
            price: 225,
            oldPrice: 240,
        },
        {
            id: 9,
            image: <Product9Img />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
        },
        {
            id: 10,
            image: < Product10Img />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
        },

        {
            id: 11,
            image: < Product1Img />,
            icon: <IoMdAddCircle />,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
        },
        {
            id: 12,
            image: < Product2Img />,
            icon: <IoMdAddCircle />,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
        },
        {
            id: 13,
            image: < Product3Img />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
        },
        {
            id: 14,
            image: < Product4Img />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
        },
        {
            id: 15,
            image: <Product5Img />,
            icon: <IoMdAddCircle />,
            name: 'Treos Seroes 911',
            price: 200,
            oldPrice: 210,
        },
        {
            id: 16,
            image: <Product6Img />,
            icon: <IoMdAddCircle />,
            name: 'Multi bilderman slibber',
            price: 45,
            oldPrice: 50,
        },
        {
            id: 17,
            image: < Product7Img />,
            icon: <IoMdAddCircle />,
            name: 'XORA corner desk',
            price: 320,
            oldPrice: 325,
        },
        {
            id: 18,
            image: <Product8Img />,
            icon: <IoMdAddCircle />,
            name: 'Black Forest Series Wood',
            price: 225,
            oldPrice: 240,
        },
        {
            id: 19,
            image: <Product9Img />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
        },
        {
            id: 20,
            image: <Product10Img />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
        },
    ],
};

export const testimonial = {
    title: 'نظرات مردم',
    image: <TestimonialImg />,
    persons: [
        {
            avatar: <Avatar1Img />,
            name: 'Josh Smith',
            occupation: 'Manager of The New York Times',
            message:
                '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
        },
        {
            avatar: <Avatar2Img />,
            name: 'Brandi Johns',
            occupation: 'Manager of The New York Times',
            message:
                '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
        },
        {
            avatar: <Avatar3Img />,
            name: 'Paula Pfeffer',
            occupation: 'Manager of The New York Times',
            message:
                '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
        },
    ],
};

export const newsletter = {
    title: 'تخفیف بیشتر...',
    subtitle: 'وارد کردن آدرس ایمیل',
};

export const footer = {
    social: [
        {
            icon: <IoLogoYoutube />,
            href: '#',
        },
        {
            icon: <IoLogoInstagram />,
            href: '#',
        },
        {
            icon: <IoLogoGithub />,
            href: '#',
        },
        {
            icon: <IoLogoFacebook />,
            href: '#',
        },
    ],
    copyright: 'FurniShop 2023 - All Rights Reserved.',
};