import { LuContactRound } from "react-icons/lu";

function ContactInfo({value}) {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><LuContactRound /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">{value}. User Accounts and Registration</span>
            </h1>

            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                <li> <a href="tel:+2438149285789">
                    <span className="font-bold">Phone: </span>
                    <span>+243 814 928 5789</span>
                </a></li>

                <li>
                    <span className="font-bold">Email: </span>
                    <span>abdulmalikiyiola@gmail.com</span>
                </li>

                <li>
                    <span className="font-bold">Address: </span>
                    <span>Osun State, Nigeria</span>
                </li>
            </ul>
        </div>
    )
}

export default ContactInfo
