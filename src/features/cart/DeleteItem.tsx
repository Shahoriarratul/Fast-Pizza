'use client'

import Button from '../../ui/Button'
import { deleteItem } from './cartSlice'
import { useAppDispatch } from '../../hooks'

type DeleteItemProps = {
    pizzaId: number
}

function DeleteItem({ pizzaId }: DeleteItemProps) {
    const dispatch = useAppDispatch()

    return (
        <div>
            <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
                Delete
            </Button>
        </div>
    )
}

export default DeleteItem
