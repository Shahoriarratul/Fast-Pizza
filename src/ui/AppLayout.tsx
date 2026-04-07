import CartOverview from '../features/cart/CartOverview'
import Header from './Header'
import type { ReactNode } from 'react'

type AppLayoutProps = {
    children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <Header />

            <div className="overflow-y-auto">
                <main className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="rounded-[2rem] border border-white/10 bg-white/95 text-stone-900 shadow-[0_30px_100px_rgba(15,15,15,0.35)] backdrop-blur-sm">
                        {children}
                    </div>
                </main>
            </div>

            <CartOverview />
        </div>
    )
}

export default AppLayout
