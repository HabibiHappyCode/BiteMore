import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretDown } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';

function NormalNavbar() {
    const [navToggle, setNavToggle] = useState(false);
    const navigate = useNavigate();

    const handleNavToggle = () => {
        setNavToggle((prevState) => !prevState)
    }

    const handleGoHome = () => {
        navigate('/')
        setNavToggle((prevState) => !prevState)
    }

    const handleAuthNavigate = (mode) => {
        navigate(mode);
        setNavToggle(false)
    }

    const linkStyle = ({ isActive }) => `${isActive ? 'text-[#0C4521] underline underline-offset-13 decoration-[#0C4521]' : ''} hover:text-[#0C4521] hover:underline underline-offset-13 decoration-[#0C4521]`
    const navlinkStyle = ({ isActive }) => `${isActive ? 'text-[#0C4521] ' : ''} hover:text-[#0C4521] hover:underline underline-offset-10 decoration-[#0C4521]`

    return (
        <div className='relative'>
            <header className='bg-[#FEFEFE]  shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded flex justify-between items-center w-[95%] mx-auto fixed self-center justify-self-center top-5 px-9 max-md:px-5 max-lg:py-1 py-2 rounded-full'>
                <nav className='max-lg:hidden'>
                    <ul className='flex gap-4 text-[1.2em] font-light'>
                        <li><NavLink className={linkStyle} to='services'>Services</NavLink></li>
                        <li><NavLink className={linkStyle} to='menu'>Menu</NavLink></li>
                        <li><NavLink className={linkStyle} to='blog'>Blog</NavLink></li>
                        <li><NavLink className={linkStyle} to='contact'>Contact</NavLink></li>
                    </ul>
                </nav>

                {/*start of mobile device */}

                <nav className={`lg:hidden absolute bg-[#F1ECEB] w-full top-14 left-0 translate-x-[-110%] ease-in-out duration-200 ${navToggle ? 'translate-x-[0%]' : ''}`}>

                    <ul className='flex flex-col gap-4 text-[1.2em] font-light py-10 px-9 max-md:px-5'>
                        <div className='border-t-1 border-b-1 border-black/10 pb-2 pt-2'>
                            <p className='flex justify-between  '>
                                <span>My Profile</span>
                                <span><RxCaretDown /></span>
                            </p>
                        </div>
                        <li onClick={handleNavToggle} className='border-b-1 border-black/10 pb-2'><NavLink className={navlinkStyle} to='services'>Services</NavLink></li>
                        <li onClick={handleNavToggle} className='border-b-1 border-black/10 pb-2'><NavLink className={navlinkStyle} to='menu'>Menu</NavLink></li>
                        <li onClick={handleNavToggle} className='border-b-1 border-black/10 pb-2'><NavLink className={navlinkStyle} to='blog'>Blog</NavLink></li>
                        <li onClick={handleNavToggle} className='border-b-1 border-black/10 pb-2'><NavLink className={navlinkStyle} to='contact'>Contact</NavLink></li>
                        <section className='flex gap-3 my-2 '>
                            <button onClick={() => handleAuthNavigate('/auth')} className='text-[.8em] text-[#0C4521] bg-white border-1 border-[#0C4521] px-3 py-1 rounded-xl cursor-pointer'><Link to='/auth'>Log In</Link></button>
                            <button onClick={() => handleAuthNavigate('/auth/signUp')} className='text-[.8em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-3 py-1 rounded-xl cursor-pointer'><Link to='/auth/signUp'>Sign Up</Link></button>
                        </section>
                    </ul>
                </nav>
                {/* end of mobile */}

                <div className='flex items-center gap-3'>
                    <p onClick={handleNavToggle} className='hidden max-lg:block text-[1.4em] text-[#0C4521]'>{!navToggle ? <GiHamburgerMenu /> : <RxCross1 />}</p>
                    <h1 onClick={handleGoHome} className='text-[32px] max-md:text-[28px] text-[#0C4521] uppercase font-bold font-strike cursor-pointer'>bitemore</h1>
                </div>

                <div className='flex gap-5 items-center'>
                    <section className='flex gap-1 items-center text-[1.5em] text-[#0C4521] '>
                        <span className='cursor-pointer hover:text-[#0C4521]/50'>
                            <CiSearch />
                        </span>
                        <span className='cursor-pointer hover:text-[#0C4521]/50'>
                            <CiShoppingCart />
                        </span>
                    </section>
                    <section className='flex gap-3 max-lg:hidden'>
                        <button onClick={() => handleAuthNavigate('/auth')} className='text-[1em] text-[#0C4521] bg-white border-1 border-[#0C4521] px-4 py-1 rounded-xl cursor-pointer'>Log In</button>
                        <button onClick={() => handleAuthNavigate('/auth/signUP')}  className='text-[1em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-4 py-1 rounded-xl cursor-pointer'>Sign Up</button>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default NormalNavbar
