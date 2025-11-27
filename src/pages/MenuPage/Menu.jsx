import MenuButton from "./MenuButton"
import MenuHeader from "./MenuHeader"
import MenuItems from "./MenuItems"
// import MenuMeal from "./MenuMeal"


function Menu() {
    return (
        <div className="bg-[#121212]">
           <MenuHeader />
           <MenuButton />
           <MenuItems />
        </div>
    )
}

export default Menu
