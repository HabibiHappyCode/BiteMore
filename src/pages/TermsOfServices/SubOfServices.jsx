import { MdMiscellaneousServices } from "react-icons/md";

function SubOfServices() {
    return (
          <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
                    <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                        <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><MdMiscellaneousServices /></span>
                        <span className=" font-strike text-[1.5em] text-[#0F172A]">6. Subscription Services</span>
                    </h1>
        
                    <p className="text-black/80 text-base/7">If you subscribe to our meal plans or tiffin services, the following terms apply:</p>
                    <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                        <li>Subscriptions are billed weekly or monthly based on your selected plan</li>
                        <li>You can pause, modify, or cancel your subscription at any time through your account settings</li>
                        <li>Changes to your subscription will take effect at the start of your next billing cycle</li>
                        <li>Refunds for unused portions of your subscription are subject to our refund policy</li>
                        <li> We reserve the right to modify subscription prices with 30 days notice</li>
                    </ul>
        
                </div>
    )
}

export default SubOfServices
