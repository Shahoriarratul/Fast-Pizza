'use client'

import Link from 'next/link'
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice'
import { useAppSelector } from '../../hooks'

function CartOverview() {
    const totalCartQuantity = useAppSelector(getTotalCartQuantity)
    const totalCartPrice = useAppSelector(getTotalCartPrice)

    if (!totalCartQuantity) return null

    return (
        <div className="flex items-center justify-between border-t border-white/10 bg-stone-950 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base lg:px-8">
            <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
                <span>{totalCartQuantity} pizzas</span>
                <span>{totalCartPrice} EUR</span>
            </p>
            <Link
                href="/cart"
                className="font-semibold text-amber-300 hover:text-amber-200"
            >
                Open cart &rarr;
            </Link>
        </div>
    )
}

export default CartOverview
