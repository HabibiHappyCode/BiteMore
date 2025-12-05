import { PiCylinderLight } from "react-icons/pi";

function CollectInfo() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><PiCylinderLight /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">2. Information We Collect</span>
            </h1>

            <p className="text-black/80 text-base/7">We collect several types of information from and about users:</p>
            <ul className="text-black/80 text-base/9 list-disc marker:text-[#0F5529] pl-6">
                <li>
                    <span className="font-bold">Account Information: </span>
                    <span>Name, email address, phone number, password, and profile information.</span>
                </li>
                <li>
                    <span className="font-bold">Delivery Information:</span>
                    <span> Delivery address, billing address, and location data</span>
                </li>
                <li>
                    <span className="font-bold">Payment Information:</span>
                    <span>Credit/debit card details, billing information, and transaction history (processed securely through encrypted payment gateways)</span>
                </li>
                <li>
                    <span className="font-bold">Order Information:</span>
                    <span>Order history, preferences, dietary restrictions, and special instructions</span>
                </li>
                <li>
                    <span className="font-bold">Device Information:</span>
                    <span> IP address, browser type, device type, operating system, and unique device identifiers</span>
                </li>
                <li>
                    <span className="font-bold">Usage Data:</span>
                    <span>Pages visited, time spent on pages, click patterns, and navigation paths</span>
                </li>
                <li>
                    <span className="font-bold">Location Data: </span>
                    <span>GPS coordinates and location-based information (with your permission)</span>
                </li>

                <li>
                    <span className="font-bold">Cookies and Tracking Technologies</span>
                    <span> Information collected through cookies, web beacons, and similar technologies</span>
                </li>
            </ul>
        </div>
    )
}

export default CollectInfo
