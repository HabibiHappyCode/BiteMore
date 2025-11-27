import React from 'react'

import { motion } from "framer-motion";
import { FaRegComment } from "react-icons/fa6";

const WORKSDATA = [
    {
        id: 1,
        icon: <FaRegComment />,
        text: 'Consistently hot on delivery. The scheduling feature is a lifesaver for busy weeks.',
        paragraph: '— Ada O.'
    },
    {
        id: 2,
        icon: <FaRegComment />,
        text: 'Great variety without compromising quality. My go‑to for team lunches.',
        paragraph: '— Tunde A.'
    },
    {
        id: 3,
        icon: <FaRegComment />,
        text: 'Love the healthy picks. Tastes like home, arrives fast.',
        paragraph: '— Chioma K.'
    },
]


function Comments() {
    return (
        <div className="">
            <article className="mb-12 max-md:mb-9">
                <h1 className="font-strike text-[#0F172A] text-[2.8em] max-lg:text-[2em] text-center font-bold">People love BiteMore</h1>
                <p className="text-black/80 text-[1.1em] max-md:text-[.9em] text-center max-lg:text-[1em]">See what our customers are saying about us</p>
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
                            className="w-[33%] max-lg:w-[30%] max-lg:w-[48%] max-sm:w-[100%] flex flex-col gap-3 items-start justify-start py-8 max-md:py-10 px-5 rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)]"
                            key={data.id}>
                            <h1 className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  ">{data.icon}</h1>
                            <h3 className=" text-[#0F5529] text-[1em] border-b-1 border-black/10 pb-5 my-5 ">{data.text}</h3>
                            <p className="text-black/70">{data.paragraph}</p>
                        </motion.section>
                    ))
                }
            </div>
        </div>
    )
}

export default Comments
