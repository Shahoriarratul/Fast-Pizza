export type CartItem = {
    pizzaId: number
    name: string
    quantity: number
    unitPrice: number
    totalPrice: number
}

export type MenuItemType = {
    id: number
    name: string
    unitPrice: number
    imageUrl: string
    ingredients: string[]
    soldOut: boolean
}

export type OrderType = {
    id: string
    status: string
    priority: boolean
    priorityPrice: number
    orderPrice: number
    estimatedDelivery: string
    cart: CartItem[]
}

export type AddressPosition = {
    latitude: number
    longitude: number
}