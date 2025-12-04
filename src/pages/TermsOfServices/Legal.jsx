
import { IoDocumentTextOutline } from "react-icons/io5";

function Legal() {
    return (
        <div className="py-30  max-md:pb-20 flex flex-col gap-2 items-center justify-center">
            <p className="bg-[#ECFDF5] w-[30%] max-lg:w-[50%] max-md:w-[80%] font-medium mb-5 py-1 flex items-center justify-center gap-2 rounded-full">
                <span><IoDocumentTextOutline /></span>
                <span>Premium food delivery</span>
            </p>

            <h1 className="font-strike text-[#0F172A] text-[2.8em] max-lg:text-[2em] text-center font-bold">Terms of Service</h1>

            <p className="text-black/80 text-[1.2em] max-lg:text-[1em] text-center max-w-[60%] max-lg:max-w-[100%]">
                Please read these terms carefully before using our services. By using BiteRush, you agree to be bound by these terms.
            </p>
    
        </div>
    )
}

export default Legal
