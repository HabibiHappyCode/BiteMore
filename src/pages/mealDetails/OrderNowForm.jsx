import { RxCross1 } from "react-icons/rx";
import { currencyFormatter } from "../../util/formatting"
import { useContext } from "react";
import ModalContext from "../../store/ModalContext";
import { useNavigate } from "react-router-dom";


function OrderNowForm({ selectedMeal }) {
    const { closeOrderNowModal } = useContext(ModalContext);
    const navigate = useNavigate()


    const handleCloseModal = () => {
        closeOrderNowModal()
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const fd = new FormData(event.target);
        const formData = Object.fromEntries(fd.entries())

        const enteredData = {
            formData,
            selectedMeal
        }

        localStorage.setItem('orderNowDetails', JSON.stringify(enteredData));
        navigate('/orderNow')
    }
    return (
        <div className="p-10 py-5  max-md:p-4 rounded-xl mt-8">
            <p onClick={handleCloseModal} className="absolute top-5 right-10 max-md:right-5 cursor-pointer"><RxCross1 /></p>
            <h1 className="text-[1.3em] text-[#0C4521] font-medium  border-b-2 border-[#0C4521] pb-2">Customer Information</h1>

            <form onSubmit={handleSubmitForm}>
                <div className="flex flex-wrap justify-between">
                    <p className="flex flex-col gap-1 w-[48%] max-md:w-[100%] my-4">
                        <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="fullName">Full Name *</label>
                        <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="text" name="fullName" placeholder="Enter your full name" required />
                    </p>

                    <p className="flex flex-col gap-1 w-[48%] max-md:w-[100%] my-4">
                        <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="email">Email *</label>
                        <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="email" name="email" placeholder="Enter your email" required />
                    </p>

                    <p className="flex flex-col gap-1 w-[48%] max-md:w-[100%]  my-4">
                        <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="phoneNumber">Phone Number 1 *</label>
                        <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="number" name="phoneNummberOne" placeholder="Enter your phone number" required />
                    </p>

                    <p className="flex flex-col gap-1 w-[48%] max-md:w-[100%]  my-4">
                        <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="phoneNumber_2">Phone Number 2</label>
                        <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521] appearance-none" type="number" name="phoneNummber" placeholder="Enter your phone number" />
                    </p>
                </div>

                <p className="flex flex-col gap-1 w-[100%] max-md:w-[100%]  my-4">
                    <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="address">Delivery address *</label>
                    <textarea className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" placeholder="" name="address" required></textarea>
                </p>

                <h1 className="text-[1.3em] text-[#0C4521] font-medium  border-b-2 border-[#0C4521] pb-2">Order Summary</h1>
                {
                    selectedMeal?.map((meal) => (
                        <div className="mt-2 flex w-full justify-between  border-b-2 border-[#0C4521] pb-2 " key={meal.idMeal}>
                            <span className='font-strike text-[#0C4521] text-[1em]  max-md:text-[.9em] '>{meal.strMeal}</span>
                            <span className='font-strike text-[1em]  max-md:text-[.9em] text-[#52c234] '>{currencyFormatter.format(meal.idMeal)}</span>
                        </div>
                    ))
                }

                <button className='w-full mt-8 text-[1em] text-white/80 rounded-full cursor-pointer px-10 py-2 max-md:py-1 bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white max-md:mb-8'>Proceed to Payement</button>
            </form>
        </div>
    )
}

export default OrderNowForm
