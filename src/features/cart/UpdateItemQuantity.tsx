'use client'

import Button from '../../ui/Button'
import { DecreaseItemQuantity, increaseItemQuantitey } from './cartSlice'
import { useAppDispatch } from '../../hooks'

type UpdateItemQuantityProps = {
    pizzaId: number
    currentQuantity: number
}

function UpdateItemQuantity({
    pizzaId,
    currentQuantity,
}: UpdateItemQuantityProps) {
    const dispatch = useAppDispatch()

    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(DecreaseItemQuantity(pizzaId))}
            >
                -
            </Button>
            <span className="min-w-6 text-center text-sm font-semibold text-stone-800">
                {currentQuantity}
            </span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantitey(pizzaId))}
            >
                +
            </Button>
        </div>
    )
}

export default UpdateItemQuantity
