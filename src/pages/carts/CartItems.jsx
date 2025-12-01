import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import { currencyFormatter } from '../../util/formatting'
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { motion } from 'framer-motion';

function CartItems() {
    const { items, addItem, removeItem } = useContext(CartContext);

    const handleIncreaseItem = (meal) => {
        addItem(meal)
    }

    const handleDecreaseItem = (meal) => {
        removeItem(meal)
    }

    return (
        <div className=' shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10  max-md:p-4 rounded-xl'>
            <h1 className="font-strike text-[#0C4521] text-[2em] max-lg:text-[1.5em] mb-3 font-bold">My Cart</h1>
            {
                items.map((meal) => (
                    <motion.section
                        layout
                        exit={{ y: -30, opacity: 0 }}
                        className='border-t-1 border-[#0C4521] py-5 flex justify-between items-center'
                        key={meal.idMeal}>
                        <div className='flex gap-5'>
                            <div className='w-[17vh] max-md:w-[15vh] h-[15vh] max-md:h-[13vh] rounded-md overflow-hidden'>
                                <img className='w-[100%] h-[100%] object-cover rounded-md' src={meal.strMealThumb} alt="" />
                            </div>

                            <article className='flex flex-col justify-between '>
                                <h2 className='font-strike text-[#0C4521] text-[1.2em] max-md:text-[1em]'>{meal.strMeal}</h2>
                                <p className='text-[#000] font-[1.1em]'>{currencyFormatter.format(meal.idMeal)}</p>
                            </article>
                        </div>

                        <div className='border-l border-r border-[#0C4521] px-6 max-lg:px-2 flex gap-5  max-lg:gap-3 max-md:gap-2 items-center'>
                            <button onClick={() => handleIncreaseItem(meal)} className='cursor-pointer'><IoAddSharp /></button>
                            <span className='bg-[#0C4521] py-2 max-lg:py-1 px-4 max-md:px-2  max-md:text-[.8em] rounded text-white'>{meal.quantity}</span>
                            <button onClick={() => handleDecreaseItem(meal.idMeal)} className=' cursor-pointer'><RiSubtractFill /></button>
                        </div>
                    </motion.section>
                ))
            }
        </div>
    )
}

export default CartItems


