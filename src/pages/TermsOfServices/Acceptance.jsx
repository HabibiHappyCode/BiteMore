import { IoDocumentTextOutline } from "react-icons/io5";

function Acceptance() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><IoDocumentTextOutline /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">1. Acceptance of Terms</span>
            </h1>

            <p className="text-black/80 text-base/7">By accessing and using BiteRush ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            <p className="text-black/80 text-base/7">These Terms of Service ("Terms") govern your access to and use of our website, mobile application, and services (collectively, the "Service"). Your use of the Service constitutes your agreement to these Terms.</p>

        </div>
    )
}

export default Acceptance
