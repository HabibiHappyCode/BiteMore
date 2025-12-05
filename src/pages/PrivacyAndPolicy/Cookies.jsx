import { LiaCookieSolid } from "react-icons/lia";

function Cookies() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><LiaCookieSolid /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">5. Cookies and Tracking Technologies</span>
            </h1>

            <p className="text-black/80 text-base/7">
                We use cookies and similar tracking technologies to track activity on our Service and store certain information. Cookies are small data files stored on your device.
            </p>
            <ul className="text-black/80 text-base/9 list-disc marker:text-[#0F5529] pl-6">
                <li>
                    <span className="font-bold">Essential Cookies: </span>
                    <span>Required for the Service to function properly (e.g., authentication, security)</span>
                </li>

                <li>
                    <span className="font-bold">Performance Cookies:</span>
                    <span>Help us understand how users interact with our Service (e.g., analytics, error tracking)</span>
                </li>
                <li>
                    <span className="font-bold">Functionality Cookies:</span>
                    <span> Remember your preferences and settings to enhance your experience</span>
                </li>
                <li>
                    <span className="font-bold">Advertising Cookies: </span>
                    <span>Used to deliver relevant advertisements and track campaign effectiveness</span>
                </li>
            </ul>
            <p className="text-black/80 text-base/7">
                You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our Service.
            </p>


        </div>
    )
}

export default Cookies
