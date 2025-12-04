import { GoLaw } from "react-icons/go";

function Law() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><GoLaw /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">11. Modifications to Terms</span>
            </h1>

            <p className="text-black/80 text-base/7">These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.</p>
            <p className="text-black/80 text-base/7">Any disputes arising from or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>

        </div>
    )
}

export default Law
