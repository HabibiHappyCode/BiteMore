import { Link } from "react-router-dom";
import Slider from "react-slick";

const ASSOCIATIONDATA = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764162692/angela-bailey-46i7Fqy4bto-unsplash_bxpcy1.jpg',
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764162693/joseph-gonzalez-zcUgjyqEwe8-unsplash_cxjewl.jpg',
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764162693/chad-montano-MqT0asuoIcU-unsplash_g6jjpn.jpg',
    }
]

function Association() {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 3000,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <div className="flex max-lg:flex-wrap p-17 max-lg:px-3 max-lg:py-10 justify-between max-lg:justify-start max-lg:gap-5">
            <div className="w-[48%] max-lg:w-[100%] bg-auto">
                <Slider {...settings}>
                    {ASSOCIATIONDATA.map((data) => (
                        <section className="w-[100%] h-[55vh]">
                            <img className="object-cover w-[100%] h-[100%] rounded-xl" src={data.img} alt="" />
                        </section>
                    ))}
                </Slider>
            </div>

            <div className="w-[48%] max-lg:w-[100%] flex flex-col gap-3 max-lg:gap-1">
                <h1 className="text-[#0C4521] font-light  text-[2.8em]  max-lg:text-[2em] ">We Are Associated</h1>
                <h1 className="text-[#0C4521] font-light  text-[2.8em] max-lg:text-[2em]">With The Best Menu</h1>
                <p className="text-black/80">We take pride in partnering with the best tiffin service in the industry to bring you the finest home-cooked meals right to your doorstep.</p>

                <p><Link className="text-[.9em] underline text-[#0C4521] ">Explore all Menus</Link></p>
            </div>
        </div>
    )
}

export default Association
