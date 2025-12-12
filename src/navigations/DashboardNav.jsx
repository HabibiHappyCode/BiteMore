import { NavLink } from "react-router-dom";
import useAuthStore from "../store/authContext"
import { IoStatsChartSharp } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";


function DashboardNav() {
    const { user } = useAuthStore();

    const firstLetter = user?.fullName.charAt()
    return (
        <header className="max-lg:hidden bg-white w-80 h-[100%] overflow-y-auto py-3 px-7 rounded-xl">
            <section className="text-center">
                <h1 className="w-20 h-20 rounded-full flex justify-center items-center self-center mx-auto text-[2em] font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] bg-[linear-gradient(156deg,rgba(56,123,62,0.83)_41%,rgba(160,221,117,0.85)_59%,rgba(160,221,117,0.47)_100%)]">{firstLetter}</h1>
                <main className="flex flex-col gap-[.2em]">
                    <p className="font-medium text-[1.1em]">{user?.fullName}</p>
                    <p className="font-medium text-[.9em] text-black/60">{user?.email}</p>
                    <p className=" text-black/60 text-[.9em] bg-black/10 border-1 border-black/10 w-23 rounded-full py-1 mx-auto ">USER</p>
                </main>
            </section>
            <nav className='border-t-1 border-black/20 mt-7 pt-4'>
                <h1 className="font-bold text-[.9em]  text-black/60">Dashboard</h1>
                <ul className="font-light text-[1em]  text-black/60">
                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><IoStatsChartSharp /></span>
                            <span>Overview</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><GiKnifeFork /></span>
                            <span>My Orders</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><MdFavoriteBorder /></span>
                            <span>Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><IoIosNotifications /></span>
                            <span>Notification</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><FaWallet /></span>
                            <span>Wallet</span>
                        </NavLink>
                    </li>

                </ul>
                <h1 className="font-bold text-[.9em]  text-black/60 mt-5">Settings</h1>
                <ul className="font-light text-[1em]  text-black/60">
                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><GoGear /></span>
                            <span>Change Password</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><AiOutlineSafety /></span>
                            <span>Privacy</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><MdOutlineDelete /></span>
                            <span>Delete Account</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className='flex items-center gap-2 py-2'>
                            <span><IoIosLogOut /></span>
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default DashboardNav
