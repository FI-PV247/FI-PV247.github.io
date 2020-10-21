module.exports = {
	mount: {
		public: '/',
		src: '/modules',
	},
	plugins: [
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-typescript',
		["@snowpack/plugin-optimize", {/* ... */}]
	],
	buildOptions: {
		sourceMaps: true,
		clean: true,
	},
	alias: {
		Components: './src/Components',
		Theme: './src/Theme',
	},
};
