

function CheckoutForm() {
    return (
        <div className=" shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10  max-md:p-4 rounded-xl mt-8">
            <h1 className="text-[1.3em] text-[#0C4521] font-medium  border-b-2 border-[#0C4521] pb-2">Customer Information</h1>

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
                    <input className="outline-none border-1 border-[#0C4521] rounded-md p-2 text-[#0C4521]" type="number" name="phoneNummber" placeholder="Enter your phone number" required />
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
        </div>
    )
}

export default CheckoutForm
