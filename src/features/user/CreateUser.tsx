'use client'

import { useState } from 'react'
import Button from '../../ui/Button'
import { updateName } from './userSlice'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '../../hooks'

function CreateUser() {
    const [username, setUsername] = useState('')
    const dispatch = useAppDispatch()
    const router = useRouter()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!username) return
        dispatch(updateName(username))
        router.push('/menu')
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
            <p className="mb-4 text-sm text-stone-300 md:text-base">
                Welcome. Start by telling us your name.
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input mb-8 w-full"
            />

            {username !== '' && (
                <div>
                    <Button type="primary">Start ordering</Button>
                </div>
            )}
        </form>
    )
}

export default CreateUser
