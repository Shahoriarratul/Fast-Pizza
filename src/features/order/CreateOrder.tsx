'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createOrder } from '../../services/apiRestaurant'
import Button from '../../ui/Button'
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice'
import EmptyCart from '../cart/EmptyCart'
import { formatCurrency } from '../../utils/helpers'
import { fetchAddress } from '../user/userSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

const isValidPhone = (str: string) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    )

function CreateOrder() {
    const {
        username,
        status: addressStatus,
        position,
        address,
        error: errorAddress,
    } = useAppSelector((state) => state.user)
    const isLoadingAddress = addressStatus === 'loading'

    const [withPriority, setWithPriority] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formErrors, setFormErrors] = useState<{ phone?: string }>({})
    const router = useRouter()
    const cart = useAppSelector(getCart)
    const dispatch = useAppDispatch()

    const totalCartPrice = useAppSelector(getTotalCartPrice)
    const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0
    const totalPrice = totalCartPrice + priorityPrice

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries()) as Record<
            string,
            string
        >

        if (!isValidPhone(data.phone ?? '')) {
            setFormErrors({
                phone: 'Please give us your correct phone number. We might need it to contact you.',
            })
            setIsSubmitting(false)
            return
        }

        setFormErrors({})

        try {
            const newOrder = await createOrder({
                customer: data.customer ?? '',
                phone: data.phone ?? '',
                address: data.address ?? '',
                cart,
                priority: withPriority,
                position:
                    position.latitude && position.longitude
                        ? `${position.latitude},${position.longitude}`
                        : '',
            })

            dispatch(clearCart())
            router.push(`/order/${newOrder.id}`)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!cart.length) return <EmptyCart />

    return (
        <div className="px-4 py-6 sm:px-6">
            <h2 className="mb-8 text-2xl font-semibold text-stone-900">
                Ready to order? Let&apos;s go!
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name</label>
                    <input
                        className="input grow"
                        type="text"
                        name="customer"
                        defaultValue={username}
                        required
                    />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Phone number</label>
                    <div className="grow">
                        <input
                            className="input w-full"
                            type="tel"
                            name="phone"
                            required
                        />
                        {formErrors?.phone && (
                            <p className="mt-3 rounded-md bg-red-100 px-2 py-2 text-xs text-red-700">
                                {formErrors.phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input
                            className="input w-full"
                            type="text"
                            name="address"
                            disabled={isLoadingAddress}
                            defaultValue={address}
                            required
                        />
                        {addressStatus === 'error' && (
                            <p className="mt-3 rounded-md bg-red-100 px-2 py-2 text-xs text-red-700">
                                {errorAddress}
                            </p>
                        )}
                    </div>
                    {!position.latitude && !position.longitude && (
                        <span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
                            <Button
                                disabled={isLoadingAddress}
                                type="small"
                                onClick={() => {
                                    dispatch(fetchAddress())
                                }}
                            >
                                get position
                            </Button>
                        </span>
                    )}
                </div>

                <div className="mb-12 flex items-center gap-5">
                    <input
                        className="h-6 w-6 accent-amber-400 focus:ring focus:ring-amber-400 focus:ring-offset-2"
                        type="checkbox"
                        name="priority"
                        id="priority"
                        checked={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label
                        htmlFor="priority"
                        className="font-medium text-stone-800"
                    >
                        Want to give your order priority?
                    </label>
                </div>

                <div>
                    <Button
                        disabled={isSubmitting || isLoadingAddress}
                        type="primary"
                    >
                        {isSubmitting
                            ? 'Placing Order...'
                            : `Order now ${formatCurrency(totalPrice)}`}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreateOrder
