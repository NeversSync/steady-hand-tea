import React from 'react';
import { buildUrl, Instafeed } from 'instafeed-lite';
import { Wrapper } from '../styles/landing-style';
import { Card, Title, Image, ImageWrapper } from '../components/Helpers';

// function Instagram() {
  // const options = {
  //   accessToken: 'access...',
  //   clientId: 'client...',
  //   get: 'user', // popular, user
  //   locationId: null,
  //   resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  //   sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  //   tagName: null,
  //   userId: 123
  // };
  // const instagramUrl = buildUrl(options);
  // <script type="text/javascript">
  // var feed = new Instafeed({
  //   get: 'user',
  //   userId: '2106430508',
  //   accessToken: '2106430508.1677ed0.12b013893378461591af66bfb732b37e'
  // });
  // feed.run();
  // </script>

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
        <div id="instafeed"></div>
      </Card>
    </Wrapper>
  );
}

export default Instagram;
