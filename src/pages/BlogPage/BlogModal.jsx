import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import ModalContext from "../../store/ModalContext";

function BlogModal({ blogs }) {
    const { closeBlogModal } = useContext(ModalContext)

    const handleCloseBlog = () => {
        closeBlogModal()
    }
    return (
        <section className="w-[100%] p-10  max-sm:w-[100%] flex flex-col gap-3 relative  ">
            <p onClick={handleCloseBlog} className="absolute top-5 text-[1.2em] right-10 max-md:right-5 cursor-pointer"><RxCross1 /></p>
            <div className="w-[100%] h-[50vh]">
                <img className="w-[100%] h-[100%] object-cover" src={blogs?.img} alt="" />
            </div>



            <article>
                <h1 className="font-medium text-[1.1em] max-sm:text-[1em]">{blogs?.header}</h1>
                <small className='py-10'>By Bite team | 04/12/2025 03:59</small>
                <p className="text-black/70 my-2 text-[1.1em]  max-sm:text-[1em]"> {blogs?.text}</p>
            </article>

        </section>
    )
}

export default BlogModal
