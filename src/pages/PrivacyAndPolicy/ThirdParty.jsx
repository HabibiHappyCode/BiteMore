import { GiPodiumThird } from "react-icons/gi";

function ThirdParty() {
   return (
          <div className="rounded-xl shadow-[0_1px_5px_rgba(0,0,0,0.2)] flex flex-col gap-5 p-10 max-md:p-5 mt-20 max-md:mt-10">
              <h1 className="flex items-center gap-5 border-b-1  border-black/20 pb-5">
                  <span className="bg-[#DBFBEB] text-[#0F5529] text-[2em] font-bold p-3 rounded-xl shadow-[0_10px_10px_rgba(0,0,0,0.2)]  "><GiPodiumThird /></span>
                  <span className=" font-strike text-[1.5em] text-[#0F172A]">10. Third-Party Links</span>
              </h1>
  
              <p className="text-black/80 text-base/7">Our Service may contain links to third-party websites, applications, or services that are not owned or controlled by BiteRush. We are not responsible for the privacy practices of these third parties.</p>
              <p className="text-black/80 text-base/7">We encourage you to review the privacy policies of any third-party sites or services you visit. This Privacy Policy applies only to information collected by our Service.</p>
  
          </div>
      )
}

export default ThirdParty
