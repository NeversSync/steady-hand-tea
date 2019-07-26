import React from 'react';
import Layout from '../components/layout';
import Landing from '../components/Landing';
import Instagram from '../components/Instagram';
import Contact from '../components/Contact';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const IndexPage = () => (
  <Layout>
    <Landing/>
    <Instagram/>
    <Contact/>
  </Layout>
);

export default IndexPage;
