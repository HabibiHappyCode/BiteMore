import { Link } from "react-router-dom"

function Ready() {
    return (
        <div className='w-[90%] max-lg:w-[100%] py-5  flex flex-col justify-self-center bg-[linear-gradient(180deg,rgba(35,217,144,0.1)_45%,rgba(251,255,253,0.61)_75%,rgba(251,255,253,0.69)_100%)]  text-center rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] '>
            <h1 className="font-strike text-[1.6em]">Ready to eat better?</h1>
            <p className="my-2">Join thousands enjoying fast, reliable delivery with real home‑style flavor.</p>
            <section className='flex items-center justify-center  gap-3 my-2 '>
                <button className='text-[1em] bg-[#ECFDF5] text-[#0C4521] border-1 border-[#0C4521] px-3 py-1 rounded cursor-pointer'><Link>Order Now</Link></button>
                <button className='text-[1em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-3 py-1 rounded cursor-pointer'><Link to='/auth/signUp'>Create account</Link></button>
            </section>
        </div>
    )
}

export default Ready
