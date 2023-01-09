// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withAxiom } = require('next-axiom')

/** @type {import('next').NextConfig} */
const nextConfig = withAxiom({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig
