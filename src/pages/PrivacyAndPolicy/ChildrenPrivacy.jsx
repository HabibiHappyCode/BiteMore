import { FaChildren } from "react-icons/fa6";

function ChildrenPrivacy() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><FaChildren /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">9. Introduction</span>
            </h1>

            <p className="text-black/80 text-base/7">Our Service is not intended for children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children under 13.</p>
            <p className="text-black/80 text-base/7">If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>

        </div>
    )
}

export default ChildrenPrivacy
