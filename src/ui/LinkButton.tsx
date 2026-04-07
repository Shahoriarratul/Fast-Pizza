'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

type LinkButtonProps = {
    children: ReactNode
    to: string
}

function LinkButton({ children, to }: LinkButtonProps) {
    const router = useRouter()
    const className =
        'text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline'

    if (to === '-1')
        return (
            <button className={className} onClick={() => router.back()}>
                {children}
            </button>
        )

    return (
        <Link href={to} className={className}>
            {children}
        </Link>
    )
}

export default LinkButton
