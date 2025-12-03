import { useContext } from "react"
import ModalContext from "../../store/ModalContext"
import { RxCross1 } from "react-icons/rx";

function EditCustomerForm() {
    const { closeEditModal } = useContext(ModalContext);
    const handlCloseEdit = () => {
        closeEditModal()
    }

    const savedValues = JSON.parse(localStorage.getItem('orderNowDetails'))
    const userData = savedValues.formData
    const selectedMeal = savedValues.selectedMeal


    const handleSubmitForm = (event) => {
        event.preventDefault()

        const fd = new FormData(event.target);
        const formData = Object.fromEntries(fd.entries());

        const newValue = {
            formData,
            selectedMeal
        }

        localStorage.setItem('orderNowDetails', JSON.stringify(newValue))

        closeEditModal()
    }





    return (
        <div className="p-10 py-5  max-md:p-4 rounded-xl mt-8">
            <p onClick={handlCloseEdit} className="absolute top-5 right-10 max-md:right-5 cursor-pointer"><RxCross1 /></p>
            <h1 className="text-[1.3em] text-[#0C4521] font-medium  border-b-2 border-[#0C4521] pb-2">Edit Customer Information</h1>

            <form onSubmit={handleSubmitForm}>
                <div className="flex flex-wrap justify-between">
                    <p className="flex flex-col gap-1 w-[48%] max-md:w-[100%] my-4">
                        <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="fullName">Full Name *</label>
                        <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="text" name="fullName" placeholder="Enter your full name" defaultValue={userData?.fullName} required />
                    </p>

                    <p className="flex flex-col gap-1 w-[48%] max-md:w-[100%] my-4">
                        <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="email">Email *</label>
                        <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="email" name="email" placeholder="Enter your email" defaultValue={userData?.email} required />
                    </p>

                    <p className="flex flex-col gap-1 w-[48%] max-md:w-[100%]  my-4">
                        <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="phoneNumber">Phone Number 1 *</label>
                        <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="number" name="phoneNummberOne" placeholder="Enter your phone number" defaultValue={userData?.phoneNummberOne} required />
                    </p>

                    <p className="flex flex-col gap-1 w-[48%] max-md:w-[100%]  my-4">
                        <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="phoneNumber_2">Phone Number 2</label>
                        <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521] appearance-none" type="number" name="phoneNummber" placeholder="Enter your phone number" defaultValue={userData?.phoneNummber} />
                    </p>
                </div>

                <p className="flex flex-col gap-1 w-[100%] max-md:w-[100%]  my-4">
                    <label className="text-[.9em] text-[#0C4521] font-medium" htmlFor="address">Delivery address *</label>
                    <textarea className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" placeholder="" name="address" defaultValue={userData?.address} required></textarea>
                </p>


                <button className='w-full mt-8 text-[1em] text-white/80 rounded-full cursor-pointer px-10 py-2 max-md:py-1 bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white max-md:mb-8'>Save Changes</button>
            </form>
        </div>
    )
}

export default EditCustomerForm
