import React from 'react';
// import { buildUrl, Instafeed } from 'instafeed-lite';
import { Wrapper } from '../styles/landing-style';
import { Card, Title } from '../components/Helpers';
import { InstaFeedWrapper, InstaImageWrapper } from '../styles/instagram-style';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query myQuery {
        allInstagramContent {
          edges {
            node {
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              images {
                standard_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <InstaFeedWrapper>
          {data.allInstagramContent.edges.map((item, i) => {
            return item.node.localImage ? (
              <InstaImageWrapper>
                <Image
                  fluid={item.node.localImage.childImageSharp.fluid}
                  key={i}
                />
              </InstaImageWrapper>
            ) : (
              <div />
            );
          })}
        </InstaFeedWrapper>
      </div>
    )}
  />
);

export default Instagram;
