import React from 'react';
import Layout from '../components/layout';
import Link from 'gatsby-link';
import {
  Title,
  PrimaryButton,
  SubTitle
} from '../components/Helpers';
import {
  PricelistContainer,
  PricelistWrapper,
  TableBodyWrapper,
  TableRow,
  CategoryTitle,
  TableCell,
  PricelistCard,
  PricelistSubtitle
} from '../styles/pricelist-style';

function pricelist() {
  return (
    <Layout>
      <PricelistContainer>
        <PricelistCard>
          <Title style={{ marginBottom: '.5em' }}>Steady Hand Tea</Title>
          <PricelistWrapper>
        <PricelistSubtitle>
          To purchase tea, please use our <Link className='link' to='/#contact'>Contact Form</Link> to submit your order and we will follow up with an invoice by email
        </PricelistSubtitle>
            <table style={{ display: 'grid', gridColumn: '1 / -1' }}>
              <TableBodyWrapper>
                <TableRow>
                  <td>*Tea</td>
                  <td>*Price per 25gr.</td>
                  <td>*Price per Gram</td>
                  <td>*Availability</td>
                </TableRow>
                <TableRow>
                  <CategoryTitle>Wulong</CategoryTitle>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Charcoal roast Dong Ding organic wulong<br/>DongdingShan, Lugu,
                    Nantou county, 700m<br/>Mr. Su Xu Tie - Winter 2018
                  </TableCell>
                  <TableCell>$5</TableCell>
                  <TableCell>0.2</TableCell>
                  <TableCell>aprx 1kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Dark charcoal roast cert. organic wulong<br/>Zhu Shan, Nantou
                    county, 500m<br/>David Tsay - Winter 2018
                  </TableCell>
                  <TableCell>$7</TableCell>
                  <TableCell>0.27</TableCell>
                  <TableCell>aprx 500gr.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    MingQuan (twittering spring) 2X charcoal roast Dong Ding<br/>
                    DongdingShan, Lugu, Nantou county, 700m<br/>Master Zhan -
                    Winter 2018
                  </TableCell>
                  <TableCell>$10</TableCell>
                  <TableCell>0.34</TableCell>
                  <TableCell>aprx. 1kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    MingQuan (twittering spring) 4X dark charcoal roast Dong
                    Ding<br/>DongdingShan, Lugu, Nantou county, 700m<br/>Master Zhan -
                    Winter 2018
                  </TableCell>
                  <TableCell>$12</TableCell>
                  <TableCell>0.49</TableCell>
                  <TableCell>aprx. 1kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Qi Lan Xiang 'Rare Orchid Fragrance' high charcoal roast
                    YanCha 'cliff tea'<br/>Wuyishan, Fujian, China<br/>Spring 2017
                  </TableCell>
                  <TableCell>$7</TableCell>
                  <TableCell>0.27</TableCell>
                  <TableCell>aprx. 1kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Mi Lan Xiang 'Honey Orchid Frangrance' Dancong<br/>Chaozhou,
                    Guangdong, China<br/>Spring 18
                  </TableCell>
                  <TableCell>$18</TableCell>
                  <TableCell>0.72</TableCell>
                  <TableCell>aprx. 500gr.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                  GABA 'sleepytime' tea, charcoal roast<br/>Shiding, Northern Taiwan,
                  800m<br/>Mr. Zhan - Spring 2019
                  </TableCell>
                  <TableCell>$14</TableCell>
                  <TableCell>0.57</TableCell>
                  <TableCell>aprx. 500gr.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell />
                </TableRow>
                <TableRow>
                  <CategoryTitle>Hong Cha (Red Tea)</CategoryTitle>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Lugu Rolled Jin Xuan Red tea<br/>DongdingShan, Lugu, Nantou
                    county, 700m<br/>Mr. Su Xu Tie - Sping/Autumn blend 2018
                  </TableCell>
                  <TableCell>$2.20</TableCell>
                  <TableCell>0.08</TableCell>
                  <TableCell>To order</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    TRES Ruby #18 'Hong Yu' Red tea<br/>Sun Moon Lake, Taiwan, 900m<br/>Summer 2018
                  </TableCell>
                  <TableCell>$7</TableCell>
                  <TableCell>0.28</TableCell>
                  <TableCell>Aprx 1kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    80 year old bush Assamica varietal ecological
                    Red tea<br/>Sun Moon Lake, Taiwan, 900m<br/>Summer 2018
                  </TableCell>
                  <TableCell>$8</TableCell>
                  <TableCell>0.33</TableCell>
                  <TableCell>To order</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Wild Purple Var. old growth cake<br/>Gao Li Gong Mtns. NW Yunnan<br/>Spring 2018 - 200g.
                  </TableCell>
                  <TableCell>$13.75, $110/cake</TableCell>
                  <TableCell>0.55</TableCell>
                  <TableCell>8 cakes</TableCell>
                </TableRow>
                <TableRow>
                  <CategoryTitle>Pu'er</CategoryTitle>
                </TableRow>
                <TableRow>
                  <TableCell>
                    1995 Paperless Sheng Pu'er cake<br/>Hong Kong storage until
                    moved to Taiwan in early 2000’s<br/>357g.
                  </TableCell>
                  <TableCell>Full ($180) or half ($90)</TableCell>
                  <TableCell>0.51</TableCell>
                  <TableCell>8 cakes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    1990 Loose Sheng Pu'er<br/>Hong Kong stored until 2013
                  </TableCell>
                  <TableCell>$22.75</TableCell>
                  <TableCell>0.91</TableCell>
                  <TableCell>Aprx. 200gr.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    2013 Bulang Shan Shou Pu'er<br/>He Kai village<br/>357 g.
                  </TableCell>
                  <TableCell>$100/cake</TableCell>
                  <TableCell>0.27</TableCell>
                  <TableCell>To order</TableCell>
                </TableRow>
              </TableBodyWrapper>
            </table>
          </PricelistWrapper>
          <PrimaryButton to='/'>HOME</PrimaryButton>
        </PricelistCard>
      </PricelistContainer>
    </Layout>
  );
}

export default pricelist;
