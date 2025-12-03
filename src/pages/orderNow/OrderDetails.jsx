import { useContext } from "react"
import ModalContext from "../../store/ModalContext"
import Modal from '../../Ui/Modal'
import EditCustomerForm from "./EditCustomerForm"


function OrderDetails() {
    const { showEditModal, modalProgress } = useContext(ModalContext)
    const orderNowDetails = JSON.parse(localStorage.getItem('orderNowDetails'))
    const user = orderNowDetails.formData

    const handleShowEditModal = () => {
        showEditModal()
    }
    // console.log(orderNowDetails)
    return (
        <>
            <Modal open={modalProgress === 'showEdit'}>
                <EditCustomerForm />
            </Modal>
            <div className=" shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10  max-md:p-4 rounded-xl mt-8">
                <section className=" border-b-2 border-[#BADB19] pb-2 flex justify-between items-center">
                    <h1 className="text-[1.3em] text-[#0C4521] font-medium ">Customer Information</h1>
                    <button onClick={handleShowEditModal} className='bg-[#0C4521] text-white px-5  py-1  max-md:text-[.9em] rounded-md cursor-pointer'>Edit</button>
                </section>
                <div className='py-5 flex flex-wrap gap-3'>
                    <p className='flex flex-col w-[32%] max-md:w-[100%]'>
                        <span className='text-black/50 font-medium text-[.9em] mb-2'>Full Name:</span>
                        <span className='bg-[#F8F9FA] border-l-3 border-[#BADB19] rounded pl-2 py-1'>{user?.fullName}</span>
                    </p>
                    <p className='flex flex-col w-[32%] max-md:w-[100%]'>
                        <span className='text-black/50 font-medium text-[.9em]  mb-2'>Email:</span>
                        <span className='bg-[#F8F9FA] border-l-3 border-[#BADB19] rounded pl-2 py-1'>{user?.email}</span>
                    </p>
                    <p className='flex flex-col w-[32%] max-md:w-[100%]'>
                        <span className='text-black/50 font-medium text-[.9em]  mb-2'>Phone Number 1:</span>
                        <span className='bg-[#F8F9FA] border-l-3 border-[#BADB19] rounded pl-2 py-1'>{user?.phoneNummberOne} </span>
                    </p>
                    <p className='flex flex-col w-[100%]'>
                        <span className='text-black/50 font-medium text-[.9em]  mb-2'>Delivery Address:</span>
                        <span className='bg-[#F8F9FA] border-l-3 border-[#BADB19] rounded pl-2 py-1'>{user?.address}</span>
                    </p>
                </div>
            </div></>
    )
}

export default OrderDetails
