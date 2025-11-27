import { FaTruck } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { motion } from "framer-motion";

const DELIVERYDATA = [
    {
        id: 1,
        icon: <FaTruck />,
        text: 'Fast delivery',
        paragraph: 'Hot and fresh meals delivered in under 30 minutes in supported zones'
    },
    {
        id: 2,
        icon: <CiClock2 />,
        text: 'Scheduled orders',
        paragraph: 'Plan ahead. Pick delivery windows that fit your day.'
    },
    {
        id: 3,
        icon: <RiSecurePaymentLine />,
        text: 'Trusted kitchens',
        paragraph: 'Curated chefs and restaurants with strict hygiene standards.'
    },
    {
        id: 4,
        icon: <CiClock2 />,
        text: 'Scheduled orders',
        paragraph: 'Plan ahead. Pick delivery windows that fit your day.'
    },
]
function Delivery() {
    return (
        <div className="flex max-lg:flex-wrap gap-7 max-lg:justify-between  max-lg:gap-5 pb-20">
            {
                DELIVERYDATA.map((data) => (
                    <motion.section
                        whileHover={{
                            y: -10,
                        }}
                         whileTap={{
                            y: -10,
                        }}
                        transition={{ type: "spring", duration: .5 }}
                        className="w-[25%] max-lg:w-[30%] max-lg:w-[48%]  max-sm:w-[100%] flex flex-col gap-3 items-center justify-center py-3 max-md:py-10 px-5 text-center rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)]"
                        key={data.id}>
                        <h1 className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  ">{data.icon}</h1>
                        <h3 className="font-strike text-[#0F5529] text-[1.1em] ">{data.text}</h3>
                        <p className="text-black/70">{data.paragraph}</p>
                    </motion.section>
                ))
            }
        </div>
    )
}

export default Delivery
