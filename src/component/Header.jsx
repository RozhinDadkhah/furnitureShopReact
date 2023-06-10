import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/img/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Cartcontext } from '../context/Context';




const Header = () => {
    const GlobalState = useContext(Cartcontext)
    const state = GlobalState.state

    const [bg, setBg] = useState(false)
    const [mobileNav, setMobileNav] = useState()


    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 10 ? setBg(true) : setBg(false)
        })
    }, [])

    return (
        <>
            <header className={`${bg ? 'background' : ''} py-3 d-flex align-items-center justify-content-around position-fixed`}>
                <div className="header__item">
                    <ul className='d-flex'>

                        <NavLink to='cartList' className="border mx-2" style={({ isActive }) => ({ background: isActive ? '#E57C23' : '', })}>
                            <li type="button" className="px-3 btn position-relative text-white fw-bold mt-2">
                                سبد خرید
                                <span className=" fs-5 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                    {state.length > 0 ? state.length :  <AiOutlineShoppingCart />}
                                </span>
                            </li>
                        </NavLink>

                        <NavLink to='/'
                            style={({ isActive }) => ({ background: isActive ? '#E57C23' : '', })}>
                            <li className='p-3'>
                                خانه
                            </li>
                        </NavLink>


                        <NavLink to='/products'
                            style={({ isActive }) => ({ background: isActive ? '#E57C23' : '', })}>
                            <li className='p-3'>
                                لیست محصولات
                            </li>
                        </NavLink>

                        <NavLink to='/about'
                            style={({ isActive }) => ({ background: isActive ? '#E57C23' : '', })}>
                            <li className='p-3'>
                                درباره ما
                            </li>
                        </NavLink>

                        <NavLink to='/contact'
                            style={({ isActive }) => ({ background: isActive ? '#E57C23' : '', })}>
                            <li className='p-3'>
                                تماس با ما
                            </li>
                        </NavLink>
                    </ul>
                </div>

                {/* <div onClick={() => setMobileNav(!mobileNav)} className=' mobileIcon text-white fs-1'>
                    {mobileNav ? <CgClose /> : <CgMenuRight />}
                </div> */}

                {/* <div className="mobilemenuDiv">
                    <div className={`${mobileNav ? "mobilemenu" : "d-none"}`}>
                        <ul className='mx-5 my-3'>
                            <li className='p-3 border-0'>
                                <Link to='/'>
                                    خانه
                                </Link>
                            </li>
                            <li className='p-3 border-0'>
                                <Link to='/about'>
                                    درباره ما
                                </Link>
                            </li>
                            <li className='p-3 border-0'>
                                <Link to='/content'>
                                    تماس با ما
                                </Link>
                            </li>

                            <li className='p-3 border-0'>
                                <Link to='/products'>
                                    لیست محصولات
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div> */}


                <div className="header__logo d-none d-lg-block">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header