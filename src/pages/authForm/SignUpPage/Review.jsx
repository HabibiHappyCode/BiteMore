import Slider from "react-slick";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";

const REVIEWDATA = [
    { id: 1, name: "Abdulmalik Iyiola", text: "BiteRush meal is one the best in the country. Great chef!" },
    { id: 2, name: "Joshua Oshinsanya", text: "It's tasty, kudos to all BiteRush chefs!" },
    { id: 3, name: "Baliqis Ayomide", text: "Whao! Its a great experience. I love this meal." },
    { id: 4, name: "Barakat Iyiola", text: "BiteRush meal is one the best in the country. Great chef!" },
    { id: 6, name: "Rukayat Ayomide", text: "BiteRush meal is one the best in the country. Great chef!" }
];

function Review() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="slider-container my-15 overflow-hidden">
            <Slider {...settings}>
                {REVIEWDATA.map((data) => (
                    <section key={data.id} className="flex flex-col">
                        <main className="text-[.8em] flex items-center gap-3 text-[#0F5529]">
                            <h2>{data.name}</h2>
                            <p className="flex">
                                <span><MdOutlineStarPurple500 /></span>
                                <span><MdOutlineStarPurple500 /></span>
                                <span><MdOutlineStarPurple500 /></span>
                                <span><MdOutlineStarPurple500 /></span>
                                <span><MdStarOutline /></span>
                            </p>
                        </main>
                        <article className="text-[.9em] mt-2 text-black/60">
                            {data.text}
                        </article>
                    </section>
                ))}
            </Slider>
        </div>
    );
}

export default Review;
