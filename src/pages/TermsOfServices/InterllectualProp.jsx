import { VscSymbolProperty } from "react-icons/vsc";

function IinterllectualProp() {
    return (
        <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
            <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><VscSymbolProperty /></span>
                <span className=" font-strike text-[1.5em] text-[#0F172A]">8. Intellectual Property</span>
            </h1>

            <p className="text-black/80 text-base/7">All content on the Service, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of BiteRush or its content suppliers and is protected by international copyright laws.</p>
            <p className="text-black/80 text-base/7">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without our prior written consent.
            </p>

        </div>
    )
}

export default IinterllectualProp
