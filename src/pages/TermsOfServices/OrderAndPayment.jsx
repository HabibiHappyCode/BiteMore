import { IoCardOutline } from "react-icons/io5";

function OrderAndPayment() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><IoCardOutline /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">4. Orders and Payment</span>
            </h1>

            <p className="text-black/80 text-base/7">When you place an order through our Service, you agree to pay all charges associated with your order, including:</p>
            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                <li>Meal prices as displayed on our platform</li>
                <li>Delivery fees (if applicable)</li>
                <li>Taxes and service charges</li>
                <li>Any additional fees for special requests or add-ons</li>
            </ul>
            <p className="text-black/80 text-base/7">We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery (where available). All payments are processed securely through our encrypted payment gateway.</p>
            <p className="text-black/80 text-base/7">
                <span className="font-bold">Cancellation Policy: </span>
                <span>You may cancel your order within 5 minutes of placing it for a full refund. After this period, cancellations may be subject to our cancellation policy. For subscription services, cancellations must be made at least 24 hours before the next scheduled delivery.</span>
            </p>

        </div>
    )
}

export default OrderAndPayment
