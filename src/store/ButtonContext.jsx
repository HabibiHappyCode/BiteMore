import { createContext, useState } from "react";

const ButtonContext = createContext({
    showChicken: false,
    showBeef: false,
    showpasta: false,
    showDessert: false,
    showSeafood: false,
    handleShowChicken: () => { },
    handleShowBeef: () => { },
    handleShowPasta: () => { },
    handleShowDessert: () => { },
    handleShowSeaFood: () => { }
})

export const ButtonContextProvider = ({ children }) => {
    const [showChicken, setShowChicken] = useState(true);
    const [showBeef, setShowBeef] = useState(false);
    const [showpasta, setShowpasta] = useState(false);
    const [showDessert, setShowDessert] = useState(false);
    const [showSeafood, setShowSeafood] = useState(false);

    const handleShowChicken = () => {
        setShowChicken(true)
        setShowBeef(false)
        setShowpasta(false)
        setShowDessert(false)
        setShowSeafood(false)
    }

    const handleShowBeef = () => {
        setShowChicken(false)
        setShowBeef(true)
        setShowpasta(false)
        setShowDessert(false)
        setShowSeafood(false)
    }

    const handleShowPasta = () => {
        setShowChicken(false)
        setShowBeef(false)
        setShowpasta(true)
        setShowDessert(false)
        setShowSeafood(false)
    }

    const handleShowDessert = () => {
        setShowChicken(false)
        setShowBeef(false)
        setShowpasta(false)
        setShowDessert(true)
        setShowSeafood(false)
    }

    const handleShowSeaFood = () => {
        setShowChicken(false)
        setShowBeef(false)
        setShowpasta(false)
        setShowDessert(false)
        setShowSeafood(true)
    }

    const ctxContext = {
        chicken: showChicken,
        beef: showBeef,
        pasta: showpasta,
        dessert: showDessert,
        seafood: showSeafood,
        handleShowChicken,
        handleShowBeef,
        handleShowPasta,
        handleShowDessert,
        handleShowSeaFood
    }

    return (
        <ButtonContext.Provider value={ctxContext}>
            {children}
        </ButtonContext.Provider>
    )
}

export default ButtonContext