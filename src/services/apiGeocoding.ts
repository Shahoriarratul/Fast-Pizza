import type { AddressPosition } from '../types'

type ReverseGeocodeResponse = {
    locality?: string
    city?: string
    postcode?: string
    countryName?: string
}

export async function getAddress({ latitude, longitude }: AddressPosition) {
    const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    )
    if (!res.ok) throw Error('Failed getting address')

    const data = (await res.json()) as ReverseGeocodeResponse
    return data
}