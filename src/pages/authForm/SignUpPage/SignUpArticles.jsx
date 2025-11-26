import { FaRegPaperPlane } from "react-icons/fa";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { VscRuby } from "react-icons/vsc";
import { IoIosAlarm } from "react-icons/io";
import Review from "./Review";

function SignUpArticles() {

    return (
        <div className="w-[60%] max-md:w-[100%] py-5 px-3">
            <h1 className="text-[#0F5529] font-strike text-[2em] max-md:text-[1.5em]">Join BiteMore Today! Enjoying the Best Meals.</h1>
            <p className="text-black/70 max-md:text-[.9em] my-4">
                Discover delicious meals delivered fast with Bite Rush. Sign up to enjoy a seamless dining experience tailored to your tastes!
            </p>

            <article className="flex flex-col gap-5 p-5  max-md:px-2  rounded-lg bg-[#ffffff]">
                <p className="max-md:text-[.9em] flex max-md:items-start gap-2">
                    <span className="text-[#0F5529] text-[1.2em] font-bold"> <FaRegPaperPlane /></span>
                    <span className="flex flex-col">
                        <span className="text-[#0F5529] font-bold">Fast Delivery</span>
                        <span className="text-black/70">Get your meals delivered in 30 minutes or less, hot and fresh.</span>
                    </span>
                </p>

                <p className="max-md:text-[.9em] flex max-md:items-start gap-2">
                    <span className="text-[#0F5529] text-[1.2em] font-bold font-bold"> <TbBowlSpoonFilled /></span>
                    <span className="flex flex-col">
                        <span className="text-[#0F5529] font-medium">Wide Variety</span>
                        <span className="text-black/70">Explore cuisines from local favorites to global delights.</span>
                    </span>
                </p>

                <p className="max-md:text-[.9em] flex max-md:items-start gap-2">
                    <span className="text-[#0F5529] text-[1.2em] font-bold font-bold"> <GiKnifeFork /></span>
                    <span className="flex flex-col">
                        <span className="text-[#0F5529] font-medium">Easy Ordering</span>
                        <span className="text-black/70">Order with a few clicks and track your meal in real-time.</span>
                    </span>
                </p>


                <p className="max-md:text-[.9em] flex max-md:items-start gap-2">
                    <span className="text-[#0F5529] text-[1.2em] font-bold font-bold"> <VscRuby /></span>
                    <span className="flex flex-col">
                        <span className="text-[#0F5529] font-medium">Exclusive Deals</span>
                        <span className="text-black/70">Enjoy discounts and special offers for loyal customers.</span>
                    </span>
                </p>

                <p className="max-md:text-[.9em] flex max-md:items-start gap-2">
                    <span className="text-[#0F5529] text-[1.2em] font-bold font-bold"> <IoIosAlarm /></span>
                    <span className="flex flex-col">
                        <span className="text-[#0F5529] font-medium">24/7 Availability</span>
                        <span className="text-black/70">We are available 24 hours</span>
                    </span>
                </p>
            </article>
            <Review />
        </div>
    )
}

export default SignUpArticles
