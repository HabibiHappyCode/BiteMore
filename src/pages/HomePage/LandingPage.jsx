import Slider from "react-slick";

const LANDPAGEDATA = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764158380/vit-ch-Oxb84ENcFfU-unsplash_albaec.jpg',
        para: 'start order for only $25.00',
        text: 'Delicious dishes to enrich your wishes',
        advertText: 'Savor our handcrafted pizza made with fresh ingredients'
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764158378/sxanghai-joe-KQnwueh56Dk-unsplash_s6oe0s.jpg',
        para: 'Try our signature Dish!',
        text: 'Succulent beef Feast',
        advertText: 'Experience bold flavors with our premium beef dishes'
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764158378/cisco-lin-YMkX5NjURhk-unsplash_zftoio.jpg',
        para: 'start order for only $25.00',
        text: 'Juicy Roast Chicken Delight',
        advertText: 'Experience bold flavors with our premium beef dishes'
    }
]

function LandingPage() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <div className="">
            <Slider {...settings}>
                {
                    LANDPAGEDATA.map((data) => (
                        <div className="relative">
                            <div className="w-[100%] h-[80vh] max-lg:h-[70vh]">
                                <img className="object-cover w-[100%] h-[100%]" src={data.img} alt="" />
                            </div>

                            <div className="bg-[rgba(0,0,0,0.2)] w-[100%] h-[100%] absolute top-0 left-0 flex justify-center flex-col gap-2 px-15 max-lg:px-5">
                                <p className="font-strike text-[.9em] font-bold max-lg:font-light capitalize text-white">{data.para}</p>
                                <h1 className="font-strike text-[3em] max-lg:text-[1.8em] max-w-[45%] max-lg:max-w-[100%] font-bold text-[#C4FF88]">{data.text}</h1>
                                <p className="text-[.9em] max-lg:text-[.8em] font-light  text-white ">{data.advertText}</p>

                                <div className="absolute bottom-[10%] flex gap-5">
                                    <button className="text-[1em] max-lg:text-[.8em] text-[#0C4521] bg-[#C4FF88] font-medium px-5  max-lg:px-4 py-2 rounded cursor-pointer">Contact us</button>
                                    <button className="text-[1em] max-lg:text-[.8em]  text-[#0C4521] bg-auto border-1 border-[#C4FF88] text-[#C4FF88] font-medium px-5 max-lg:px-4 py-2 rounded cursor-pointer">Menu</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default LandingPage
