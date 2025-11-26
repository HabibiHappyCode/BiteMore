import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { useState } from "react";
import { GrSecure } from "react-icons/gr";
import useAuthStore from "../../../store/authContext";
import { useNavigate } from "react-router-dom";

function SignInForm() {
    const { signIn, error } = useAuthStore();
    const navigate = useNavigate()
    const [toggleEyes, setToggleEyes] = useState(true);
    const handleToggleEyes = () => {
        setToggleEyes(prevEyeState => !prevEyeState)
    }

    const handleSubmitSignIn = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        signIn(email, password, navigate)
    }
    return (
        <div className="bg-[#ffffff] w-[35%] max-md:w-[100%] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded">
            <h2 className="font-medium text-[1.3em] text-center mb-3">Login to Your Account</h2>
            <p className="text-[.9em] text-black/50 text-center mb-3">Enter your credentials to access your account</p>
            <form onSubmit={handleSubmitSignIn}>
                <p className="mb-4">
                    <label htmlFor="Email" className="text-[.9em]">Email</label>
                    <span className="flex items-center bg-[#3B3B3B]/90 text-white text-[.9em] border-1 border-[#0C4521] px-2 py-2 rounded w-full flex  gap-2 rounded mt-3">
                        <span className="text-[1.1em]"><MdOutlineMail /></span>
                        <input className="w-full outline-none" type="email" name='email' required />
                    </span>
                </p>

                <p className="mb-4">
                    <label htmlFor="Password" className="text-[.9em]">Password</label>

                    <span className="flex items-center bg-[#3B3B3B]/90 text-white text-[.9em] border-1 border-[#0C4521] px-2 py-2 rounded w-full flex  gap-2 rounded mt-3">
                        <span className="text-[1.1em]"> <CiLock /></span>
                        <input className="w-full outline-none" type={`${toggleEyes ? "password" : "text"}`} name="password" required />
                        <span onClick={handleToggleEyes} className="text-[1.1em]  cursor-pointer"> {toggleEyes ? <GoEyeClosed /> : <GoEye />} </span>
                    </span>

                </p>
                {error && <p className="text-red-600 text-[.9em]">{error}</p>}
                <button className="w-[100%] bg-[#0F5529] border-1 border-[#0F5529]/80 hover:bg-white hover:text-[#0F5529] ease-in-out duration-200 my-3  px-2 py-2 font-medium text-white cursor-pointer rounded">Login</button>
            </form>

            <p className="text-[.9em] text-black/50 text-center mb-3" >Don't have an account? <span className="cursor-pointer text-[#0F5529] hover:text-[#0F5529]/70">Sign Up</span></p>

            <p className="flex items-center justify-center gap-1 text-[.9em] text-black/50 mb-3">
                <span><GrSecure /></span>
                <span> Secure login with encryption</span>
            </p>
        </div>
    )
}

export default SignInForm
