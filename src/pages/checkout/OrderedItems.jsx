import React, { useContext } from 'react'
import CartContext from '../../store/CartContext';
import { currencyFormatter } from '../../util/formatting';

function OrderedItems() {
    const { items } = useContext(CartContext);
    return (
        <div className=" shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10  max-md:p-4 rounded-xl mt-8">
            <h1 className="text-[1.3em] text-[#0C4521] font-medium  border-b-1 border-[#0C4521]/10 pb-2">Order Items</h1>
            {
                items.map((meal) => (
                    <section className='border-t-1 border-[#0C4521] py-5 flex justify-between items-center'
                        key={meal.idMeal}>
                        <div className='flex gap-5'>
                            <div className='w-[17vh] max-md:w-[15vh] h-[15vh] max-md:h-[13vh] rounded-md overflow-hidden'>
                                <img className='w-[100%] h-[100%] object-cover rounded-md' src={meal.strMealThumb} alt="" />
                            </div>

                            <article className='flex flex-col justify-between '>
                                <h2 className='font-strike text-[#0C4521] font-light text-[1.2em] max-md:text-[1em]'>{meal.strMeal}</h2>
                                <p  className=' py-2 max-lg:py-1 px-4 max-md:px-2 text-[.8em]  font-bold max-md:text-[.8em] rounded text-[#0C4521]'>
                                Qty: {meal.quantity}
                                </p>
                             

                            </article>
                        </div>

                        <div className='border-l border-r border-[#52c234] px-6 max-lg:px-2 flex gap-5  max-lg:gap-3 max-md:gap-2 items-center'>
                            <p className='text-[#52c234] font-[1.1em]'>{currencyFormatter.format(meal.idMeal)}</p>
                        </div>
                    </section>
                ))
            }
        </div>
    )
}

export default OrderedItems
