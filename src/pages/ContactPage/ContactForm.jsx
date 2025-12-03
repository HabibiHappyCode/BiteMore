import React from 'react'

function ContactForm() {
    return (
        <form
            action="https://usebasin.com/f/82790551dc61"
            method="POST"
            className='w-[49%] max-md:w-[100%] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10  max-md:p-4 rounded-xl'>
            <div className="flex flex-wrap justify-between">
                <p className="flex flex-col gap-1 w-[100%] max-md:w-[100%] my-4">
                    <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="fullName">Name *</label>
                    <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="text" name="fullName" placeholder="Enter your full name" required />
                </p>

                <p className="flex flex-col gap-1 w-[100%] max-md:w-[100%] my-4">
                    <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="email">Email *</label>
                    <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="email" name="email" placeholder="Enter your email" required />
                </p>

                <p className="flex flex-col gap-1 w-[100%] max-md:w-[100%] my-4">
                    <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="email">Subject *</label>
                    <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="text" name="Subject" placeholder="Message Subject" required />
                </p>


            </div>

            <p className="flex flex-col gap-1 w-[100%] max-md:w-[100%]  my-4">
                <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="address">Message *</label>
                <textarea className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" placeholder="Enter you message" name="address" required></textarea>
            </p>


            <button className='w-full mt-8 text-[1em] text-white/80 rounded-full cursor-pointer px-10 py-2 max-md:py-1 bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white max-md:mb-8'>Send Message</button>

        </form>
    )
}

export default ContactForm
