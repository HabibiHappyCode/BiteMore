import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";

function CartItems() {
    const { items, increaseQty, decreaseQty } = useContext(CartContext);

    return (
        <div className="shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10 max-md:p-3 rounded-xl">
            <h1 className="font-strike text-[#0C4521] text-[2em]  max-md:text-[1.2em] mb-3 font-bold">
                My Cart
            </h1>

            {items.map((meal) => (
                <section
                    key={meal.id}
                    className="border-t-1 border-[#0C4521] py-5 flex justify-between items-center"
                >
                    <div className="flex gap-5  max-md:gap-3">
                        <div className="w-[17vh] h-[15vh] rounded-md overflow-hidden">
                            <img
                                className="w-full h-full object-cover rounded-md"
                                src={meal.image}
                                alt={meal.title}
                            />
                        </div>

                        <article className="flex flex-col justify-between">
                            <h2 className="font-strike text-[#0C4521] text-[1.2em]  max-md:text-[.8em]">
                                {meal.title}
                            </h2>
                            <p className="text-black   max-md:text-[.9em]">
                                {currencyFormatter.format(meal.price)}
                            </p>
                        </article>
                    </div>

                    <div className='border-l border-r border-[#0C4521] px-6 max-lg:px-2 flex gap-5  max-lg:gap-3 max-md:gap-2 items-center'>
                        <button onClick={() => increaseQty(meal.id)} >
                            <IoAddSharp />
                        </button>

                        <span className="bg-[#0C4521] py-2 px-4 rounded text-white">
                            {meal.quantity}
                        </span>

                        <button onClick={() => decreaseQty(meal.id)}>
                            <RiSubtractFill />
                        </button>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default CartItems;
