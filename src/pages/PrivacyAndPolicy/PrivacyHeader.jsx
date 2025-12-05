import { AiOutlineSafety } from "react-icons/ai";

function PrivacyHeader() {
    return (
        <div className="py-30  max-md:pb-20 flex flex-col gap-2 items-center justify-center">
            <p className="bg-[#ECFDF5] w-[30%] max-lg:w-[50%] max-md:w-[80%] font-medium mb-5 py-1 flex items-center justify-center gap-2 rounded-full">
                <span><AiOutlineSafety /></span>
                <span>Privacy & Security</span>
            </p>

            <h1 className="font-strike text-[#0F172A] text-[2.8em] max-lg:text-[2em] text-center font-bold">Privacy Policy</h1>

            <p className="text-black/80 text-[1.2em] max-lg:text-[1em] text-center max-w-[60%] max-lg:max-w-[100%]">
               Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>

        </div>
    )
}

export default PrivacyHeader
