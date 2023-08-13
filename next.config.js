/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    basePath: "/assessment",
    assetPrefix: "/assessment/",
    distDir: 'dist'
}


module.exports = nextConfig
