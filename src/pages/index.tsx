import React from 'react';
// import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

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
            <FontIcon name="github" />{' '}
            <a href="https://github.com/erkobridee" target="_blank">
              GitHub
            </a>{' '}
            |{' '}
            <a href="https://gist.github.com/erkobridee" target="_blank">
              Gist
            </a>
          </li>
          <li>
            <FontIcon name="web-programming" />{' '}
            <a href="https://codesandbox.io/u/erkobridee/" target="_blank">
              Code Sandbox
            </a>
          </li>
          <li>
            <FontIcon name="codepen" />{' '}
            <a href="https://codepen.io/erkobridee" target="_blank">
              Codepen
            </a>
          </li>
          <li>
            <FontIcon name="linkedin" />{' '}
            <a href="https://linkedin.com/in/erkobridee/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <FontIcon name="udemy" />{' '}
            <a href="https://www.udemy.com/user/erko-bridee-de-almeida-cabrera/" target="_blank">
              Udemy
            </a>
          </li>
          <li>
            <FontIcon name="twitter" />{' '}
            <a href="https://twitter.com/ErkoBridee" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <FontIcon name="instagram" />{' '}
            <a href="https://www.instagram.com/erkobridee/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <FontIcon name="medium" />{' '}
            <a href="https://medium.com/@erkobridee" target="_blank">
              Medium
            </a>
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
