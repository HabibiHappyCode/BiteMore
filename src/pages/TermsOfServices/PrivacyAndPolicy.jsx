import { MdOutlinePrivacyTip } from "react-icons/md";

function PrivacyAndPolicy() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><MdOutlinePrivacyTip /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">10. Privacy Policy</span>
            </h1>

            <p className="text-black/80 text-base/7">Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
          
            <p className="text-black/80 text-base/7">By using the Service, you consent to the collection and use of your information as described in our Privacy Policy.</p>

        </div>
    )
}

export default PrivacyAndPolicy
