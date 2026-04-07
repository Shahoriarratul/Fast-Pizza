import Order from '../../../src/features/order/Order'
import { getOrder } from '../../../src/services/apiRestaurant'

type OrderPageProps = {
    params: Promise<{
        orderId: string
    }>
}

export default async function OrderPage({ params }: OrderPageProps) {
    const { orderId } = await params
    const order = await getOrder(orderId)
    return <Order order={order} />
}
