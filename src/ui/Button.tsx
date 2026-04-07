'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'small' | 'round' | 'secondary'

type ButtonProps = {
    children: ReactNode
    disabled?: boolean
    to?: string
    type: ButtonVariant
    onClick?: () => void
    htmlType?: 'button' | 'submit' | 'reset'
}

function Button({
    children,
    disabled,
    to,
    type,
    onClick,
    htmlType,
}: ButtonProps) {
    const base =
        'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'
    const styles: Record<ButtonVariant, string> = {
        primary:
            base +
            ' bg-amber-400 px-5 py-3 text-stone-950 shadow-[0_12px_30px_rgba(251,191,36,0.28)] hover:bg-amber-300 focus:ring-amber-300',
        small:
            base +
            ' bg-amber-400 px-4 py-2 text-xs text-stone-950 shadow-sm hover:bg-amber-300 focus:ring-amber-300',
        round:
            base +
            ' h-9 w-9 bg-stone-200 text-stone-900 shadow-sm hover:bg-stone-300 focus:ring-stone-300',
        secondary:
            base +
            ' border border-stone-300 bg-white px-4 py-2.5 text-stone-600 hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900 focus:ring-stone-200',
    }

    if (to)
        return (
            <Link href={to} className={styles[type]}>
                {children}
            </Link>
        )

    if (onClick)
        return (
            <button
                type={htmlType ?? 'button'}
                onClick={onClick}
                disabled={disabled}
                className={styles[type]}
            >
                {children}
            </button>
        )

    return (
        <button
            type={htmlType ?? 'submit'}
            disabled={disabled}
            className={styles[type]}
        >
            {children}
        </button>
    )
}

export default Button
