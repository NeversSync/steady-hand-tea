import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import 'reset-css';
import '../styles/boss.css';
import styled from 'styled-components';
import 'typeface-stylish';


const Content = styled.div`
  font-family: stylish, sans-serif;
  font-weight: 400;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title="Steady Hand Tea"
          meta={[
            { name: 'Steady Hand Tea', content: 'Promoting and bringing Tea Arts to the world.' },
            { name: 'keywords', content: 'Steady Hand Tea' },
            { name: 'description', content: 'Promoting and bringing Tea Arts to the world.' },
            { name: 'og:image', content: 'https://www.steadyhandtea.com/steadyhandtea-screenshot.png' },
            { name: 'og:url', content: 'https://www.steadyhandtea.com/' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: 'https://www.steadyhandtea.com/' },
            { name: 'twitter:title', content: 'Steady Hand Tea' },
            { name: 'twitter:description', content: 'Promoting and bringing Tea Arts to the world.' },
            { name: 'twitter:image', content: 'https://www.steadyhandtea.com/steadyhandtea-screenshot.png' }
          ]}
        />
        <Content>{children}</Content>
      </>
    )}
  />
);

export default Layout;
