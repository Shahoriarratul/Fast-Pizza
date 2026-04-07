'use client'

import CreateUser from '../features/user/CreateUser'
import Button from './Button'
import { useAppSelector } from '../hooks'

function Home() {
    const username = useAppSelector((state) => state.user.username)

    return (
        <div className="relative overflow-hidden px-4 py-10 text-center sm:px-6 sm:py-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.2),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(244,114,182,0.14),_transparent_20%)]" />

            <div className="mx-auto max-w-2xl rounded-[2rem] border border-amber-300/30 bg-stone-950/80 px-6 py-10 text-stone-100 shadow-2xl sm:px-10 sm:py-14">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                    Hand-crafted for hungry people
                </p>
                <h1 className="mb-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                    The best pizza,
                    <br />
                    <span className="text-amber-300">
                        straight from oven to door.
                    </span>
                </h1>
                <p className="mx-auto mb-10 max-w-xl text-sm leading-6 text-stone-300 sm:text-base">
                    Order fast, track your pizza, and keep everything in one
                    clean flow. Built for a quick lunch, late-night cravings,
                    and everything between.
                </p>

                {username === '' ? (
                    <CreateUser />
                ) : (
                    <Button to="/menu" type="primary">
                        Continue ordering, {username}
                    </Button>
                )}
            </div>
        </div>
    )
}

export default Home
