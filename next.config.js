/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */

const headers = async () => [
  {
    headers: [
      {
        key: 'Access-Control-Allow-Origin',
        value: 'https://mandargranites.com'
      },
      {
        key: 'Permissions-Policy',
        value: 'autoplay=(), camera=(), fullscreen=(), geolocation=(), microphone=()'
      },
      {
        key: 'Referrer-Policy',
        value: 'no-referrer'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        key: 'X-XSS-protection',
        value: '1; mode=block'
      }
    ],
    source: '/(.*)'
  }
];

const rewrites = async () => [
  {
    destination: 'https://cdn.splitbee.io/sb.js',
    source: '/sb.js'
  },
  {
    destination: 'https://hive.splitbee.io/:slug',
    source: '/sb-api/:slug'
  }
];

module.exports = {
  headers,
  reactStrictMode: true,
  rewrites
};
