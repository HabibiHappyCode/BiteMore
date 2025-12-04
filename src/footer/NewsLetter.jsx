import { Link } from "react-router-dom"

function NewsLetter() {
    return (
        <div className='bg-[#C4FF88] p-17 max-lg:px-3 max-lg:py-10 flex justify-between max-lg:flex-wrap  max-lg:gap-5'>
            <section className='w-[48%] max-lg:w-[100%] border-r-1  max-lg:border-none'>
                <h2 className='font-medium text-[1.8em] max-md:text-[1.2em] my-5'>Subscribe to Our Newsletter</h2>
                <form
                    action="https://usebasin.com/f/82790551dc61"
                    method="POST"
                    className='flex gap-3 bg-[#D1F9A6] items-center w-[90%]  max-lg:w-[100%] px-5'
                >
                    <p className='w-[90%]'>
                        <input className='w-[100%] text-[#0D4722] outline-none border-b-1 border-[#0D4722]/60 py-2' type="email" placeholder='Enter your email...' required />
                    </p>
                    <button className='text-[1em] max-lg:text-[1em] bg-[#0D4722] text-[#fff] font-light px-5 max-lg:px-4 py-2 rounded cursor-pointer flex my-5 justify-self-center'>Subscribe</button>
                </form>
            </section>
            <section className='w-[48%] max-lg:w-[100%]'>
                <h1 className='font-medium text-[1.8em] my-5'>20% off!</h1>
                <main className='flex max-md:flex-col max-md:gap-2 items-start justify-between'>
                    <h2 className='font-bold max-md:font-light max-w-[50%] max-md:max-w-[100%] text-[1.7em] max-md:text-[1.4em]'>With Our Menu To Meet Symphony of Flavors</h2>
                    <button className='text-[1em] max-lg:text-[1em] bg-[#0D4722] text-[#fff] font-light px-5 max-lg:px-4 py-2 rounded cursor-pointer flex my-5 justify-self-center'><Link to='/contact'>Get in touch</Link></button>
                </main>
            </section>
        </div>
    )
}

export default NewsLetter
