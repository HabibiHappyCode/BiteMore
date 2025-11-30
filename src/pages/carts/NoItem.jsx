import { RiEmotionUnhappyLine } from "react-icons/ri";

function NoItem() {
    return (
        <div className="flex flex-col items-center justify-center gap-3 w-full h-[50vh]">
            <h2 className=" flex items-center  gap-2 font-strike text-[#0C4521] text-[2.8em] max-lg:text-[2em] text-center font-bold">
                <span>Your Cart is empty</span>
                <span><RiEmotionUnhappyLine /></span>
            </h2>
            <button className=' text-[1em] text-white/80 rounded-full cursor-pointer px-10 py-1 bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white'>Shop Now</button>
        </div>
    )
}

export default NoItem
