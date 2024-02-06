import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { DecreaseItemQuantity, increaseItemQuantitey } from './cartSlice'

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(DecreaseItemQuantity(pizzaId))}
            >
                -
            </Button>
            <span className="txt-sm font-semibold">{currentQuantity}</span>
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
