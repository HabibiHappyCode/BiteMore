

function ContactArticles() {
    return (
        <div className="text-black/70 flex flex-col gap-5 max-sm:gap-3 w-[49%] max-md:w-[100%] ">
            <h3 className="text-[1em] font-bold text-black">CONTACT US</h3>
            <h1  className="font-strike text-[2.8em] max-lg:text-[2em] font-bold text-black">Get in Touch</h1>
            <p  className="text-[1.1em] max-lg:text-[1em]">
                Whether you're a distributor, restaurant, retailer, or home cook, we're here to bring you the freshest, most flavourful produce in Nigeria.
            </p>
            <main className="flex flex-col gap-2">
                <p className="font-medium text-black font-medium">Address</p>
                <p>Lagos, Nigeria</p>
                <p>10am - 6pm</p>
            </main>
            <main  className="flex flex-col gap-2">
                <p className="font-medium text-black font-medium">Telephone</p>
                <p><a href="tel:+2348149285789">+234 814 928 5789</a></p>
                <p><a href="tel:+2349069026631">+234 906  902 6631</a></p>
            </main>
            <main  className="flex flex-col gap-2">
                <p className="font-medium text-black font-medium">Email</p>
                <p>abdulmalikiyiola@gmail.com</p>
            </main>
        </div>
    )
}

export default ContactArticles
