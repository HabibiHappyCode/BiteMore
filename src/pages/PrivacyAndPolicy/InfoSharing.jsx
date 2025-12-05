import { FaCreativeCommonsShare } from "react-icons/fa";

function InfoSharing() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><FaCreativeCommonsShare /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">4. Information Sharing and Disclosure</span>
            </h1>

            <p className="text-black/80 text-base/7">We do not sell your personal information. We may share your information in the following circumstances:

            </p>
            <ul className="text-black/80 text-base/9 list-disc marker:text-[#0F5529] pl-6">
                <li>
                    <span className="font-bold">Service Providers:  </span>
                    <span>With third-party vendors, contractors, and service providers who perform services on our behalf (e.g., payment processing, delivery services, data analytics)</span>
                </li>

                <li>
                    <span className="font-bold"> Business Partners:   </span>
                    <span> With partner restaurants and kitchens to fulfill your orders</span>
                </li>

                <li>
                    <span className="font-bold"> Legal Requirements:  </span>
                    <span>When required by law, court order, or government regulation, or to protect our rights and safety</span>
                </li>

                <li>
                    <span className="font-bold">Business Transfers  </span>
                    <span> In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of the transaction</span>
                </li>
                <li>
                    <span className="font-bold"> With Your Consent: </span>
                    <span>When you explicitly authorize us to share your information</span>
                </li>
            </ul>
            <p className="text-black/80 text-base/7">
                We require all third parties to respect the security of your personal information and to treat it in accordance with the law.
            </p>


        </div>
    )
}

export default InfoSharing
