import { useNavigate } from "react-router-dom"
import useAuthStore from "../../store/authContext"
import { currencyFormatter } from "../../util/formatting"

function OrderMeal() {

    const { isLoggedIn } = useAuthStore()

    const navigate = useNavigate()

    const handleSendOrder = () => {


        if (!isLoggedIn) {
            return navigate('/auth')
        } else {
            window.alert('your order has been place')
            navigate('/')
        }


    }
    const selectedMeal = JSON.parse(localStorage.getItem('orderNowDetails'))
    const meal = selectedMeal.selectedMeal
    return (
        <div className=" shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-10  max-md:p-4 rounded-xl mt-8">
            <h1 className="text-[1.3em] text-[#0C4521] font-medium  border-b-2 border-[#BADB19] pb-2">Order Details</h1>
            {
                meal?.map((meal) => (
                    <div key={meal.idMeal}
                        className=" py-5 flex justify-between items-cente"
                    >
                        <div className='w-[17vh] max-md:w-[15vh] h-[15vh] max-md:h-[13vh] rounded-md overflow-hidden'>
                            <img className='w-[100%] h-[100%] object-cover rounded-md' src={meal.strMealThumb} alt="" />
                        </div>

                        <section className="flex flex-col gap-1 items-center">
                            <p className="font-strike text-[#0C4521]">{meal.strMeal}</p>
                            <p className='bg-[#0C4521] text-white px-5  py-1  max-md:text-[.9em] rounded-full'>{meal.strCategory}</p>
                            <p className="text-[#BADB19] font-medium">{currencyFormatter.format(meal.idMeal)}</p>
                        </section>
                    </div>
                ))
            }
            <button onClick={handleSendOrder} className='w-full text-[1em] text-white/80 rounded-full cursor-pointer px-10 py-2 max-md:py-1 bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white'>Confrim Order</button>
        </div>
    )
}

export default OrderMeal
