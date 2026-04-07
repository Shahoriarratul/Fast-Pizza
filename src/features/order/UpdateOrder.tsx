'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '../../ui/Button'
import { updateOrder } from '../../services/apiRestaurant'

type UpdateOrderProps = {
    orderId: string
}

function UpdateOrder({ orderId }: UpdateOrderProps) {
    const [isUpdating, setIsUpdating] = useState(false)
    const router = useRouter()

    async function handleMakePriority() {
        setIsUpdating(true)
        try {
            await updateOrder(orderId, { priority: true })
            router.refresh()
        } finally {
            setIsUpdating(false)
        }
    }

    return (
        <div className="text-right">
            <Button
                type="primary"
                disabled={isUpdating}
                onClick={handleMakePriority}
            >
                {isUpdating ? 'Updating...' : 'Make Priority'}
            </Button>
        </div>
    )
}

export default UpdateOrder
