import React from 'react';
// import { buildUrl, Instafeed } from 'instafeed-lite';
// import { Wrapper } from '../styles/landing-style';
// import { SubTitle } from '../components/Helpers';
import { Title } from '../components/Helpers';
import { FaInstagram } from 'react-icons/fa';
import {
  InstaFeedImagesWrapper,
  InstaImageWrapper,
  InstaFeedContainer,
  InstaTitleWrapper, SocialIcon
} from '../styles/instagram-style';
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
      // <InstaFeedWrapper>
      //   {data.allInstagramContent.edges.map((item, i) => {
      //     return item.node.localImage ? (
      //       <InstaImageWrapper>
      //         <Image
      //           fluid={item.node.localImage.childImageSharp.fluid}
      //           key={i}
      //         />
      //       </InstaImageWrapper>
      //     ) : (
      //       <div />
      //     );
      //   })}
      // </InstaFeedWrapper>

      <InstaFeedContainer>
        <InstaTitleWrapper>
          <SocialIcon
            href="https://www.instagram.com/djjoemygoodness/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            style={{ width: 'fit-content' }}
          >
            <FaInstagram />
          </SocialIcon>
          <Title style={{ textAlign: 'center', color: 'black' }}>
            Steady Hand Tea on Instagram
          </Title>
        </InstaTitleWrapper>
        <InstaFeedImagesWrapper>
          {data.allInstagramContent.edges.slice(0, 12).map((item, i) => {
            return item.node.localImage ? (
              <InstaImageWrapper key={i}>
                <a
                  href="https://www.instagram.com/djjoemygoodness/"
                  key={i}
                  target="_blank"
                  // className="ig-image"
                >
                  <Image
                    fluid={item.node.localImage.childImageSharp.fluid}
                    key={i}
                    style={{ borderRadius: '5px' }}
                  />
                </a>
              </InstaImageWrapper>
            ) : (
              <div />
            );
          })}
        </InstaFeedImagesWrapper>
      </InstaFeedContainer>
    )}
  />
);

export default Instagram;
