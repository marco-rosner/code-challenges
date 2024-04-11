'use client'

import { useState } from "react"

const INITIAL_CART = [
    { id: 1, name: 'Banana', price: 0.50, quantity: 1 },
    { id: 2, name: 'Avocado', price: 3.00, quantity: 2 },
]

export const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState(INITIAL_CART)

    return (
        <>

        </>
    )
}