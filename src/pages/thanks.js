import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout'
import { SubTitle, HomeButton } from '../components/Helpers';


const Thanks = () => (
  <Layout>
    <div style={{minHeight: '80vh', display: 'grid', justifyContent: 'center', alignContent: 'center'}}>
      <SubTitle style={{color: 'hsla(187, 5%, 33%, 1)'}}>Thank you! We will be in touch shortly.</SubTitle>
      <HomeButton/>
    </div>
  </Layout>
);

export default Thanks;
