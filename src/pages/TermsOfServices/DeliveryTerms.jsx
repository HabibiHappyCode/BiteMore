import { CiDeliveryTruck } from "react-icons/ci";

function DeliveryTerms() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><CiDeliveryTruck /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">5. Delivery Terms</span>
            </h1>

            <p className="text-black/80 text-base/7">We strive to deliver your orders within the estimated time frames provided. However, delivery times are estimates and not guaranteed. Factors that may affect delivery include:</p>
            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                <li>Weather conditions</li>
                <li>Traffic conditions</li>
                <li>Order volume</li>
                <li>Distance from our kitchen/partner restaurants</li>
                <li>Special preparation requirements</li>
            </ul>
            <p className="text-black/80 text-base/7">You are responsible for providing accurate delivery address information. We are not liable for delays or failures in delivery due to incorrect address information provided by you.</p>
            <p className="text-black/80 text-base/7">
                If you are not available to receive your order, we will attempt to contact you. If we cannot reach you, the order may be returned, and you may be charged a restocking fee.
            </p>

        </div>
    )
}

export default DeliveryTerms
