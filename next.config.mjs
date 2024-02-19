/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'icon-library.com',
                pathname: '**'
            },
        ],
    },
};

export default nextConfig;
