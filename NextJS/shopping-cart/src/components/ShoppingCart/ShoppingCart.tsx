'use client'

import { checkCode } from "@/app/actions"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

const INITIAL_CART = [
    { id: 1, name: 'Banana', price: 0.50, quantity: 1 },
    { id: 2, name: 'Avocado', price: 3.00, quantity: 2 },
]

export const ShoppingCart = () => {
    const [applied, formAction] = useFormState(checkCode, { bool: false, msg: 'n/a' })
    const [cartItems, setCartItems] = useState(INITIAL_CART)
    const [modalOpen, setModalOpen] = useState(false)

    const updateQuantity = (itemId: number, newQuantity: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            ).filter((item) => item.quantity > 0))
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const addition = applied.bool
                ? (Math.floor(item.quantity / 2) + item.quantity % 2) * item.price
                : item.price * item.quantity

            return total + addition
        }, 0)
    }

    useEffect(() => {
        if (applied.msg === 'n/a') return

        setModalOpen(true)
        setTimeout(() => setModalOpen(false), 1500)
    }, [applied])

    return (
        <div className="flex flex-col space-y-3">
            <div className="text-xl">Shopping Cart</div>
            {cartItems.map((item) => (
                <div key={item.id} className="flex">
                    <p className="w-64">{item.name} - ${item.price}</p>
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-10 mx-4" />
                </div>
            ))}
            <p>Total: ${calculateTotal()}</p>
            <div className="pt-10">
                {applied.bool
                    ? (<p>Promo applied</p>)
                    : (
                        <form action={formAction}>
                            <input type="text" name="promocode" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded mx-2" type="submit">Submit</button>
                        </form>
                    )}
            </div>
            {modalOpen && (
                <div className="absolute flex justify-center items-center z-1 w-64 rounded outline outline-3 bg-blue-300 self-center text-center">
                    <p>{applied.msg}</p>
                </div>
            )}
        </div>
    )
}