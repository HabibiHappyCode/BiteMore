import { useQuery } from '@tanstack/react-query'
import { fetchingChicken } from '../../lib/chickenData'
import { clampText } from '../../util/clampText'
import { currencyFormatter } from '../../util/formatting'

function ChickenMeal() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['chickens'],
        queryFn: fetchingChicken
    })


    return (
        <div className='flex flex-wrap gap-4 items-center w-[100%]  p-17 py-5 max-lg:px-3 max-lg:py-10'>
            {isLoading && <h1>this is loading your data</h1>}
            {data.map((meal) => (
                <div key={meal.idMeal} className="group bg-[#FFFFFF] w-[24%] max-lg:w-[32%] max-md:w-[48%] max-sm:w-[100%] rounded-xl overflow-hidden ease-in-out duration-200 hover:translate-y-[-10px]">
                    <div className="w-[100%] h-[38vh] ">
                        <img className="object-cover w-[100%] h-[100%] ease-in-out duration-200 group-hover:scale-110" src={meal.strMealThumb} alt="" />
                    </div>

                    <article className="px-5 py-8">
                        <h2 className="font-strike text-[1.2em] text-center text-[#0D4722] mb-3">{meal.strMeal}</h2>
                        <p className="font-light text-black/90 text-[.8em] text-start">{clampText(meal.strInstructions, 40)}</p>

                        <main className='mt-5 flex justify-between items-center'>
                            <p>{currencyFormatter.format(meal.idMeal)}</p>
                            <button className=' text-[.7em] text-white/80 rounded-full cursor-pointer px-2 py-1 bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white'>view details</button>
                        </main>
                    </article>
                </div>
            ))}
        </div>
    )
}

export default ChickenMeal
