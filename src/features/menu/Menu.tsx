'use client'

import MenuItem from './MenuItem'
import type { MenuItemType } from '../../types'

type MenuProps = {
    menu: MenuItemType[]
}

function Menu({ menu }: MenuProps) {
    return (
        <ul className="divide-y divide-stone-200 px-2">
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </ul>
    )
}

export default Menu
