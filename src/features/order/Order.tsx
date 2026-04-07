'use client'

import { useEffect, useState } from 'react'
import { getMenu } from '../../services/apiRestaurant'
import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
} from '../../utils/helpers'
import OrderItem from './OrderItem'
import UpdateOrder from './UpdateOrder'
import type { MenuItemType, OrderType } from '../../types'

type OrderProps = {
    order: OrderType
}

function Order({ order }: OrderProps) {
    const [menu, setMenu] = useState<MenuItemType[]>([])
    const [isLoadingIngredients, setIsLoadingIngredients] = useState(true)

    useEffect(function () {
        async function loadMenu() {
            try {
                const menuData = await getMenu()
                setMenu(menuData)
            } catch {
                setMenu([])
            } finally {
                setIsLoadingIngredients(false)
            }
        }

        loadMenu()
    }, [])

    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart,
    } = order
    const deliveryIn = calcMinutesLeft(estimatedDelivery)

    return (
        <div className="space-y-8 px-4 py-6 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-2xl font-semibold text-stone-900">
                    Order #{id}
                </h2>

                <div className="space-x-2">
                    {priority && (
                        <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
                            Priority
                        </span>
                    )}
                    <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-50">
                        {status} order
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-stone-100 px-6 py-5">
                <p className="font-medium text-stone-800">
                    {deliveryIn >= 0
                        ? `Only ${deliveryIn} minutes left 😃`
                        : 'Order should have arrived'}
                </p>
                <p className="text-xs text-stone-500">
                    (Estimated delivery: {formatDate(estimatedDelivery)})
                </p>
            </div>

            <ul className="divide-y divide-stone-200 border-b border-t border-stone-200">
                {cart.map((item) => (
                    <OrderItem
                        item={item}
                        key={item.pizzaId}
                        isLoadingIngredients={isLoadingIngredients}
                        ingredients={
                            menu.find((el) => el.id === item.pizzaId)
                                ?.ingredients ?? []
                        }
                    />
                ))}
            </ul>

            <div className="space-y-2 rounded-2xl bg-stone-100 px-6 py-5">
                <p className="text-sm font-medium text-stone-600">
                    Price pizza: {formatCurrency(orderPrice)}
                </p>
                {priority && (
                    <p className="text-sm font-medium text-stone-600">
                        Price priority: {formatCurrency(priorityPrice)}
                    </p>
                )}
                <p className="font-bold text-stone-900">
                    To pay on delivery:{' '}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>

            {!priority && <UpdateOrder orderId={id} />}
        </div>
    )
}

export default Order
