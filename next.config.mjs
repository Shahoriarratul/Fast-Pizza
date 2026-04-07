/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'react-fast-pizza-api.onrender.com',
            },
            {
                protocol: 'https',
                hostname: 'dclaevazetcjjkrzczpc.supabase.co',
            },
        ],
    },
}

export default nextConfig
