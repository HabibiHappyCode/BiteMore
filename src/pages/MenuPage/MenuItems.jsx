import { useContext } from "react"
import CartContext from "../../store/ButtonContext"
import ChickenMeal from "./ChickenMeal"

function MenuItems() {
    const { chicken, beef, pasta, dessert, seafood } = useContext(CartContext)
    return (
        <div>
            {chicken && <ChickenMeal />}
        </div>
    )
}

export default MenuItems
