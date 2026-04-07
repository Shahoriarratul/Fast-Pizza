'use client'

import LinkButton from '../../ui/LinkButton'
import Button from '../../ui/Button'
import CartItem from './CartItem'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'
import { useAppDispatch, useAppSelector } from '../../hooks'

function Cart() {
    const username = useAppSelector((state) => state.user.username)
    const cart = useAppSelector(getCart)
    const dispatch = useAppDispatch()

    if (!cart.length) return <EmptyCart />

    return (
        <div className="px-4 py-6 sm:px-6">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-6 text-2xl font-semibold text-stone-900">
                Your cart, {username}
            </h2>
            <ul className="mt-4 divide-y divide-stone-200 border-b border-stone-200">
                {cart.map((item) => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/order/new" type="primary">
                    Order pizzas
                </Button>
                <Button type="secondary" onClick={() => dispatch(clearCart())}>
                    Clear cart
                </Button>
            </div>
        </div>
    )
}

export default Cart
