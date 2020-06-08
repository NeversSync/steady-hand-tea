module.exports = {
  siteMetadata: {
    title: 'Steady Hand Tea'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './public/assets/img/tea-favicon.png',
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-134726933-2',
        head: true
      }
    },
    { resolve: 'gatsby-plugin-styled-components' },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `steadyhandtea`,
        access_token: 'EAAkp6jFxMv4BAOgMxCx1roSjVk6iPdwe9BVgEA3dKeRcqRyX0ouHuUEpTFIvGB624jAZCXsZCiEaj2WsMVJbzU0QO2MvGINj6jKY1YUK1yO9nq8voj3CZBSILgLZCAWRUNb4KYRrZAbZAmNFHspNSSv81JfG0MZBCMTYszg6CZCnbQZDZD',
        instagram_id: '17841402115263303',
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://steadyhandtea.us4.list-manage.com/subscribe/post?u=5f5d3e540a5ec960f26e98baf&amp;id=0033db0253'
      }
    }
  ]
};


