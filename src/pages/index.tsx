import React from 'react';
// import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from 'components/Layout';
// import GatsbyAstronoutImage from 'components/GatsbyAstronoutImage';
import SEO from 'components/SEO';
import FontIcon from 'components/ui/FontIcon';

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

			<p>
				<FormattedMessage id="who.i.am" defaultMessage="I'm a mad computer scientist, but with bachelor's degree \o/" />
			</p>
			<br />

			<div>
				<ul>
					<li>
						<OutboundLink href="https://sourcerer.io/erkobridee" target="_blank" rel="noopener noreferrer">
							<img src="https://sourcerer.io/icons/logo-sharing.svg" height="16px" alt="Sourcerer" /> sourcerer.io
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="github" />{' '}
						<OutboundLink href="https://github.com/erkobridee" target="_blank" rel="noopener noreferrer">
							GitHub
						</OutboundLink>{' '}
						|{' '}
						<OutboundLink href="https://gist.github.com/erkobridee" target="_blank" rel="noopener noreferrer">
							Gist
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="codesandbox" />{' '}
						<OutboundLink href="https://codesandbox.io/u/erkobridee/" target="_blank" rel="noopener noreferrer">
							Code Sandbox
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="codepen" />{' '}
						<OutboundLink href="https://codepen.io/erkobridee" target="_blank" rel="noopener noreferrer">
							Codepen
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="repl" />{' '}
						<OutboundLink href="https://repl.it/@erkobridee" target="_blank" rel="noopener noreferrer">
							Repl.it
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="linkedin" />{' '}
						<OutboundLink href="https://linkedin.com/in/erkobridee/" target="_blank" rel="noopener noreferrer">
							LinkedIn
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="udemy" />{' '}
						<OutboundLink
							href="https://www.udemy.com/user/erko-bridee-de-almeida-cabrera/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Udemy
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="twitter" />{' '}
						<OutboundLink href="https://twitter.com/ErkoBridee" target="_blank" rel="noopener noreferrer">
							Twitter
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="instagram" />{' '}
						<OutboundLink href="https://www.instagram.com/erkobridee/" target="_blank" rel="noopener noreferrer">
							Instagram
						</OutboundLink>
					</li>
					<li>
						<FontIcon name="medium" />{' '}
						<OutboundLink href="https://medium.com/@erkobridee" target="_blank" rel="noopener noreferrer">
							Medium
						</OutboundLink>
					</li>
				</ul>
			</div>

			{/* <h1>
				<FormattedMessage id="home.greeting" defaultMessage="Hi people" />
			</h1>
			<p>
				<FormattedMessage id="home.welcome" defaultMessage="Welcome to your new Gatsby site." />
			</p>
			<p>
				<FormattedMessage id="home.gobuild" defaultMessage="Now go build something great." />
			</p> */}
			{/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<GatsbyAstronoutImage />
			</div> */}
			{/* <div>
				<Link to="/page-2">
					<FormattedMessage id="home.link-page2" defaultMessage="Go to page 2" />
				</Link>{' '}
				{' | '}
				<Link to="/photos">
					<FormattedMessage id="home.link-photos" defaultMessage="Go to photos" />
				</Link>
			</div> */}
		</Layout>
	);
};

export default IndexPage;
