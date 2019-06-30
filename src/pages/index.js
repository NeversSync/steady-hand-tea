import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import Landing from '../components/Landing';
import Instagram from '../components/Instagram';

const IndexPage = () => (
  <Layout>
    <Landing/>
    <Instagram/>
  </Layout>
);

export default IndexPage;
