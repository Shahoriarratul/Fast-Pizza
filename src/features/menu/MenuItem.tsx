'use client'

import Image from 'next/image'
import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'
import { addItem, getCurrentQuantityByID } from '../cart/cartSlice'
import DeleteItem from '../cart/DeleteItem'
import UpdateItemQuantity from '../cart/UpdateItemQuantity'
import { useAppDispatch, useAppSelector } from '../../hooks'
import type { MenuItemType } from '../../types'

type MenuItemProps = {
    pizza: MenuItemType
}

function MenuItem({ pizza }: MenuItemProps) {
    const dispatch = useAppDispatch()
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
    const currentQuantity = useAppSelector(getCurrentQuantityByID(id))

    const isInCart = currentQuantity > 0

    function handleAddtoCart() {
        const newItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice,
        }
        dispatch(addItem(newItem))
    }

    return (
        <li className="flex gap-4 py-4">
            <Image
                src={imageUrl}
                alt={name}
                width={96}
                height={96}
                className={`h-24 w-24 rounded-2xl object-cover shadow-md ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-medium text-stone-900">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3">
                    {!soldOut ? (
                        <p className="text-sm font-medium text-stone-700">
                            {formatCurrency(unitPrice)}
                        </p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}
                    {isInCart && (
                        <div className="flex items-center gap-3 sm:gap-8">
                            <UpdateItemQuantity
                                pizzaId={id}
                                currentQuantity={currentQuantity}
                            />
                            <DeleteItem pizzaId={id} />
                        </div>
                    )}
                    {!soldOut && !isInCart && (
                        <Button type="small" onClick={handleAddtoCart}>
                            Add to cart
                        </Button>
                    )}
                </div>
            </div>
        </li>
    )
}

export default MenuItem
