import { CiLock } from "react-icons/ci";

function DataSecurity() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><CiLock /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">6. Data Security</span>
            </h1>

            <p className="text-black/80 text-base/7">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
               <li>Encryption of data in transit and at rest</li>
               <li>Secure payment processing through PCI-compliant systems</li>
               <li>Regular security assessments and updates</li>
               <li>Access controls and authentication mechanisms</li>
               <li>Employee training on data protection</li>
            </ul>
            <p className="text-black/80 text-base/7">However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.</p>

        </div>
    )
}

export default DataSecurity
