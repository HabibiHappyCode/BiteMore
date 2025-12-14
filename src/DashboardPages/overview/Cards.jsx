import { LiaWalletSolid } from "react-icons/lia";
import { GiKnifeFork } from "react-icons/gi";
import { GiCheckMark } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { RiWallet3Fill } from "react-icons/ri";

function Cards() {
    return (
        <div className="flex flex-wrap gap-3 mt-10 max-md:mt-5">
            <section className="bg-white w-[22%] max-lg:w-[23%] max-md:w-[48%] h-auto rounded-xl py-5  px-6 flex items-center gap-2">
                <h1 className="text-[1.5em]  max-md:text-[1.2em] text-[#A885F8]"><LiaWalletSolid /></h1>
                <main>
                    <h2 className="text-[1.2em]  max-md:text-[1em] font-medium">$0.00</h2>
                    <p className="text-[.9em] text-black/70">Wallet Balance</p>
                </main>
            </section>

            <section className="bg-white w-[22%] max-lg:w-[23%] max-md:w-[48%] h-auto rounded-xl py-5  px-6 flex items-center gap-2">
                <h1 className="text-[1.5em]  max-md:text-[1.2em] text-[#A885F8]"><GiKnifeFork /></h1>
                <main>
                    <h2 className="text-[1.2em]  max-md:text-[.8em] font-medium">0</h2>
                    <p className="text-[.9em] text-black/70">Total Orders</p>
                </main>
            </section>

            <section className="bg-white w-[22%] max-lg:w-[23%] max-md:w-[48%] h-auto rounded-xl py-5  px-6 flex items-center gap-2">
                <h1 className="text-[1.5em]  max-md:text-[1.2em] text-[#07BC0C]"><GiCheckMark /></h1>
                <main>
                    <h2 className="text-[1.2em]  max-md:text-[.8em] font-medium">0</h2>
                    <p className="text-[.9em] text-black/70">Completed</p>
                </main>
            </section>

            <section className="bg-white w-[22%] max-lg:w-[23%] max-md:w-[48%] h-auto rounded-xl py-5  px-6 flex items-center gap-2">
                <h1 className="text-[1.5em]  max-md:text-[1.2em] text-[#F15757]"><MdFavoriteBorder /></h1>
                <main>
                    <h2 className="text-[1.2em]  max-md:text-[.8em] font-medium">0</h2>
                    <p className="text-[.9em] text-black/70">Favorite</p>
                </main>
            </section>   

            <section className="bg-white w-[22%] max-lg:w-[23%] max-md:w-[48%] h-auto rounded-xl py-5  px-6 flex items-center gap-2">
                <h1 className="text-[1.5em]  max-md:text-[1.2em] text-[#A885F8]"><LiaWalletSolid /></h1>
                <main>
                    <h2 className="text-[1.2em]  max-md:text-[.8em] font-medium">$0.00</h2>
                    <p className="text-[.9em] text-black/70">Total Spent</p>
                </main>
            </section>   

            <section className="bg-white w-[22%] max-lg:w-[23%] max-md:w-[48%] h-auto rounded-xl py-5  px-6 flex items-center gap-2">
                <h1 className="text-[1.5em]  max-md:text-[1.2em] text-[#44C8DF]"><IoIosNotifications /></h1>
                <main>
                    <h2 className="text-[1.2em]  max-md:text-[.8em] font-medium">0</h2>
                    <p className="text-[.9em] text-black/70">Notification</p>
                </main>
            </section>   

            <section className="bg-white w-[22%] max-lg:w-[23%] max-md:w-[48%] h-auto rounded-xl py-5  px-6 flex items-center gap-2">
                <h1 className="text-[1.5em]  max-md:text-[1.2em] text-[#A885F8]"><FiClock /></h1>
                <main>
                    <h2 className="text-[1.2em]  max-md:text-[.8em] font-medium">0</h2>
                    <p className="text-[.9em] text-black/70">Recent</p>
                </main>
            </section>   

            <section className="bg-white w-[22%] max-lg:w-[23%] max-md:w-[48%] h-auto rounded-xl py-5  px-6 flex items-center gap-2">
                <h1 className="text-[1.5em]  max-md:text-[1.2em] text-[#A0DD75]"><RiWallet3Fill /></h1>
                <main>
                    <h2 className="text-[1.2em]  max-md:text-[.8em] font-medium">0</h2>
                    <p className="text-[.9em] text-black/70">Recent Pending</p>
                </main>
            </section>   
        </div>
    )
}

export default Cards
   