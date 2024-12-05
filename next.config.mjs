/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		APP_ENV: process.env.APP_ENV || 'development',
		APP_URL: process.env.APP_URL,
		APP_DOMAIN: process.env.APP_DOMAIN || 'localhost',
		SERVER_URL: process.env.SERVER_URL || 'http://localhost:5000'
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com'
			}
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${process.env.SERVER_URL}/uploads/:path*`
			}
		]
	}
}

export default nextConfig
