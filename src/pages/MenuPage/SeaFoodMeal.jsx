import { useQuery } from '@tanstack/react-query'
import { clampText } from '../../util/clampText'
import { currencyFormatter } from '../../util/formatting'
import ErrorBlock from '../../Ui/ErrorBlock'
import { Link } from 'react-router-dom'
import SkeletonBlock from '../../Ui/SkeletonBlock'
import { fetchingSeafood } from '../../lib/seafoodData'

function SeaFoodMeal() {

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['chickens'],
        queryFn: fetchingSeafood
    })

    const fillNum = new Array(8).fill()

    return (
       <div className='flex flex-wrap gap-4  w-[100%]  p-17 py-5 max-lg:px-3 max-lg:py-10'>
            {isLoading ?
               fillNum.map((___,index) => <SkeletonBlock key={index} />)

                :
                <>
                    {data?.map((meal) => (
                        <div key={meal.idMeal} className="group bg-[#FFFFFF] w-[24%] max-lg:w-[32%] max-md:w-[48%] max-sm:w-[47.5%] rounded-xl overflow-hidden ease-in-out duration-200 hover:translate-y-[-10px]">
                            <div className="w-[100%] h-[38vh]  max-sm:h-[25vh] ">
                                <img className="object-cover w-[100%] h-[100%] ease-in-out duration-200 group-hover:scale-110" src={meal.strMealThumb} alt="" />
                            </div>

                            <article className="px-5 max-sm:px-2 py-8 max-sm:py-3 ">
                                <h2 className="font-strike text-[1.2em]  max-sm:text-[1em] text-center text-[#0D4722] mb-3  max-sm:mb-1">{meal.strMeal}</h2>
                                <p className="font-light text-black/90 text-[.8em] text-start">{clampText(meal.strInstructions, 40)}</p>

                                <main className='mt-5 max-md:mt-2 flex justify-between max-sm:justify-center items-center max-sm:flex-wrap max-sm:gap-2'>
                                    <p>{currencyFormatter.format(meal.idMeal)}</p>
                                    <button className=' text-[.7em] text-white/80 rounded-full cursor-pointer px-2 py-1 bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white max-sm:w-full'><Link to={`/menu/${meal.idMeal}`}>view details</Link></button>
                                </main>
                            </article>
                        </div>
                    ))}
                </>
            }
            {error &&
                <ErrorBlock />
            }
        </div>
    )
}

export default SeaFoodMeal
