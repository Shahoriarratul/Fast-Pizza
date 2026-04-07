import Menu from '../../src/features/menu/Menu'
import { getMenu } from '../../src/services/apiRestaurant'

export default async function MenuPage() {
    const menu = await getMenu()
    return <Menu menu={menu} />
}
