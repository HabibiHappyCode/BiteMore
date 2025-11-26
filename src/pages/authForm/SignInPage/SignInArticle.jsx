import { BsCheck2Square } from "react-icons/bs";

function SignInArticle() {
    return (
        <div className="w-[60%] max-md:w-[100%] py-5 px-3">
            <h1 className="text-[#0F5529] font-strike text-[2em] max-md:text-[1.5em]">Welcome Back to BiteMore</h1>
            <p className="text-black/70 max-md:text-[.9em] my-4">
               BiteMore delivers delicious meals fast, offering a wide variety, easy ordering, and exclusive deals for a seamless dining experience.
            </p>

            <article className="flex flex-col gap-2 p-5  max-md:px-2  rounded-lg bg-[#ffffff]">
                <p className="max-md:text-[.9em] flex items-center max-md:items-start gap-1">
                    <span className="text-[#0F5529] font-bold"> <BsCheck2Square /></span>
                    <span className="text-black/70">Pick up where you left off with your favorite meals.</span>
                </p>
                <p className="max-md:text-[.9em] flex items-center  max-md:items-start gap-1">
                    <span className="text-[#0F5529] font-bold"> <BsCheck2Square /></span>
                    <span className="text-black/70">Enjoy exclusive deals tailored just for you</span>
                </p>
                <p className="max-md:text-[.9em] flex items-center  max-md:items-start gap-1">
                    <span className="text-[#0F5529] font-bold"> <BsCheck2Square /></span>
                    <span className="text-black/70">Fast, seamless ordering at your fingertips</span>
                </p>
                <p className="max-md:text-[.9em] flex items-center  max-md:items-start gap-1">
                    <span className="text-[#0F5529] font-bold"> <BsCheck2Square /></span>
                    <span className="text-black/70">Get real-time order updates and delivery tracking.</span>
                </p>
                <p className="max-md:text-[.9em] flex items-center  max-md:items-start gap-1">
                    <span className="text-[#0F5529] font-bold"> <BsCheck2Square /></span>
                    <span className="text-black/70">Save your go-to spots and reorder in seconds.</span>
                </p>
            </article>

        </div>
    )
}

export default SignInArticle
