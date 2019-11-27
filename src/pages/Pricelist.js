import React from 'react';
import { Title, PrimaryButton, Image, ImageWrapper } from '../components/Helpers';
import { PricelistContainer, PricelistWrapper, TableBodyWrapper, TableRow, CategoryTitle, TableCell, PricelistCard } from '../styles/pricelist-style';

// TODO: create responsive version and conditional rendering of labels.
// Stylize better

function Pricelist() {
  return (
    <PricelistContainer>
      <PricelistCard>
        <Title style={{marginBottom: '.5em'}}>Steady Hand Tea</Title>
        <PricelistWrapper>
          <table style={{display: 'grid', gridColumn: '1 / -1'}}>
            <TableBodyWrapper>
              <TableRow>
                <td >*Tea</td>
                <td>
                    *Price per 25gr.
                </td>
                <td>
                    *Price per Gram
                </td>
                <td>
                    *Availability
                </td>
              </TableRow>
              <TableRow>
                <CategoryTitle>Wulong</CategoryTitle>
              </TableRow>
              <TableRow>
                <TableCell >
                  Charcoal roast Dong Ding organic wulong, DongdingShan, Lugu,
                  Nantou county, 700m, Mr. Su Xu Tie - Winter 2018
                </TableCell>
                <TableCell >
                  $5
                </TableCell>
                <TableCell >
                  0.2
                </TableCell>
                <TableCell >aprx 1kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  Dark charcoal roast cert. organic wulong, Zhu Shan, Nantou
                  county, 500m, David Tsay - Winter 2018
                </TableCell>
                <TableCell >
                  $7
                </TableCell>
                <TableCell >
                  0.27
                </TableCell>
                <TableCell >aprx 500gr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  MingQuan (twittering spring) 2X charcoal roast Dong Ding,
                  DongdingShan, Lugu, Nantou county, 700m, Master Zhan - Winter
                  2018
                </TableCell>
                <TableCell >
                  $10
                </TableCell>
                <TableCell >
                  0.34
                </TableCell>
                <TableCell >
                  aprx. 1kg
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  MingQuan (twittering spring) 4X dark charcoal roast Dong Ding,
                  DongdingShan, Lugu, Nantou county, 700m, Master Zhan - Winter
                  2018
                </TableCell>
                <TableCell >
                  $12
                </TableCell>
                <TableCell>
                  0.49
                </TableCell>
                <TableCell>
                  aprx. 1kg
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  Qi Lan Xiang 'Rare Orchid Fragrance' high charcoal roast
                  YanCha 'cliff tea', Wuyishan, Fujian, China - Spring 2017
                </TableCell>
                <TableCell >
                  $7
                </TableCell>
                <TableCell >
                  0.27
                </TableCell>
                <TableCell >
                  aprx. 1kg
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  Mi Lan Xiang 'Honey Orchid Frangrance' Dancong, Chaozhou,
                  Guangdong, China - Spring 18
                </TableCell>
                <TableCell >
                  $18
                </TableCell>
                <TableCell>
                  0.72
                </TableCell>
                <TableCell >aprx. 500gr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  Old Style Li Shan high mountain Qing Xin cultivar Wulong,
                  1800m, Chen Huang Tang - Spring 2018
                </TableCell>
                <TableCell >
                  $25
                </TableCell>
                <TableCell >
                  $1
                </TableCell>
                <TableCell >To order</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  Orchid' Baozhong Cert. organic wulong, Pinglin, Northern
                  Taiwan, 800m, Yu Banzhang - Spring 2018
                </TableCell>
                <TableCell >
                  $12
                </TableCell>
                <TableCell>
                  0.48
                </TableCell>
                <TableCell >To order</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  Traditional Qing Xin Wulong, Mei Shan high Mtn. Nantou county,
                  1200m, Chen Huang Tang - Winter 2018
                </TableCell>
                <TableCell >
                  $17
                </TableCell>
                <TableCell >
                  0.7
                </TableCell>
                <TableCell >To order</TableCell>
              </TableRow>
              <TableRow>
                <TableCell  />
                <TableCell  />
                <TableCell  />
                <TableCell  />
              </TableRow>
              <TableRow>
                <CategoryTitle>Hong Cha (Red Tea)</CategoryTitle>
              </TableRow>
              <TableRow>
                <TableCell >
                  Lugu Rolled Jin Xuan red tea , DongdingShan, Lugu, Nantou
                  county, 700m, Mr. Su Xu Tie - Sping/Autumn blend 2018
                </TableCell>
                <TableCell >
                  $2.20
                </TableCell>
                <TableCell>
                  0.08
                </TableCell>
                <TableCell >Aprx. 500gr</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  TRES Ruby #18 'Hong Yun' red tea, Sun Moon Lake, 900m - Summer
                  2018
                </TableCell>
                <TableCell >
                  $7
                </TableCell>
                <TableCell >
                  0.28
                </TableCell>
                <TableCell >Aprx 1kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  80 year old bush Assamica varietal Sun Moon Lake Ecological
                  red tea, 900m - Summer 2018
                </TableCell>
                <TableCell >
                  $8
                </TableCell>
                <TableCell>
                  0.33
                </TableCell>
                <TableCell >To order</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  Qing Xin red tea, Puli, Nantou, 1100m, Mr. Hong - Summer 2018
                </TableCell>
                <TableCell >
                  $9
                </TableCell>
                <TableCell >
                  0.37
                </TableCell>
                <TableCell >To order</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  GABA Cert. organic 'sleepytime' tea, Jin Xuan cultivar,
                  Pinglin, Northern Taiwan, 800m, Yu Banzhang - Spring 2016
                </TableCell>
                <TableCell >
                  $13
                </TableCell>
                <TableCell>
                  0.55
                </TableCell>
                <TableCell >To order</TableCell>
              </TableRow>
              <TableRow>
                <CategoryTitle >Pu'er</CategoryTitle>
              </TableRow>
              <TableRow>
                <TableCell>
                  1995 Paperless Sheng Pu'er cake - Hong Kong storage until
                  moved to Taiwan in early 2000’s - 357g.
                </TableCell>
                <TableCell >
                    Full ($180) or half ($90)
                </TableCell>
                <TableCell>
                  0.51
                </TableCell>
                <TableCell >
                  8 cakes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  1990 loose sheng Hong Kong stored until 2013
                </TableCell>
                <TableCell >
                  $22.75
                </TableCell>
                <TableCell>
                  0.91
                </TableCell>
                <TableCell >Aprx. 200gr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  2013 Bulang Shan (Mtn) He Kai village Shou Pu'er, Spring - 357
                  gr. cake
                </TableCell>
                <TableCell >
                  $100/cake
                </TableCell>
                <TableCell >
                  0.27
                </TableCell>
                <TableCell >To order</TableCell>
              </TableRow>
            </TableBodyWrapper>
          </table>
        </PricelistWrapper>
        <PrimaryButton to='/'>HOME</PrimaryButton>
      </PricelistCard>
    </PricelistContainer>
  );
}

export default Pricelist;
