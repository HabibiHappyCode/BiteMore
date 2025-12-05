import { MdOutlineRemoveRedEye } from "react-icons/md";

function UseInfo() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><MdOutlineRemoveRedEye /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">3. How We Use Your Information</span>
            </h1>

            <p className="text-black/80 text-base/7">We use the information we collect for various purposes:</p>
            <ul className="text-black/80 text-base/9 list-disc marker:text-[#0F5529] pl-6">
                <li>
                    <span className="font-bold"> Service Delivery: </span>
                    <span>To process and fulfill your orders, manage your account, and provide customer support</span>
                </li>

                <li>
                    <span className="font-bold">Communication: </span>
                    <span>To send order confirmations, delivery updates, promotional offers, and important service notifications</span>
                </li>
                <li>
                    <span className="font-bold">Personalization: </span>
                    <span>To customize your experience, recommend meals based on your preferences, and remember your settings</span>
                </li>
                <li>
                    <span className="font-bold">Improvement: </span>
                    <span>To analyze usage patterns, improve our services, develop new features, and enhance user experience</span>
                </li>
                <li>
                    <span className="font-bold">Security:</span>
                    <span>To detect, prevent, and address technical issues, fraud, and security threats</span>
                </li>
                <li>
                    <span className="font-bold">Legal Compliance:</span>
                    <span>To comply with legal obligations, enforce our terms of service, and protect our rights</span>
                </li>
                <li>
                    <span className="font-bold">Marketing:</span>
                    <span>To send you promotional materials, special offers, and newsletters (with your consent, which you can withdraw at any time)</span>
                </li>

            </ul>
        </div>
    )
}

export default UseInfo
