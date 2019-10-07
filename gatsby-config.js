const postcssPresetEnv = require('postcss-preset-env');

const gatsbyConfig = {
	siteMetadata: {
		title: `Erko Bridee`,
		description: `Personal site`,
		author: `@erkobridee`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-typescript-app-starter`,
				short_name: `ts-starter`,
				start_url: `.`,
				background_color: `#ffffff`,
				theme_color: `#6d2f9c`,
				display: `minimal-ui`,
				icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 10,
				postCssPlugins: [postcssPresetEnv()],
			},
		},
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: { prefixes: [`/photos/*`] },
		},
	],
};

const pkg = require('./package.json');
const pathPrefix = require('./scripts/get-path-prefix')(pkg);
if (pathPrefix) {
	gatsbyConfig.pathPrefix = pathPrefix;

	gatsbyConfig.plugins.push({
		resolve: `gatsby-plugin-offline`,
		options: {
			modifyUrlPrefix: {
				'/': `${pathPrefix}/`,
			},
		},
	});
} else {
	gatsbyConfig.plugins.push(`gatsby-plugin-offline`);
}

module.exports = gatsbyConfig;
