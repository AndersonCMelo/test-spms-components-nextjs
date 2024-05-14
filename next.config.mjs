/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.optimization = {
			splitChunks:{
				name: false,
				chunks: `all`,
				cacheGroups: {
					vendor: {
						chunks: 'all',
						reuseExistingChunk: true,
						test: /[\\/]node_modules[\\/]/,
						minSize: 0,
						minChunks: 1,
						maxAsyncRequests: 300,
						maxInitialRequests: 300,
						name: 'vendor'
					},
					default: false,
					defaultVendors: false
				}
			}
		}
    return config
  }
};

export default nextConfig;
