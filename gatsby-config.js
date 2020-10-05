const postcssPresetEnv = require('postcss-preset-env');

const gatsbyConfig = {
	siteMetadata: {
		title: `Erko Bridee`,
		description: `Personal site`,
		author: `@erkobridee`,
	},
	plugins: [
		// it must be the first one on the array
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-1486171-2',
				// this option places the tracking script into the head of the DOM
				head: false,
			},
		},
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
				name: `erkobridee_site`,
				short_name: `eb-site`,
				start_url: `.`,
				background_color: `#ffffff`,
				theme_color: `#303327`,
				display: `minimal-ui`,
				icon: `src/assets/images/erko_avatar_512.png`, // This path is relative to the root of the site.
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
