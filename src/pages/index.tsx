import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import GatsbyAstronoutImage from 'components/GatsbyAstronoutImage';
import SEO from 'components/SEO';

/*
<section id="downloads">
	<a href="https://github.com/erkobridee" class="btn btn-github"
		><span class="icon"></span>View on GitHub</a>

	<a href="https://about.me/erko.bridee" class="btn">About Me</a>
</section>
*/

const IndexPage = () => {
	return (
		<Layout>
			<FormattedMessage id="home.pagetitle" defaultMessage="Home">
				{text => <SEO title={text as string} />}
			</FormattedMessage>
			<p>I'm a mad computer scientist, but with bachelor's degree \o/</p>
			<br />

			<h1>
				<FormattedMessage id="home.greeting" defaultMessage="Hi people" />
			</h1>
			<p>
				<FormattedMessage id="home.welcome" defaultMessage="Welcome to your new Gatsby site." />
			</p>
			<p>
				<FormattedMessage id="home.gobuild" defaultMessage="Now go build something great." />
			</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<GatsbyAstronoutImage />
			</div>
			<div>
				<Link to="/page-2">
					<FormattedMessage id="home.link-page2" defaultMessage="Go to page 2" />
				</Link>{' '}
				{' | '}
				<Link to="/photos">
					<FormattedMessage id="home.link-photos" defaultMessage="Go to photos" />
				</Link>
			</div>
		</Layout>
	);
};

export default IndexPage;
