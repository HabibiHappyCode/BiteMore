import CheckoutForm from './CheckoutForm'
import { RxArrowLeft } from "react-icons/rx";
import { Link, redirect, useNavigate } from "react-router-dom";
import OrderedItems from './OrderedItems';
import Payment from './Payment';
import useAuthStore from '../../store/authContext';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

function Checkout() {
    const { isLoggedIn } = useAuthStore();
    const { clearItem } = useContext(CartContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();


        if (!isLoggedIn) {
            return navigate('/auth')
        }

        window.alert('your order has been place')
        clearItem()


    }
    return (
        <div className='py-30 max-lg:mt-15 max-md:w-[100%]  px-20 max-md:pb-20 max-lg:px-3 max-lg:py-10'>
            <h1 className='flex items-center text-[1.6em] font-medium '>Checkout  </h1>
            <form onSubmit={handleSubmit}>
                <CheckoutForm />
                <OrderedItems />
                <Payment />
            </form>
        </div>
    )
}

export default Checkout
