import LinkButton from './LinkButton'

type ErrorProps = {
    message?: string
}

function Error({ message }: ErrorProps) {
    const fallbackMessage = message ?? 'Something went wrong'

    return (
        <div className="space-y-4 px-4 py-10 text-stone-900">
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="text-stone-600">{fallbackMessage}</p>
            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    )
}

export default Error
