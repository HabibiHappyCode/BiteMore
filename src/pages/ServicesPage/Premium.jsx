
import { LuUtensilsCrossed } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";

function Premium() {
    return (
        <div className="py-30  max-md:pb-20 flex flex-col gap-2 items-center justify-center">
            <p className="bg-[#ECFDF5] w-[30%] max-lg:w-[50%] max-md:w-[80%] font-medium mb-5 py-1 flex items-center justify-center gap-2 rounded-full">
                <span><LuUtensilsCrossed /></span>
                <span>Premium food delivery</span>
            </p>

            <h1 className="font-strike text-[#0F172A] text-[2.8em] max-lg:text-[2em] text-center font-bold">Delicious meals, delivered your way</h1>

            <p className="text-black/80 text-[1.2em] max-lg:text-[1em] text-center max-w-[60%] max-lg:max-w-[100%]">
                From wholesome home‑style plates to chef specials, BiteRush gets great food to your door fast—scheduled or on‑demand.
            </p>
            <section className='flex gap-3 my-2 '>
                <button onClick={() => handleAuthNavigate('/auth')} className='text-[1em] bg-[#ECFDF5] text-[#0C4521] border-1 border-[#0C4521] px-3 py-1 rounded cursor-pointer'><Link>Explore Menu</Link></button>
                <button onClick={() => handleAuthNavigate('/auth/signUp')} className='text-[1em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-3 py-1 rounded cursor-pointer'><Link>Partner with us</Link></button>
            </section>
            <div>
                <p className="flex gap-2 items-center">
                    <span><TfiLocationPin /></span>
                    <span>Service coverage expanding weekly</span>
                </p>
                <p className="flex gap-2 items-center">
                    <span><MdOutlinePhoneInTalk /></span>
                    <span>24/7 support</span>
                </p>
            </div>
        </div>
    )
}

export default Premium
