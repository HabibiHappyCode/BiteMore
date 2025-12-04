import { VscTerminalUbuntu } from "react-icons/vsc";


function ModOfTerms() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><VscTerminalUbuntu /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">11. Modifications to Terms</span>
            </h1>

            <p className="text-black/80 text-base/7">We reserve the right to modify these Terms at any time. We will notify users of any material changes by:</p>
            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                <li>Posting the updated Terms on our website</li>
                <li>Sending an email notification to registered users</li>
                <li>Displaying a notice on our Service</li>
            </ul>
            <p className="text-black/80 text-base/7">Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.</p>

        </div>
    )
}

export default ModOfTerms
