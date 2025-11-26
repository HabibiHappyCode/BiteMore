const CATERDATA = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764164929/helena-lopes-X39l3k-iC0g-unsplash_nlqho6.jpg',
        para: 'Convenient, home-style meals delivered daily to your doorstep, crafted with fresh ingredients for a wholesome dining experience.',
        text: 'Tiffin Service',

    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764164928/saile-ilyas-SiwrpBnxDww-unsplash_gwljrr.jpg',
        para: 'Nutritious, kid-friendly meals designed to support healthy growth, packed with balanced flavors and essential nutrients.',
        text: 'Child Nutrition Service',
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764164928/angela-bailey-46i7Fqy4bto-unsplash_wamd42.jpg',
        para: 'Cater your events with our delicious bulk orders, perfect for parties, gatherings, and special occasions with customized menus.',
        text: 'Bulk & Party Order',
    }
]

function Catering() {
    return (
        <div className="bg-[#0A0A0A]  p-17 max-lg:px-3 max-lg:py-10 text-white">
            <h1 className="text-center text-[1.6em]  max-lg:text-[1em] max-lg:mb-9 font-cursive">DEDICATED TIFFIN AND CATERING SERVICES</h1>

            <main className="flex items-center justify-between my-12 max-lg:hidden">
                <p className="flex flex-col gap-1 font-strike">
                    <span>BiteRush offers reliable, delicious catering services for events,</span>
                    <span>delivering fresh meals tailored to every occasion and taste.</span>
                </p>

            </main>

            <section className="flex max-lg:flex-wrap max-lg:gap-6 w-[100%] justify-between">
                {
                    CATERDATA.map((data) => (
                        <div key={data.id} className="group bg-[#FFFFFF] w-[32%] max-lg:w-[48%] max-sm:w-[100%] rounded-xl overflow-hidden ease-in-out duration-200 hover:translate-y-[-10px]">
                            <div className="w-[100%] h-[38vh] ">
                                <img className="object-cover w-[100%] h-[100%] ease-in-out duration-200 group-hover:scale-110" src={data.img} alt="" />
                            </div>

                            <article className="px-5 py-8 text-center">
                                <h2 className="font-strike text-[1.5em] text-[#0D4722] mb-3">{data.text}</h2>
                                <p className="font-light text-[#5A337B]/90">{data.para}</p>
                            </article>
                        </div>
                    ))
                }

            </section>

            <button className="lg:hidden text-[1em] max-lg:text-[1em] bg-auto border-1 border-[#0D4722] text-[#0D4722] font-medium px-7 max-lg:px-4 py-2 rounded cursor-pointer flex my-5 justify-self-center">Explore</button>


        </div>
    )
}

export default Catering
