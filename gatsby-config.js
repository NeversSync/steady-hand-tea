module.exports = {
  siteMetadata: {
    title: 'Steady Hand Tea',
  },
  plugins: ['gatsby-plugin-react-helmet',{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-134726933-2',
      head: true
    }},
  {resolve: 'gatsby-plugin-styled-components'}
  ]
};
