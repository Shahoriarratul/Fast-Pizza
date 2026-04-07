import type { MenuItemType, OrderType } from '../types'

const API_URL = 'https://react-fast-pizza-api.onrender.com/api'

type CreateOrderPayload = {
    customer: string
    phone: string
    address: string
    cart: Array<{
        pizzaId: number
        name: string
        quantity: number
        unitPrice: number
        totalPrice: number
    }>
    priority: boolean
    position: string
}

export async function getMenu(): Promise<MenuItemType[]> {
    const res = await fetch(`${API_URL}/menu`, { cache: 'no-store' })
    if (!res.ok) throw Error('Failed getting menu')

    const { data } = (await res.json()) as { data: MenuItemType[] }
    return data
}

export async function getOrder(id: string): Promise<OrderType> {
    const res = await fetch(`${API_URL}/order/${id}`, { cache: 'no-store' })
    if (!res.ok) throw Error(`Couldn't find order #${id}`)

    const { data } = (await res.json()) as { data: OrderType }
    return data
}

export async function createOrder(newOrder: CreateOrderPayload) {
    try {
        const res = await fetch(`${API_URL}/order`, {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!res.ok) throw Error()
        const { data } = (await res.json()) as { data: { id: string } }
        return data
    } catch {
        throw Error('Failed creating your order')
    }
}

export async function updateOrder(
    id: string,
    updateObj: { priority: boolean }
) {
    try {
        const res = await fetch(`${API_URL}/order/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updateObj),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!res.ok) throw Error()
    } catch {
        throw Error('Failed updating your order')
    }
}