import { BsSearch } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { motion } from "framer-motion";

const WORKSDATA = [
    {
        id: 1,
        icon: <BsSearch />,
        text: 'Discover',
        paragraph: 'Browse menus from top-rated kitchens near you.'
    },
    {
        id: 2,
        icon: <IoSettingsOutline />,
        text: 'Customize',
        paragraph: 'Adjust portions, sides and dietary preferences.'
    },
    {
        id: 3,
        icon: <CiBoxes />,
        text: 'Track & Enjoy',
        paragraph: 'Real‑time delivery tracking until it arrives.'
    },
]

function Works() {
    return (
        <div className="">
            <article className="mb-12 max-md:mb-9">
                <h1 className="font-strike text-[#0F172A] text-[2.8em] max-lg:text-[2em] text-center font-bold">How it works</h1>
                <p className="text-black/80 text-[1.1em] max-md:text-[.9em] text-center max-lg:text-[1em]">Get your favorite meals in three simple steps</p>
            </article>
            <div className="flex max-lg:flex-wrap gap-7 max-lg:justify-between  max-lg:gap-5 pb-20">
                {
                    WORKSDATA.map((data) => (
                        <motion.section
                            whileHover={{
                                y: -10,
                            }}
                            whileTap={{
                                y: -10,
                            }}
                            transition={{ type: "spring", duration: .5 }}
                            className="w-[33%] max-lg:w-[30%] max-lg:w-[48%]  max-sm:w-[100%] flex flex-col gap-3 items-center justify-center py-13 max-md:py-10 px-5 text-center rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)]"
                            key={data.id}>
                            <h1 className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  ">{data.icon}</h1>
                            <h3 className="font-strike text-[#0F5529] text-[1.1em] ">{data.text}</h3>
                            <p className="text-black/70">{data.paragraph}</p>
                        </motion.section>
                    ))
                }
            </div>
        </div>
    )
}

export default Works
