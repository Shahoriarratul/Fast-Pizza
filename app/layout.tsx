import type { Metadata } from 'next'
import './globals.css'
import AppLayout from '../src/ui/AppLayout'
import Providers from './providers'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Fast Pizza Co.',
    description: 'Fast Pizza ordering app',
}

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <AppLayout>{children}</AppLayout>
                </Providers>
            </body>
        </html>
    )
}
