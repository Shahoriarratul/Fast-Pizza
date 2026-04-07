import Link from 'next/link'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/85 px-4 py-3 uppercase text-stone-100 shadow-lg backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
                <Link
                    href="/"
                    className="tracking-[0.35em] text-amber-300 hover:text-amber-200"
                >
                    Fast Pizza Co.
                </Link>
                <SearchOrder />
                <Username />
            </div>
        </header>
    )
}

export default Header
