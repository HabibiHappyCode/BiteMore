import { Link } from "react-router-dom"
import { GrFormNextLink } from "react-icons/gr";
import OrderDetails from "./OrderDetails";
import OrderMeal from "./OrderMeal";

function OrderNow() {
    return (
        <div className='py-30 max-lg:mt-15 max-md:w-[100%]  px-20 max-md:pb-20 max-lg:px-3 max-lg:py-10'>
            <ul className='flex items-center gap-3 text-[#0C4521] text-[1em]  max-sm:text-[.9em] font-bold mb-5'>
                <li><Link to='/menu'>Home</Link></li>
                <p><GrFormNextLink /></p>
                <li><Link to='/menu'>Menu</Link></li>
                <p><GrFormNextLink /></p>
                <li className='text-[#BADB19]'>Order Summary</li>
            </ul>

            <OrderDetails />
            <OrderMeal />

        </div>
    )
}

export default OrderNow
