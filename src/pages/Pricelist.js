import React from 'react';
// import { Document } from 'react-pdf/dist/entry.webpack';
import {
  Wrapper,
} from '../styles/landing-style';
import {
  Card,
  Title,
  Image, ImageWrapper
} from '../components/Helpers';

function Pricelist() {
  return (
    <Wrapper>
      <Card>
        <Title>Steady Hand Tea</Title>
        <ImageWrapper>
          <Image height='auto' alt='blah' width='100%' src='../retail-pricelist.png'/>
        </ImageWrapper>
        {/* <a href='../../public/assets/steady-hand-tea-retail-pricelist-2019.pdf' target='_blank'>price list</a> */}
        {/* <iframe
          title="file"
          style={{ width: '100%', height: '100%' }}
          src='../../public/assets/Steady-hand-tea-retail-pricelist-2019.pdf'
        /> */}
        {/* <Document file="../../public/assets/Steady-hand-tea-retail-pricelist-2019.pdf">
          test
        </Document> */}
      </Card>
    </Wrapper>
  );
}

export default Pricelist;
