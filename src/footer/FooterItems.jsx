import { GrFacebookOption } from "react-icons/gr";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterItems() {
    return (
        <div className='p-17 max-lg:px-3 max-lg:py-10 bg-[#0a0a0a] text-[#fff]'>
            <div className="flex justify-between max-md:flex-wrap max-md:gap-5 ">
                <section className=" w-[35%]  max-md:w-[100%]  ">
                    <h1 className="font-strike text-[1.5em] ">Contact Info</h1>
                    <p className="text-[.9em] my-3 ">Hotline free 24/7</p>

                    <p className="font-srike text-[1.3em]">
                        <a href="tel:+2438149285789">+243 814 928 5789</a>
                    </p>

                    <p className="text-[.9em] mt-3 ">
                        Ayedun community, oshogbo, osun state, nigeria
                    </p>

                    <p className="text-[.9em] mb-3 ">
                        abdulmalikiyiola@gmail.com
                    </p>

                    <div>
                        <p className="capitalize my-2 text-[.9em]">connect with us:</p>
                        <main className="flex  gap-3">
                            <span className="bg-transparent text-[1.2em] w-8 cursor-pointer h-8 flex items-center justify-center rounded-full border-1 border-[#C4FF88]"><GrFacebookOption /></span>
                            <span className="bg-transparent text-[1.2em] w-8 cursor-pointer h-8 flex items-center justify-center rounded-full border-1 border-[#C4FF88]"><CiInstagram /></span>
                            <span className="bg-transparent text-[1.2em] w-8 cursor-pointer h-8 flex items-center justify-center rounded-full border-1 border-[#C4FF88]"><FaXTwitter /></span>
                            <span className="bg-transparent text-[1.2em] w-8 cursor-pointer h-8 flex items-center justify-center rounded-full border-1 border-[#C4FF88]"><FaLinkedin /></span>
                        </main>
                    </div>

                </section>

                <section className=" w-[35%]  max-md:w-[100%]  ">
                    <h1 className="font-strike text-[1.5em] mb-3">Company</h1>

                    <ul>
                        <li className="text-[1em] w-[40%]  max-lg:w-[60%] mb-2 font-light ease-in-out duration-200 hover:text-[#C4FF88] hover:translate-x-2"><Link to='/contact'>Contact Us</Link></li>
                        <li className="text-[1em] w-[40%]  max-lg:w-[60%] mb-2 font-light ease-in-out duration-200 hover:text-[#C4FF88] hover:translate-x-2"><Link to='/termsOfServices'>Terms of Services</Link></li>
                        <li className="text-[1em] w-[40%]  max-lg:w-[60%] mb-2 font-light ease-in-out duration-200 hover:text-[#C4FF88] hover:translate-x-2"><Link to='/privacyAndPolicy'>Privacy Policy</Link></li>
                    </ul>
                </section>

                <section className=" w-[35%] max-md:w-[100%]">
                    <h1 className="font-strike text-[1.5em] mb-3">My account</h1>

                    <ul>
                        <li className="text-[1em]  w-[40%]  max-lg:w-[60%] mb-2 font-light ease-in-out duration-200 hover:text-[#C4FF88] hover:translate-x-2"><Link>My Wishlist</Link></li>
                        <li className="text-[1em]  w-[40%]  max-lg:w-[60%] mb-2 font-light ease-in-out duration-200 hover:text-[#C4FF88] hover:translate-x-2"><Link>My Services</Link></li>
                        <li className="text-[1em]  w-[40%]  max-lg:w-[60%] mb-2 font-light ease-in-out duration-200 hover:text-[#C4FF88] hover:translate-x-2"><Link>My Order</Link></li>
                        <li className="text-[1em]  w-[40%]  max-lg:w-[60%] mb-2 font-light ease-in-out duration-200 hover:text-[#C4FF88] hover:translate-x-2"><Link>Shipping</Link></li>

                    </ul>
                </section>
            </div>
            <h4 className="border-t-1 border-white/30 text-[.7em] mt-8 pt-3">
                © 2025 BiteMore. All Rights Reserved. Designed By HabibiHappyCode.
            </h4>
        </div>
    )
}

export default FooterItems
