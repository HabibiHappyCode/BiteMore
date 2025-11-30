import { useContext } from "react"
import CartItems from "./CartItems"
import CartContext from "../../store/CartContext"
import NoItem from "./NoItem";
import SubTotal from "./SubTotal";

function Cart() {
    const { items } = useContext(CartContext);

    const itemsPresent = items.length >= 1




    return (
        <div className="py-30 px-30 max-lg:px-10  max-lg:pb-10 max-md:px-2 ">
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
