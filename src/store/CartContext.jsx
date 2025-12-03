import { createContext, useEffect, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearItem: () => { }
});

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.idMeal === action.item.idMeal
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        localStorage.setItem('item', JSON.stringify(updatedItems))

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.idMeal === action.id
        );

        if (existingCartItemIndex === -1) return state;

        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            updatedItems[existingCartItemIndex] = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
        }

        localStorage.setItem('item', JSON.stringify(updatedItems));
        return { ...state, items: updatedItems };
    }

    if (action.type === 'CLEAR_ITEM') {
        return { ...state, items: [] }
    }


    return state;
};

export const CartContextProvider = ({ children }) => {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {
        items: JSON.parse(localStorage.getItem('item')) || []
    });

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(cart.items))
    }, [cart.items])


    const addItem = (item) => {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    };

    const removeItem = (id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    };

    const clearItem = (id) => {
        dispatchCartAction({ type: 'CLEAR_ITEM' });
    };

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearItem,
    };


    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;

CartContext.js
