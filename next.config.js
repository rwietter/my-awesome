/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css');

module.exports = withCSS({});

const nextConfig = {
  reactStrictMode: true,
  env: {
    SECRET_JWT_KEY: process.env.SECRET_JWT_KEY,
    REDIS_URL: process.env.REDIS_URL,
  },
};

module.exports = nextConfig;
