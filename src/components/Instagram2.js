// import React from 'react';
// import { Title } from '../components/Helpers';
// import { FaInstagram } from 'react-icons/fa';
// import {
//   InstaFeedImagesWrapper,
//   InstaImageWrapper,
//   InstaFeedContainer,
//   InstaTitleWrapper, IgSocialIcon
// } from '../styles/instagram-style';
// import { graphql, StaticQuery } from 'gatsby';
// import Image from 'gatsby-image';

// const Instagram = () => (
//   <StaticQuery
//     query={graphql`
//     query myQuery {
//       allInstagramContent {
//         edges {
//           node {
//             localFile {
//               childImageSharp {
//                 fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//             images {
//               standard_resolution {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//     `}
//     render={data => (
//       <InstaFeedContainer>
//         <InstaTitleWrapper>
//           <IgSocialIcon
//             href="https://www.instagram.com/steadyhandtea/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="link"
//             style={{ width: 'fit-content' }}
//           >
//             <FaInstagram />
//           </IgSocialIcon>
//           <Title style={{ textAlign: 'center', color: 'black' }}>
//             Steady Hand Tea on Instagram
//           </Title>
//         </InstaTitleWrapper>
//         <InstaFeedImagesWrapper>
//           {data.allInstagramContent.edges.slice(0, 12).map((item, i) => {
//             return item.node.localImage ? (
//               <InstaImageWrapper key={i}>
//                 <a
//                   href="https://www.instagram.com/steadyhandtea/"
//                   key={i}
//                   target="_blank"
//                 >
//                   <Image
//                     fluid={item.node.localImage.childImageSharp.fluid}
//                     key={i}
//                     style={{ borderRadius: '5px' }}
//                   />
//                 </a>
//               </InstaImageWrapper>
//             ) : (
//               <div />
//             );
//           })}
//         </InstaFeedImagesWrapper>
//       </InstaFeedContainer>
//     )}
//   />
// );

// export default Instagram;