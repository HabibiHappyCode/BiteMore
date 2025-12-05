import { AiOutlineSafety } from "react-icons/ai";

function Introduction() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><AiOutlineSafety /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">1. Introduction</span>
            </h1>

            <p className="text-black/80 text-base/7">Welcome to BiteRush. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Service").</p>
            <p className="text-black/80 text-base/7">Please read this Privacy Policy carefully. By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.</p>

        </div>
    )
}

export default Introduction
