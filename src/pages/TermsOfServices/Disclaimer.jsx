import { FaHand } from "react-icons/fa6";

function Disclaimer() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><FaHand /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">9. Disclaimers and Limitation of Liability</span>
            </h1>

            <p className="text-black/80 text-base/7">
                <span className="font-bold">Food Allergies and Dietary Restrictions: </span>
                <span>
                    While we strive to accommodate dietary restrictions and allergies, we cannot guarantee that our meals are completely free of allergens. Customers with severe allergies should exercise caution and contact us before placing orders
                </span>
            </p>

            <p className="text-black/80 text-base/7">
                <span className="font-bold">Service Availability:  </span>
                <span>
                    We do not guarantee that the Service will be available at all times or that it will be free from errors, viruses, or other harmful components.
                </span>
            </p>

            <p className="text-black/80 text-base/7">
                <span className="font-bold">Limitation of Liability:  </span>
                <span>
                    To the maximum extent permitted by law, BiteRush shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </span>
            </p>

        </div>
    )
}

export default Disclaimer
