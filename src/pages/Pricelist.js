import React from 'react';
import { Wrapper } from '../styles/landing-style';
import { Card, Title, Image, ImageWrapper } from '../components/Helpers';
import '../styles/pricelist.css';

// TODO: Edit responsive style
function Pricelist() {
  return (
    <Wrapper style={{ gridColumn: '1 / -1' }}>
      <Card
        style={{
          gridColumn: '1 / -1',
          width: '100vw',
          justifyContent: 'center'
        }}
      >
        <Title>Steady Hand Tea</Title>
        <div className='ritz grid-container' dir='ltr'>
          <table className='waffle' cellSpacing={0} cellPadding={0}>
            <thead>
              <tr>
                <th className='row-header freezebar-origin-ltr' />
                <th
                  id='0C0'
                  style={{ width: '452px' }}
                  className='column-headers-background'
                >
                  A
                </th>
                <th
                  id='0C1'
                  style={{ width: '134px' }}
                  className='column-headers-background'
                >
                  B
                </th>
                <th
                  id='0C2'
                  style={{ width: '121px' }}
                  className='column-headers-background'
                >
                  C
                </th>
                <th
                  id='0C3'
                  style={{ width: '113px' }}
                  className='column-headers-background'
                >
                  D
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ height: '20px' }}>
                <th
                  id='0R0'
                  style={{ height: '20px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '20px' }}
                  >
                    1
                  </div>
                </th>
                <td className='s0'>TEA</td>
                <td className='s1 softmerge' dir='ltr'>
                  <div
                    className='softmerge-inner'
                    style={{ width: '133px', left: '-3px' }}
                  >
                    PRICE per 25gr.
                  </div>
                </td>
                <td className='s1 softmerge' dir='ltr'>
                  <div
                    className='softmerge-inner'
                    style={{ width: '120px', left: '-3px' }}
                  >
                    PRICE per Gram
                  </div>
                </td>
                <td className='s1 softmerge' dir='ltr'>
                  <div
                    className='softmerge-inner'
                    style={{ width: '118px', left: '-3px' }}
                  >
                    AVAILABILITY
                  </div>
                </td>
              </tr>
              <tr style={{ height: '20px' }}>
                <th
                  id='0R1'
                  style={{ height: '20px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '20px' }}
                  >
                    2
                  </div>
                </th>
                <td className='s2' />
                <td className='s3' />
                <td className='s3' />
                <td className='s3' />
              </tr>
              <tr style={{ height: '20px' }}>
                <th
                  id='0R2'
                  style={{ height: '20px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '20px' }}
                  >
                    3
                  </div>
                </th>
                <td className='s4'>Wulong</td>
                <td className='s5' />
                <td className='s5' />
                <td className='s5' />
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R3'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    4
                  </div>
                </th>
                <td className='s2'>
                  Charcoal roast Dong Ding organic wulong, DongdingShan, Lugu,
                  Nantou country, 700m, Mr. Su Xu Tie - Winter 2018
                </td>
                <td className='s6' dir='ltr'>
                  $5
                </td>
                <td className='s7' dir='ltr'>
                  0.2
                </td>
                <td className='s6'>aprx 1kg</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R4'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    5
                  </div>
                </th>
                <td className='s8'>
                  Dark charcoal roast cert. organic wulong, Zhu Shan, Nantou
                  country, 500m, David Tsay - Winter 2018
                </td>
                <td className='s9' dir='ltr'>
                  $7
                </td>
                <td className='s9' dir='ltr'>
                  0.27
                </td>
                <td className='s9'>aprx 500gr.</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R5'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    6
                  </div>
                </th>
                <td className='s2'>
                  MingQuan (twittering spring) 2X charcoal roast Dong Ding,
                  DongdingShan, Lugu, Nantou country, 700m, Master Zhan - Winter
                  2018
                </td>
                <td className='s6' dir='ltr'>
                  $10
                </td>
                <td className='s6' dir='ltr'>
                  0.34
                </td>
                <td className='s6' dir='ltr'>
                  aprx. 1kg
                </td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R6'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    7
                  </div>
                </th>
                <td className='s8'>
                  MingQuan (twittering spring) 4X dark charcoal roast Dong Ding,
                  DongdingShan, Lugu, Nantou country, 700m, Master Zhan - Winter
                  2018
                </td>
                <td className='s9' dir='ltr'>
                  $12
                </td>
                <td className='s10' dir='ltr'>
                  0.49
                </td>
                <td className='s10' dir='ltr'>
                  aprx. 1kg
                </td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R7'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    8
                  </div>
                </th>
                <td className='s2'>
                  Qi Lan Xiang 'Rare Orchid Fragrance' high charcoal roast
                  YanCha 'cliff tea', Wuyishan, Fujian, China - Spring 2017
                </td>
                <td className='s6' dir='ltr'>
                  $7
                </td>
                <td className='s7' dir='ltr'>
                  0.27
                </td>
                <td className='s7' dir='ltr'>
                  aprx. 1kg
                </td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R8'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    9
                  </div>
                </th>
                <td className='s8'>
                  Mi Lan Xiang 'Honey Orchid Frangrance' Dancong, Chaozhou,
                  Guangdong, China - Spring 18
                </td>
                <td className='s9' dir='ltr'>
                  $18
                </td>
                <td className='s10' dir='ltr'>
                  0.72
                </td>
                <td className='s9'>aprx. 500gr.</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R9'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    10
                  </div>
                </th>
                <td className='s2'>
                  Old Style Li Shan high mountain Qing Xin cultivar Wulong,
                  1800m, Chen Huang Tang - Spring 2018
                </td>
                <td className='s6' dir='ltr'>
                  $25
                </td>
                <td className='s7' dir='ltr'>
                  $1
                </td>
                <td className='s6'>To order</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R10'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    11
                  </div>
                </th>
                <td className='s8'>
                  Orchid' Baozhong Cert. organic wulong, Pinglin, Northern
                  Taiwan, 800m, Yu Banzhang - Spring 2018
                </td>
                <td className='s9' dir='ltr'>
                  $12
                </td>
                <td className='s10' dir='ltr'>
                  0.48
                </td>
                <td className='s9'>To order</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R11'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    12
                  </div>
                </th>
                <td className='s2'>
                  Traditional Qing Xin Wulong, Mei Shan high Mtn. Nantou county,
                  1200m, Chen Huang Tang - Winter 2018
                </td>
                <td className='s6' dir='ltr'>
                  $17
                </td>
                <td className='s7' dir='ltr'>
                  0.7
                </td>
                <td className='s6'>To order</td>
              </tr>
              <tr style={{ height: '20px' }}>
                <th
                  id='0R12'
                  style={{ height: '20px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '20px' }}
                  >
                    13
                  </div>
                </th>
                <td className='s8' />
                <td className='s9' />
                <td className='s9' />
                <td className='s9' />
              </tr>
              <tr style={{ height: '20px' }}>
                <th
                  id='0R13'
                  style={{ height: '20px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '20px' }}
                  >
                    14
                  </div>
                </th>
                <td className='s11'>Hong Cha (Red Tea)</td>
                <td className='s6' />
                <td className='s6' />
                <td className='s6' />
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R14'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    15
                  </div>
                </th>
                <td className='s8'>
                  Lugu Rolled Jin Xuan red tea , DongdingShan, Lugu, Nantou
                  country, 700m, Mr. Su Xu Tie - Sping/Autumn blend 2018
                </td>
                <td className='s9' dir='ltr'>
                  $2.20
                </td>
                <td className='s10' dir='ltr'>
                  0.08
                </td>
                <td className='s9'>Aprx. 500gr</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R15'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    16
                  </div>
                </th>
                <td className='s2'>
                  TRES Ruby #18 'Hong Yun' red tea, Sun Moon Lake, 900m - Summer
                  2018{' '}
                </td>
                <td className='s6' dir='ltr'>
                  $7
                </td>
                <td className='s7' dir='ltr'>
                  0.28
                </td>
                <td className='s6'>Aprx 1kg</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R16'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    17
                  </div>
                </th>
                <td className='s8'>
                  80 year old bush Assamica varietal Sun Moon Lake Ecological
                  red tea, 900m - Summer 2018
                </td>
                <td className='s9' dir='ltr'>
                  $8
                </td>
                <td className='s10' dir='ltr'>
                  0.33
                </td>
                <td className='s9'>To order</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R17'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    18
                  </div>
                </th>
                <td className='s2'>
                  Qing Xin red tea, Puli, Nantou, 1100m, Mr. Hong - Summer 2018
                </td>
                <td className='s6' dir='ltr'>
                  $9
                </td>
                <td className='s7' dir='ltr'>
                  0.37
                </td>
                <td className='s6'>To order</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R18'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    19
                  </div>
                </th>
                <td className='s8'>
                  GABA Cert. organic 'sleepytime' tea, Jin Xuan cultivar,
                  Pinglin, Northern Taiwan, 800m, Yu Banzhang - Spring 2016
                </td>
                <td className='s9' dir='ltr'>
                  $13
                </td>
                <td className='s10' dir='ltr'>
                  0.55
                </td>
                <td className='s9'>To order</td>
              </tr>
              <tr style={{ height: '20px' }}>
                <th
                  id='0R19'
                  style={{ height: '20px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '20px' }}
                  >
                    20
                  </div>
                </th>
                <td className='s2' />
                <td className='s6' />
                <td className='s6' />
                <td className='s6' />
              </tr>
              <tr style={{ height: '20px' }}>
                <th
                  id='0R20'
                  style={{ height: '20px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '20px' }}
                  >
                    21
                  </div>
                </th>
                <td className='s4'>Pu'er</td>
                <td className='s9' />
                <td className='s9' />
                <td className='s9' />
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R21'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    22
                  </div>
                </th>
                <td className='s12'>
                  1995 Paperless Sheng Pu'er bing - Hong Kong storage until
                  moved to Taiwan in early 2000’s
                </td>
                <td className='s13 softmerge' dir='ltr'>
                  <div
                    className='softmerge-inner'
                    style={{ width: '134px', left: '-3px' }}
                  >
                    Full ($180) or half ($90)
                  </div>
                </td>
                <td className='s14' dir='ltr'>
                  0.51
                </td>
                <td className='s6' dir='ltr'>
                  8 cakes
                </td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R22'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    23
                  </div>
                </th>
                <td className='s8'>
                  1990 loose sheng Hong Kong stored until 2013
                </td>
                <td className='s9' dir='ltr'>
                  $22.75
                </td>
                <td className='s10' dir='ltr'>
                  0.91
                </td>
                <td className='s9'>Aprx. 200gr.</td>
              </tr>
              <tr style={{ height: '64px' }}>
                <th
                  id='0R23'
                  style={{ height: '64px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '64px' }}
                  >
                    24
                  </div>
                </th>
                <td className='s2'>
                  2013 Bulang Shan (Mtn) He Kai village Shou Pu'er, Spring - 357
                  gr. cake
                </td>
                <td className='s6' dir='ltr'>
                  $100/cake
                </td>
                <td className='s7' dir='ltr'>
                  0.27
                </td>
                <td className='s6'>To order</td>
              </tr>
              <tr style={{ height: '20px' }}>
                <th
                  id='0R24'
                  style={{ height: '20px' }}
                  className='row-headers-background'
                >
                  <div
                    className='row-header-wrapper'
                    style={{ lineHeight: '20px' }}
                  >
                    25
                  </div>
                </th>
                <td className='s15' />
                <td className='s9' />
                <td className='s9' />
                <td className='s9' />
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </Wrapper>
  );
}

export default Pricelist;
