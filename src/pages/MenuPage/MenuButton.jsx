import { GiRoastChicken } from "react-icons/gi";
import { LuBeef } from "react-icons/lu";
import { GiHotMeal } from "react-icons/gi";
import { LuDessert } from "react-icons/lu";
import { GiSadCrab } from "react-icons/gi";
import { useContext } from "react";
import CartContext from "../../store/ButtonContext";

function MenuButton() {
    const { handleShowChicken, handleShowBeef, handleShowPasta, handleShowDessert, handleShowSeaFood } = useContext(CartContext)
    const { chicken, beef, pasta, dessert, seafood } = useContext(CartContext)
    return (
        <div className=" w-[100%] flex gap-3 items-center justify-center overflow-auto scrollbar-hide max-md:pl-50 px-2 pb-15 max-md:pb-0">
            <button
                onClick={handleShowChicken}
                className="flex items-center gap-1 text-[1em] px-3 py-1 rounded-full cursor-pointer bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white"
            >
                <span className={`text-[1.3em] ${chicken && 'text-white'}`}><GiRoastChicken /></span>
                <span className="text-black/80">Chicken</span>
            </button>

            <button
                className="flex items-center gap-1 text-[1em] px-3 py-1 rounded-full cursor-pointer bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white"
                onClick={handleShowBeef}
            >
                <span className={`text-[1.3em] ${beef && 'text-white'}`}><LuBeef /></span>
                <span className="text-black/80">Beef</span>
            </button>

            <button
                className="flex items-center gap-1 text-[1em] px-3 py-1 rounded-full cursor-pointer bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white"
                onClick={handleShowPasta}
            >
                <span  className={`text-[1.3em] ${pasta && 'text-white'}`}><GiHotMeal /></span>
                <span className="text-black/80">Pasta</span>
            </button>

            <button
                className="flex items-center gap-1 text-[1em] px-3 py-1 rounded-full cursor-pointer bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white"
                onClick={handleShowDessert}
            >
                <span className={`text-[1.3em] ${dessert && 'text-white'}`}><LuDessert /></span>
                <span className="text-black/80">Dessert</span>
            </button>

            <button
                className="flex items-center gap-1 text-[1em] px-3 py-1 rounded-full cursor-pointer bg-[linear-gradient(to_right,#52c234_0%,#C4FF88_51%,#52c234_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 hover:text-white"
                onClick={handleShowSeaFood}
            >
                <span  className={`text-[1.3em] ${seafood && 'text-white'}`}><GiSadCrab /></span>
                <span className="text-black/80">Seafood</span>
            </button>


        </div>
    )
}

export default MenuButton
