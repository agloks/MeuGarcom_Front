module.exports = {
	siteMetadata: {
		title: `Meu Garçom Painel`,
		author: `Time21`,
		description: `Protótipo de idealização sobre o meu garçom no megahack`,
		siteUrl: `https://github.com/agloks`,
		social: {
			twitter: `@MeuGarçom`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-plugin-material-ui`,
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `tomato`,
				// Disable the loading spinner.
				showSpinner: false,
			},
		},
	],
}
