'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function SearchOrder() {
    const [query, setQuery] = useState('')
    const router = useRouter()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!query) return
        router.push(`/order/${query}`)
        setQuery('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="search order #"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-28 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-stone-100 transition-all duration-300 placeholder:text-stone-300 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
            />
        </form>
    )
}

export default SearchOrder
