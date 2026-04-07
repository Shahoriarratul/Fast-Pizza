import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { CartItem } from '../../types'

type CartState = {
    cart: CartItem[]
}

const initialState: CartState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            state.cart.push(action.payload)
        },
        deleteItem(state, action: PayloadAction<number>) {
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload
            )
        },
        increaseItemQuantitey(state, action: PayloadAction<number>) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )
            if (!item) return
            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        DecreaseItemQuantity(state, action: PayloadAction<number>) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )
            if (!item) return
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
            if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
        },
        clearCart(state) {
            state.cart = []
        },
    },
})

export const {
    addItem,
    deleteItem,
    increaseItemQuantitey,
    DecreaseItemQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state: RootState) => state.cart.cart

export const getTotalCartQuantity = (state: RootState) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state: RootState) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getCurrentQuantityByID = (id: number) => (state: RootState) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0