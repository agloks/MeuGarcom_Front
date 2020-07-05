const path = require('path')
exports.onCreateWebpackConfig = ({ actions, stage }) => {
	// enable sourcemaps on dev
	// https: //github.com/gatsbyjs/gatsby/issues/6278
	if (stage === 'develop') {
		actions.setWebpackConfig({
			devtool: 'cheap-module-source-map',
		})
	}

	actions.setWebpackConfig({
		resolve: {
			modules: [path.join(__dirname, 'src'), 'node_modules'],
			alias: {
				'~components': path.resolve(__dirname, 'src/components'),
				'~utils': path.resolve(__dirname, 'src/utils'),
				'~data': path.resolve(__dirname, 'src/data'),
				'~images': path.resolve(__dirname, 'static/images')
			},
		},
	})
}
