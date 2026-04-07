import { formatCurrency } from '../../utils/helpers'
import DeleteItem from './DeleteItem'
import UpdateItemQuantity from './UpdateItemQuantity'
import { getCurrentQuantityByID } from './cartSlice'
import { useAppSelector } from '../../hooks'
import type { CartItem as CartItemType } from '../../types'

type CartItemProps = {
    item: CartItemType
}

function CartItem({ item }: CartItemProps) {
    const { pizzaId, name, quantity, totalPrice } = item
    const currentQuantity = useAppSelector(getCurrentQuantityByID(pizzaId))

    return (
        <li className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium text-stone-800">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between gap-4 sm:gap-6">
                <p className="text-sm font-bold text-stone-900">
                    {formatCurrency(totalPrice)}
                </p>
                <UpdateItemQuantity
                    pizzaId={pizzaId}
                    currentQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
