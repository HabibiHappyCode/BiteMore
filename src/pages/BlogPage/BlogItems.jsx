import { motion} from "framer-motion"
import { clampText } from "../../util/clampText"
import { useContext, useState } from "react"
import ModalContext from "../../store/ModalContext"
import BlogModal from "./BlogModal"
import Modal from "../../Ui/Modal"

const BLOGDATA = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764827052/spaghetti-6639970_vkynmj.jpg',
        header: 'Eat Smart All Day: Nutritious Meal Ideas with BiteMore',
        text: "Eating healthy doesn’t mean giving up convenience. With BiteMore, you can enjoy well-balanced meals delivered to your door—without sacrificing flavor or nutrition. Whether you're powering up for the day or winding down at night, here are smart BiteMore meal suggestions for breakfast, lunch, and dinner: Breakfast Suggested Meal: Greek Yogurt Bowl with Berries, Chia Seeds, and Honey. Launch Suggested Meal: Grilled Chicken Quinoa Salad with Avocado and Lemon Vinaigrette. Dinner Suggested Meal: Baked Salmon with Steamed Veggies and Brown Rice"
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764831579/luke-jones-ac6UGoeSUSE-unsplash_w0bvt6.jpg',
        header: 'How BiteMore Uses AI to Predict What You Want to Eat',
        text: "BiteMore’s smart recommendation engine learns from your orders and browsing habits to serve up meals you’ll actually want. This post dives into the AI behind the scenes and how it personalizes your food journey."
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764831569/jorge-garcia-CWg3f1eCLEY-unsplash_lvsvlj.jpg',
        header: 'A Day in the Life of a BiteMore Delivery Hero',
        text: "Meet Courier hero, a BiteMore delivery dispatch, through a busy Saturday in the city. From morning coffee runs to midnight snack cravings, discover what it's like behind the scenes and how BiteMore’s technology empowers drivers with smarter routes and safer delivery protocols."
    },
    {
        id: 4,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764831574/dan-gold-E6HjQaB7UEA-unsplash_e21epm.jpg',
        header: 'How BiteMore Helps Local Restaurants Grow Their Reach',
        text: "BiteMore isn't just for customers—it's a powerful tool for local eateries. This blog post breaks down how restaurants increase visibility, improve customer retention, and manage logistics more efficiently through the BiteMore Partner Program."
    },
    {
        id: 5,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764831572/louis-hansel--9CjvlbUGhY-unsplash_zrojwg.jpg',
        header: 'Top 5 Features That Make BiteMore a Must-Have App',
        text: "From instant order updates to curated meal recommendations, BiteMore has features users rave about. We'll highlight the five most-loved features—like smart ETA predictions and loyalty rewards—and show how these make BiteMore the preferred choice for thousands of hungry users."
    },
    {
        id: 6,
        img: 'https://res.cloudinary.com/dxe5unu0u/image/upload/v1764832329/martin-widenka-tkfRSPt-jdk-unsplash_cplf4i.jpg',
        header: 'Why BiteMore is the Future of Fast Food Delivery',
        text: "In a world where speed meets convenience, BiteMore stands out by redefining fast food delivery. Whether you're craving burgers, sushi, or vegan wraps, BiteMore connects you to local restaurants with real-time tracking, lightning-fast delivery, and an intuitive user experience. This post explores how BiteMore is disrupting traditional delivery platforms and why it's the go-to for modern foodies."
    },
]

function BlogItems() {
    const [blog, setBlog] = useState(0);

    const { modalProgress, showBlogModal } = useContext(ModalContext)

    const handleSelectBlog = (blog) => {
        setBlog(blog)
        showBlogModal()
    }

    const selectedBlog = BLOGDATA.find((blogs) => blogs.id === blog)

    return (
        <>
       
            <Modal open={modalProgress === 'showBlog'}>
                <BlogModal blogs={selectedBlog} />
            </Modal>

            <div>
                <article className="mb-12 max-md:mb-9">
                    <h1 className="font-strike text-[#0F172A] text-[2.8em] max-lg:text-[2em] text-center font-bold">Latest Blog And Insights</h1>
                </article>
                <div className="flex flex-wrap   gap-7 justify-center max-lg:justify-between  max-lg:gap-5 pb-20">
                    {
                        BLOGDATA.map((data) => (
                            <motion.section
                                whileHover={{
                                    y: -10,
                                }}
                                whileTap={{
                                    y: -10,
                                }}
                                transition={{ type: "spring", duration: .5 }}
                                className="w-[31%] max-lg:w-[30%] max-lg:w-[48%] p-7   max-sm:w-[100%] flex flex-col gap-3   rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)]"
                                key={data.id}>
                                <div className="w-[100%] h-[30vh]">
                                    <img className="w-[100%] h-[100%] object-cover" src={data.img} alt="" />
                                </div>

                                <article>
                                    <h1 className="font-medium text-[.9em]">{data.header}</h1>
                                    <p className="text-black/70 my-2">
                                        <span>{clampText(data.text, 90)}</span>
                                        <span><button onClick={() => handleSelectBlog(data.id)} className="hover:underline hover:text-[#07BC0C] text-[.9em] text-[#0C4521] cursor-pointer">Read More</button></span>
                                    </p>
                                </article>

                            </motion.section>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BlogItems
