import { FaUserEdit } from "react-icons/fa";

function UserRight() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><FaUserEdit /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">8. Your Rights and Choices</span>
            </h1>

            <p className="text-black/80 text-base/7">
                You have the following rights regarding your personal information:
            </p>
            <ul className="text-black/80 text-base/9 list-disc marker:text-[#0F5529] pl-6">
                <li>
                    <span className="font-bold">Access: </span>
                    <span>Request access to your personal information and receive a copy</span>
                </li>
                <li>
                    <span className="font-bold">Correction: </span>
                    <span>Request correction of inaccurate or incomplete information</span>
                </li>
                <li>
                    <span className="font-bold">Deletion: </span>
                    <span>Request deletion of your personal information (subject to legal requirements)</span>
                </li>
                <li>
                    <span className="font-bold">Objection:  </span>
                    <span> Object to processing of your information for certain purposes</span>
                </li>
                <li>
                    <span className="font-bold">Restriction:  </span>
                    <span>Request restriction of processing your information</span>
                </li>
                <li>
                    <span className="font-bold">Portability:  </span>
                    <span>Request transfer of your information to another service provider</span>
                </li>
                <li>
                    <span className="font-bold">Withdraw Consent: </span>
                    <span>Withdraw consent for processing, where consent is the legal basis</span>
                </li>
                <li>
                    <span className="font-bold"> Opt-Out:</span>
                    <span>Unsubscribe from marketing communications at any time</span>
                </li>


            </ul>
            <p className="text-black/80 text-base/7">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>


        </div>
    )
}

export default UserRight
