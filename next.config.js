/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    saída: 'export',
    distDir: 'dist',
    images:{
      unoptimized: true,
    },
};
 
module.exports = nextConfig