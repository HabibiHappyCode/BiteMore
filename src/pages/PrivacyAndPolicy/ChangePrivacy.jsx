import { MdChangeCircle } from "react-icons/md";

function ChangePrivacy() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><MdChangeCircle /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">12. Changes to This Privacy Policy</span>
            </h1>

            <p className="text-black/80 text-base/7">We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:</p>
            <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                <li>Posting the updated Privacy Policy on our website</li>
                <li>Sending an email notification to registered users</li>
                <li>Displaying a prominent notice on our Service</li>
            </ul>
            <p className="text-black/80 text-base/7">The "Last Updated" date at the top of this page indicates when this Privacy Policy was last revised. Your continued use of the Service after such changes constitutes your acceptance of the updated Privacy Policy.</p>

        </div>
    )
}

export default ChangePrivacy
