import { RiIndeterminateCircleLine } from "react-icons/ri";

function Termination() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><RiIndeterminateCircleLine /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">11. Modifications to Terms</span>
            </h1>

            <p className="text-black/80 text-base/7">We reserve the right to terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.</p>
            <p className="text-black/80 text-base/7">Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to delete your account.</p>

        </div>
    )
}

export default Termination
