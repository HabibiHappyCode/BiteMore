import { FiUsers } from "react-icons/fi";

function UserReg() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><FiUsers /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">3. User Accounts and Registration</span>
            </h1>

            <p className="text-black/80 text-base/7">To use certain features of our Service, you may be required to create an account. You agree to:</p>
            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information to keep it accurate</li>
                <li>Maintain the security of your password and identification</li>
                <li>Accept all responsibility for activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-black/80 text-base/7">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

        </div>
    )
}

export default UserReg
