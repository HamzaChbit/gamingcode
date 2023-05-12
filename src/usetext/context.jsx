import React, { createContext } from 'react'

import { useState } from 'react'
import { PRODUCTS } from '../products'


export const StoreContext = createContext(null)
const getCartId = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}








export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCartId())
  
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] + 1
        }))
    }
    const removeToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] - 1
        }))
    }
    const upToCart = (Amount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Amount }))
    }



    const ContextValue = {
        getCartId, addToCart, removeToCart, cartItems, upToCart, getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={ContextValue} >{props.children}</StoreContext.Provider>
    )
}
