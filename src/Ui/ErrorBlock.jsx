import { RiEmotionUnhappyLine } from "react-icons/ri";

function ErrorBlock() {
    return (
        <p className='flex items-center justify-center text-red-400 w-full text-[.8em] gap-2 flex-col'>
            <span className='flex gap-1 items-center'>Failed to fetch meals <RiEmotionUnhappyLine /></span>
            <span>Please check your Internet connection and try again</span>
        </p>
    )
}

export default ErrorBlock
