

function OrderDetails() {
    const orderNowDetails = JSON.parse(localStorage.getItem('orderNowDetails'))
    const user = orderNowDetails.formData
    // console.log(orderNowDetails)
    return (
        <div className=" shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10  max-md:p-4 rounded-xl mt-8">
            <h1 className="text-[1.3em] text-[#0C4521] font-medium  border-b-2 border-[#BADB19] pb-2">Customer Information</h1>
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
        </div>
    )
}

export default OrderDetails
