import { useContext } from "react"
import CartContext from "../../store/ButtonContext"
import ChickenMeal from "./ChickenMeal"
import BeefMeals from "./BeefMeals"
import PastaMeal from "./PastaMeal"
import DessertMeal from "./DessertMeal"
import SeaFoodMeal from "./SeaFoodMeal"

function MenuItems() {
    const { chicken, beef, pasta, dessert, seafood } = useContext(CartContext)
    return (
        <div>
            {chicken && <ChickenMeal />}
            {beef && <BeefMeals />}
            {pasta && <PastaMeal />}
            {dessert && <DessertMeal />}
            {seafood && <SeaFoodMeal />}
        </div>
    )
}

export default MenuItems
