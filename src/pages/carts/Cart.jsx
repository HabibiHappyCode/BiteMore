import { useContext } from "react"
import CartItems from "./CartItems"
import CartContext from "../../store/CartContext"
import NoItem from "./NoItem";
import SubTotal from "./SubTotal";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

function Cart() {
    const { items } = useContext(CartContext);

    const itemsPresent = items.length >= 1




    return (
        <div className="py-30 px-30 max-lg:px-10  max-lg:pb-10 max-md:px-2 ">
            <ul className='flex items-center gap-3 text-[#0C4521] text-[1em]  max-sm:text-[.9em] font-bold mb-5'>
                <li><Link to='/'>Home</Link></li>
                  <p><GrFormNextLink /></p>
                 <li><Link to='/menu'>Menu</Link></li>
                <p><GrFormNextLink /></p>
                <li className='text-[#BADB19]'>Cart</li>
            </ul>
            {
                itemsPresent ?
                    <div className="flex flex-col gap-10">
                        <CartItems />
                        <SubTotal />
                    </div>
                    : <NoItem />
            }

        </div>
    )
}

export default Cart
