import { useContext } from "react"
import CartContext from "../../store/CartContext"
import { currencyFormatter } from "../../util/formatting"

function SubTotal() {
    const { items } = useContext(CartContext)

    const SubTotal = items.reduce((total, subTotal) => {
        return total + subTotal.idMeal * subTotal.quantity
    }, 0)
    return (
        <div className=' shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10  max-md:p-4 rounded-xl flex justify-end '>
            <section className='w-[50%] max-lg:w-[100%]  flex flex-col gap-3'>
                <h1 className='flex justify-between items-center'>
                    <span className="max-md:text-[.9em]">Subtotal: </span>
                    <span className='font-strike text-[1.2em] max-md:text-[1em] text-[#52c234]'>{currencyFormatter.format(SubTotal)}</span>
                </h1>
                <p className=" max-md:text-[.9em] text-center">Note: Shipping Calculated at checkout</p>
                <button className='w-full text-[1em] text-white/80 rounded-full cursor-pointer px-10 py-2 max-md:py-1 bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white'>Checkout</button>
            </section>
        </div>
    )
}

export default SubTotal
