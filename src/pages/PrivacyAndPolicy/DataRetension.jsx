import { MdOutlineDataUsage } from "react-icons/md";

function DataRetension() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><MdOutlineDataUsage /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">7. Data Retention</span>
            </h1>

            <p className="text-black/80 text-base/7">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
              <li>Account information is retained while your account is active</li>
              <li>Order history is retained for record-keeping and customer service purposes</li>
              <li>Payment information is retained as required by financial regulations</li>
              <li>Marketing preferences are retained until you opt out or request deletion</li>
            </ul>
            <p className="text-black/80 text-base/7">When we no longer need your information, we will securely delete or anonymize it.</p>

        </div>
    )
}

export default DataRetension
