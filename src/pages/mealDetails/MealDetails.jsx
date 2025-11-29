import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom'
import { fetchingDetailsData } from '../../lib/detailsData';
import ErrorBlock from '../../Ui/ErrorBlock';
import { RxArrowLeft } from "react-icons/rx";
import { currencyFormatter } from '../../util/formatting';
import { GrFormNextLink } from "react-icons/gr";
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

function MealDetails() {
    const params = useParams();
    const idMeal = params.idMeal;

    const { items, addItem } = useContext(CartContext);

    const { data, isLoading, error } = useQuery({
        queryKey: ['meals_details'],
        queryFn: () => fetchingDetailsData(idMeal)
    })

    const isInCart = items.some((i) => i.id === idMeal);

    const handleAddToCart = (meal) => {
        if (!isInCart) addItem(meal);
    }
    return (
        <div className='py-30 max-lg:mt-15 max-md:w-[100%]  px-20 max-md:pb-20 max-lg:px-3 max-lg:py-10'>
            {error && <ErrorBlock />}
            {
                isLoading ?
                    <p>the data is being loaded </p>
                    :
                    <>
                        <ul className='flex items-center gap-3 text-[#0C4521] text-[1em]  max-sm:text-[.9em] font-bold mb-5'>
                            <li><Link to='/menu'>Menu</Link></li>
                            <p><GrFormNextLink /></p>
                            <li className='text-[#BADB19]'>Details</li>
                        </ul>
                        {
                            data.map((meal) => (
                                <div
                                    className='flex justify-between max-md:flex-wrap max-md:gap-10 '
                                    key={meal.idMeal}>
                                    <div className='w-[45%] max-md:w-[100%] h-[70vh] max-md:h-[100%] overflow-hidden rounded-[1.5em] max-md:rounded-xl  shadow-[0_4px_20px_rgba(0,0,0,0.2)]' >
                                        <img className='w-[100%] h-[100%] object-cover ' src={meal.strMealThumb} alt={meal.strMeal} />
                                    </div>
                                    <div className='w-[52%] max-md:w-[100%] shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-[1.5em] py-10  max-md:py-5 px-8  max-md:px-3 flex flex-col gap-4'>
                                        <main className='flex items-center gap-4 text-[#0C4521]  max-md:justify-between'>
                                            <span className='text-[1.8em]  max-md:text-[1.5em] cursor-pointer'><Link to='/menu'><RxArrowLeft /></Link></span>
                                            <span className='font-strike text-[#1F2937] text-[1.5em]  max-md:text-[1.3em]  max-sm:text-[1.1em]'>{meal.strMeal}</span>
                                            <span className='bg-[#0C4521] text-white px-5  py-1  max-md:text-[.9em] rounded-full'>{meal.strCategory}</span>
                                        </main>

                                        <main className='flex justify-between items-center text-[#0C4521]'>
                                            <p className='font-bold text-[#0C4521] text-[1.3em]  max-md:text-[.9em]'> {currencyFormatter.format(meal.idMeal)}</p>
                                            <p >Origin <span className='bg-[#0C4521] text-white px-5 py-1  max-md:text-[.8em] rounded-full'>{meal.strArea}</span></p>
                                        </main>

                                        <main className='flex flex-col gap-5'>
                                            <h2 className='bg-[#0C4521] w-[100%] text-center text-white px-5 py-1  max-md:text-[.9em] rounded-full'>Instructions</h2>
                                            <p className='text-[1em]  max-md:text-[.9em] text-black/60'>{meal.strInstructions}</p>
                                        </main>

                                        <section className='flex justify-between '>
                                            <main className='flex flex-col gap-5 '>
                                                <h2 className='bg-[#0C4521]  w-[100%] text-center text-white px-5 py-1 rounded-full  max-md:text-[.9em]  max-sm:text-[.8em]'>Ingredient</h2>
                                                <ul className='text-[1em]  max-md:text-[.9em] text-black/60'>
                                                    {(meal.strIngredient1 === "") ? null : <li>{meal.strIngredient1}</li>}
                                                    {(meal.strIngredient2 === "") ? null : <li>{meal.strIngredient2}</li>}
                                                    {(meal.strIngredient3 === "") ? null : <li>{meal.strIngredient3}</li>}
                                                    {(meal.strIngredient4 === "") ? null : <li>{meal.strIngredient4}</li>}
                                                    {(meal.strIngredient5 === "") ? null : <li>{meal.strIngredient5}</li>}
                                                    {(meal.strIngredient6 === "") ? null : <li>{meal.strIngredient6}</li>}
                                                    {(meal.strIngredient7 === "") ? null : <li>{meal.strIngredient7}</li>}
                                                    {(meal.strIngredient8 === "") ? null : <li>{meal.strIngredient8}</li>}
                                                    {(meal.strIngredient9 === "") ? null : <li>{meal.strIngredient9}</li>}
                                                    {(meal.strIngredient10 === "") ? null : <li>{meal.strIngredient10}</li>}
                                                    {(meal.strIngredient11 === "") ? null : <li>{meal.strIngredient11}</li>}
                                                    {(meal.strIngredient12 === "") ? null : <li>{meal.strIngredient12}</li>}
                                                    {(meal.strIngredient13 === "") ? null : <li>{meal.strIngredient13}</li>}
                                                    {(meal.strIngredient14 === "") ? null : <li>{meal.strIngredient14}</li>}
                                                    {(meal.strIngredient15 === "") ? null : <li>{meal.strIngredient15}</li>}
                                                    {(meal.strIngredient16 === "") ? null : <li>{meal.strIngredient16}</li>}
                                                    {(meal.strIngredient17 === "") ? null : <li>{meal.strIngredient17}</li>}
                                                    {(meal.strIngredient18 === "") ? null : <li>{meal.strIngredient18}</li>}
                                                    {(meal.strIngredient19 === "") ? null : <li>{meal.strIngredient19}</li>}
                                                    {(meal.strIngredient20 === "") ? null : <li>{meal.strIngredient20}</li>}
                                                </ul>
                                            </main>

                                            <main className='flex flex-col gap-5'>
                                                <h2 className='bg-[#0C4521] w-[100%] text-center text-white px-5 py-1 rounded-full  max-md:text-[.9em]  max-sm:text-[.8em]'> Measurements</h2>
                                                <ul className='text-[1em]  max-md:text-[.9em] text-black/60'>
                                                    {(meal.strMeasure1 === "") ? null : <li>{meal.strMeasure1}</li>}
                                                    {(meal.strMeasure2 === "") ? null : <li>{meal.strMeasure2}</li>}
                                                    {(meal.strMeasure3 === "") ? null : <li>{meal.strMeasure3}</li>}
                                                    {(meal.strMeasure4 === "") ? null : <li>{meal.strMeasure4}</li>}
                                                    {(meal.strMeasure5 === "") ? null : <li>{meal.strMeasure5}</li>}
                                                    {(meal.strMeasure6 === "") ? null : <li>{meal.strMeasure6}</li>}
                                                    {(meal.strMeasure7 === "") ? null : <li>{meal.strMeasure7}</li>}
                                                    {(meal.strMeasure8 === "") ? null : <li>{meal.strMeasure8}</li>}
                                                    {(meal.strMeasure9 === "") ? null : <li>{meal.strMeasure9}</li>}
                                                    {(meal.strMeasure10 === "") ? null : <li>{meal.strMeasure10}</li>}
                                                    {(meal.strMeasure11 === "") ? null : <li>{meal.strMeasure11}</li>}
                                                    {(meal.strMeasure12 === "") ? null : <li>{meal.strMeasure12}</li>}
                                                    {(meal.strMeasure13 === "") ? null : <li>{meal.strMeasure13}</li>}
                                                    {(meal.strMeasure14 === "") ? null : <li>{meal.strMeasure14}</li>}
                                                    {(meal.strMeasure15 === "") ? null : <li>{meal.strMeasure15}</li>}
                                                    {(meal.strMeasure16 === "") ? null : <li>{meal.strMeasure16}</li>}
                                                    {(meal.strMeasure17 === "") ? null : <li>{meal.strMeasure17}</li>}
                                                    {(meal.strMeasure18 === "") ? null : <li>{meal.strMeasure18}</li>}
                                                    {(meal.strMeasure19 === "") ? null : <li>{meal.strMeasure19}</li>}
                                                    {(meal.strMeasure20 === "") ? null : <li>{meal.strMeasure20}</li>}
                                                </ul>
                                            </main>
                                        </section>

                                        <main className='underline text-[#0C4521] text-center  max-md:text-[.9em]'>
                                            <a href={`${meal.strYoutube}`}>How to prepare {meal.strMeal}</a>
                                        </main>

                                        <section className='flex items-center justify-between  gap-3 my-2 '>
                                            <button
                                                disabled={meal.quantity >= 1}
                                                onClick={() => handleAddToCart(meal)}
                                                className='text-[1em] bg-[#ECFDF5] text-[#0C4521] border-1 border-[#0C4521] px-3 py-1 rounded cursor-pointer'
                                            >
                                                {isInCart ? 'Added to cart' : ' Add to Cart'}
                                            </button>
                                            <button className='text-[1em] bg-[#0C4521] text-white border-1 border-[#0C4521] px-3 py-1 rounded cursor-pointer'>Order Now</button>
                                        </section>
                                    </div>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default MealDetails
