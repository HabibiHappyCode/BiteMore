import { AiOutlineSafety } from "react-icons/ai";

function Description() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><AiOutlineSafety /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">2. Description of Services</span>
            </h1>

            <p className="text-black/80 text-base/7">BiteRush provides an online platform that connects customers with food delivery services, including but not limited to:</p>
            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                <li>Daily tiffin service with fresh, home-cooked meals</li>
                <li>Child nutrition services with age-appropriate meals</li>
                <li>Bulk and party order catering services</li>
                <li>Meal ordering and delivery services</li>
                <li>Subscription-based meal plans</li>
            </ul>
            <p className="text-black/80 text-base/7">We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.</p>

        </div>
    )
}

export default Description
