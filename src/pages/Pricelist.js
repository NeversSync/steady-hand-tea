import React from 'react';
// import { Document } from 'react-pdf/dist/entry.webpack';
import {
  Wrapper,
} from '../styles/landing-style';
import {
  Card,
  Title,
  Image,
  ImageWrapper
} from '../components/Helpers';

// TODO: MAKE PRICELIST AS PAGE
function Pricelist() {
  return (
    <Wrapper style={{gridColumn: '1 / -1'}}>
      <Card style={{gridColumn: '1 / -1', width: '100vw', justifyContent: 'center'}}>
        <Title>Steady Hand Tea</Title>

        <a href='https://docs.google.com/spreadsheets/d/1833mdAkcj5nNxnhVaKtVrwqkMHAf3bdwRE4NeYMCZGM/edit?usp=sharing' target='_blank'>price list</a>
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
