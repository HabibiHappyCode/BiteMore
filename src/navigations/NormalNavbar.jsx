import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretDown } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { PiCaretDownBold } from "react-icons/pi";
import { useContext, useState } from 'react';
import useAuthStore from '../store/authContext';
import CartContext from '../store/CartContext';
import { motion } from 'framer-motion';

function NormalNavbar() {
    const [navToggle, setNavToggle] = useState(false);
    const [showSideNav, setShowSideNav] = useState(false);
    const [profileNav, setProfileNav] = useState(false)
    const navigate = useNavigate();

    const { items } = useContext(CartContext);

    const cartItemsNum = items.reduce((totalNumber, item) => {
        return totalNumber + item.quantity;
    }, 0);



    const { isLoggedIn, user, logOut } = useAuthStore();

    const handleNavToggle = () => {
        setNavToggle((prevState) => !prevState)
    }

    const handleShowSideNav = () => {
        setShowSideNav(prevNav => !prevNav)
    }

    const handleShowProfileNav = () => {
        setProfileNav(prevProfile => !prevProfile)
    }

    const handleGoHome = () => {
        navigate('/')
        setNavToggle((prevState) => !prevState)
    }

    const handleAuthNavigate = (mode) => {
        navigate(mode);
        setNavToggle(false)
    }

    const handleLogOut = () => {
        logOut(navigate)
    }

    const firstLetter = user?.fullName.charAt()
    const fullName = user?.fullName;
    const email = user?.email

    const linkStyle = ({ isActive }) => `${isActive ? 'text-[#0C4521] underline underline-offset-13 decoration-[#0C4521]' : ''} hover:text-[#0C4521] hover:underline underline-offset-13 decoration-[#0C4521]`
    const navlinkStyle = ({ isActive }) => `${isActive ? 'text-[#0C4521] ' : ''} hover:text-[#0C4521] hover:underline underline-offset-10 decoration-[#0C4521]`

    return (
        <div className='relative z-100'>
            <header className='bg-[rgba(254,254,254,0.9)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded flex justify-between items-center w-[95%] max-sm:w-[97%] mx-auto fixed self-center justify-self-center top-5 px-9 max-md:px-5 max-lg:py-1 py-2 rounded-full'>
                <nav className='max-lg:hidden'>
                    <ul className='flex gap-4 text-[1.2em] font-light'>
                        <li><NavLink className={linkStyle} to='/services'>Services</NavLink></li>
                        <li><NavLink className={linkStyle} to='/menu'>Menu</NavLink></li>
                        <li><NavLink className={linkStyle} to='/blog'>Blog</NavLink></li>
                        <li><NavLink className={linkStyle} to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>

                {/*start of mobile device */}

                <nav className={`lg:hidden absolute bg-[rgba(254,254,254,0.9)] w-full top-14 left-0 translate-x-[-110%] ease-in-out duration-200 ${navToggle ? 'translate-x-[0%]' : ''}`}>

                    <ul className='flex flex-col gap-4 text-[1.2em] max-md:text-[1em] font-light py-10 px-9  max-md:px-5'>
                        {
                            isLoggedIn && <div className='border-t-1 border-b-1 border-black/10 pt-2'>
                                <p onClick={handleShowProfileNav} className='flex justify-between cursor-pointer  '>
                                    <span>My Profile</span>
                                    <span><RxCaretDown /></span>
                                </p>
                                <ul className={`mt-3 border-black/10 ease-in-out duration-200 overflow-hidden ${profileNav ? 'h-60' : 'h-0'}`}>
                                    <p className='flex flex-col gap-1 border-b-1 border-black/10 pb-2'>
                                        <span className='font-strike text-[1em] uppercase'>{fullName}</span>
                                        <span className='text-[.9em]'>{email}</span>
                                    </p>
                                    <li className='border-b-1 border-black/10 pb-2 my-3'><Link>Profile</Link></li>
                                    <li className='border-b-1 border-black/10 pb-2  my-3'><Link>Wishlist</Link></li>
                                    <li className='border-b-1 border-black/10 pb-2  my-3'><Link>Orders</Link></li>
                                    <li className=''><Link>Notification</Link></li>
                                </ul>
                            </div>
                        }
                        <li onClick={handleNavToggle} className='border-b-1 border-black/10 pb-2'><NavLink className={navlinkStyle} to='/services'>Services</NavLink></li>
                        <li onClick={handleNavToggle} className='border-b-1 border-black/10 pb-2'><NavLink className={navlinkStyle} to='/menu'>Menu</NavLink></li>
                        <li onClick={handleNavToggle} className='border-b-1 border-black/10 pb-2'><NavLink className={navlinkStyle} to='/blog'>Blog</NavLink></li>
                        <li onClick={handleNavToggle} className='border-b-1 border-black/10 pb-2'><NavLink className={navlinkStyle} to='/contact'>Contact</NavLink></li>
                        {
                            isLoggedIn ?
                                <button onClick={handleLogOut} className='text-[1em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-4 py-1 rounded-xl cursor-pointer'>Log out</button>
                                :
                                <section className='flex gap-3 my-2 '>
                                    <button onClick={() => handleAuthNavigate('/auth')} className='text-[.8em] text-[#0C4521] bg-white border-1 border-[#0C4521] px-3 py-1 rounded-xl cursor-pointer'><Link to='/auth'>Log In</Link></button>
                                    <button onClick={() => handleAuthNavigate('/auth/signUp')} className='text-[.8em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-3 py-1 rounded-xl cursor-pointer'><Link to='/auth/signUp'>Sign Up</Link></button>
                                </section>
                        }
                    </ul>
                </nav>
                {/* end of mobile */}

                <div className='flex items-center gap-3'>
                    <p onClick={handleNavToggle} className='hidden max-lg:block text-[1.4em] text-[#0C4521]'>{!navToggle ? <GiHamburgerMenu /> : <RxCross1 />}</p>
                    <h1 onClick={handleGoHome} className='text-[32px] max-md:text-[28px] text-[#0C4521] uppercase font-bold font-strike cursor-pointer'>bitemore</h1>
                </div>

                <div className='flex gap-5 items-center justify-end w-[30%]'>
                    <section className='flex gap-1 items-center text-[1.5em] text-[#0C4521] '>
                        <span className='cursor-pointer hover:text-[#0C4521]/50'>
                            <CiSearch />
                        </span>
                        <Link to='cart'>
                            <span className='cursor-pointer hover:text-[#0C4521]/50 relative'>
                                <motion.small
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.3 }}
                                    key={cartItemsNum}
                                    className='absolute left-[80%] bottom-[15px] text-[.5em] flex items-center justify-center bg-[#0C4521] w-5 h-5 rounded-full text-white'>
                                    {cartItemsNum}
                                </motion.small>
                                <span><CiShoppingCart /></span>

                            </span>
                        </Link>

                    </section>
                    {
                        isLoggedIn ?
                            <section className='relative  max-lg:hidden'>
                                <main onClick={handleShowSideNav} className='flex items-center gap-1  bg-gray-300 h-auto cursor-pointer pr-2 rounded-full'>
                                    <h1 className='bg-[#0C4521] uppercase text-white  w-10 p-1 text-center rounded-full text-[1.2em]'>{firstLetter}</h1>
                                    <h1 className=' text-[1.2em] font-light text-[#0C4521]'><PiCaretDownBold /></h1>
                                </main>

                                <article className={`bg-[rgba(254,254,254,0.9)] shadow-[0_4px_20px_rgba(0,0,0,0.08)] absolute left-[-200%] top-[4em] w-70 p-5 rounded ease-in-out duration-200 ${showSideNav ? 'translate-x-[-10%]' : 'translate-x-[150%]'}`}>
                                    <ul>
                                        <p className='flex flex-col gap-1 border-b-1 border-black/10 pb-2'>
                                            <span className='font-strike text-[1.1em] uppercase'>{fullName}</span>
                                            <span className='text-[.9em]'>{email}</span>
                                        </p>
                                        <li className='border-b-1 border-black/10 pb-2 my-3'><Link>Profile</Link></li>
                                        <li className='border-b-1 border-black/10 pb-2  my-3'><Link>Wishlist</Link></li>
                                        <li className='border-b-1 border-black/10 pb-2  my-3'><Link>Orders</Link></li>
                                        <li className='border-b-1 border-black/10 pb-2  my-3'><Link>Notification</Link></li>
                                    </ul>
                                    <button onClick={handleLogOut} className='text-[1em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-4 py-1 rounded-xl cursor-pointer'>Log out</button>
                                </article>
                            </section>
                            :
                            <section className='flex gap-3 max-lg:hidden'>
                                <button onClick={() => handleAuthNavigate('/auth')} className='text-[1em] text-[#0C4521] bg-white border-1 border-[#0C4521] px-4 py-1 rounded-xl cursor-pointer'>Log In</button>
                                <button onClick={() => handleAuthNavigate('/auth/signUP')} className='text-[1em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-4 py-1 rounded-xl cursor-pointer'>Sign Up</button>
                            </section>
                    }
                </div>
            </header >
        </div >
    )
}

export default NormalNavbar
