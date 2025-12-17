/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/docdashboard',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
