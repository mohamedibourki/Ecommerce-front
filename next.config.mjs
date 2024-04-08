/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                port: '',
                pathname: 'http://localhost:3000/(https://assets.aceternity.com/demos/algochurn.webp)',
            },
        ],
    },
};

export default nextConfig;
