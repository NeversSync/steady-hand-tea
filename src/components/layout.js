import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import 'reset-css';
import '../styles/boss.css';
import styled from 'styled-components';
import 'typeface-fira-sans';

const Content = styled.div`
  font-family: fira sans, sans-serif;
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
            { name: 'Steady Hand Tea', content: 'Tea Arts' },
            { name: 'keywords', content: 'Steady Hand Tea' }
          ]}
        />
        <Content>{children}</Content>
      </>
    )}
  />
);

export default Layout;
