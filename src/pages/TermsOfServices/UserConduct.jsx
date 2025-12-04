import { GoCodeOfConduct } from "react-icons/go";

function UserConduct() {
    return (
          <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
                    <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                        <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><GoCodeOfConduct /></span>
                        <span className=" font-strike text-[1.5em] text-[#0F172A]">7. User Conduct</span>
                    </h1>
        
                    <p className="text-black/80 text-base/7">You agree not to:</p>
                    <ul className="text-black/80 text-base/7 list-disc marker:text-[#0F5529] pl-6">
                        <li>Use the Service for any illegal purpose or in violation of any laws</li>
                        <li>Violate or infringe upon the rights of others, including intellectual property rights</li>
                        <li>Transmit any harmful, offensive, or inappropriate content</li>
                        <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                        <li>Use automated systems or bots to access the Service without permission</li>
                        <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                        <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                        <li>Create multiple accounts to circumvent restrictions or obtain multiple promotional benefits</li>
                    </ul>
        
                </div>
    )
}

export default UserConduct
