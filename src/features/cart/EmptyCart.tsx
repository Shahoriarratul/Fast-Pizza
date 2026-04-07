import LinkButton from '../../ui/LinkButton'

function EmptyCart() {
    return (
        <div className="px-4 py-10 sm:px-6">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <p className="mt-8 text-lg font-semibold text-stone-800">
                Your cart is still empty. Start adding some pizzas :)
            </p>
        </div>
    )
}

export default EmptyCart
