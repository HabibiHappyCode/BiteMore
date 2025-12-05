import { MdDataExploration } from "react-icons/md";

function DataTransfers() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><MdDataExploration /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">11. International Data Transfers</span>
            </h1>

            <p className="text-black/80 text-base/7">Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.</p>
            <p className="text-black/80 text-base/7">By using our Service, you consent to the transfer of your information to these countries. We take appropriate safeguards to ensure your information receives adequate protection in accordance with this Privacy Policy.</p>

        </div>
    )
}

export default DataTransfers
